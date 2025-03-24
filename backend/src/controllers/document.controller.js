import {documentModel} from "../models/document.model.js";
import { cloudinaryUpload } from "../utils/cloudinaryUpload.js";
import path from "path";
import multer from "multer";
import { extractTextPdf, extractTextWithTesseract } from "../utils/textExtractions.js";
import { summarizeText } from "../utils/summarizeText.js";


const storage = multer.memoryStorage();
const upload = multer({storage});


export const uploadFile = async (req, res)=>{
    try {
        const file = req.file;
        if(!file){
           return res.status(400).json({"message":"Please upload a file or Image !"})
        }

        const fileName = path.parse(file.originalname).name
        const result = await cloudinaryUpload(file.buffer);
        if(!result){
          return  res.status(400).json({"message":"Something went Wrong"});
        }
        const userId = req.user._id;
        let uploadedDocument = await documentModel.create({
            userId,
            fileUrl: result.secure_url,
            fileName,
        });
        
        let extractedText = "";
        await documentModel.findByIdAndUpdate(uploadedDocument._id, {extractedText,status:"Extracting"}, {new:true});


        //Extracting Text
        if(file.mimetype.startsWith("image/")){
            extractedText = await extractTextWithTesseract(result.secure_url);
        }
        else if(file.mimetype === "application/pdf"){
            extractedText =  await extractTextPdf(file.buffer);
        }
        else{
            return res.status(400).json({"message":"File type not supported"});
        }


        uploadedDocument = await documentModel.findByIdAndUpdate(uploadedDocument._id, {extractedText,status:"Summarizing"}, {new:true});


        // summarizing
        const summary = await summarizeText(extractedText);
        uploadedDocument = await documentModel.findByIdAndUpdate(uploadedDocument._id, {summary,status:"Completed"}, {new:true});

        res.status(200).json({name: uploadedDocument.fileName,uploadId: uploadedDocument._id, summary});
    } catch (error) {
        console.log("File upload error: ", error);
        await documentModel.findByIdAndUpdate(uploadedDocument._id, {status:"Failed"}, {new:true});
        res.status(500).json({"message":"Error uploading file"});
    }
}

export const getFileStatus = async(req, res)=>{
    try {
        const {id} = req.params;

        const doc = await documentModel.findById(id);
        if(!doc)return res.status(400).json({"message":"No document found"});

        if(doc.userId.toString() !== req.user._id.toString()){
            return res.status(403).json({"message":"Unauthorized access"});
        }

        res.status(200).json({
            status: doc.status,
            summary: doc.summary || ""
        });

    } catch (error) {
        console.log("Getting file status error: ", error);
        res.status(500).json({"message": "Internal Server Issue"})
    }
}

export const getHistory = async(req, res)=>{
    try {
        const history = await documentModel.find({userId: req.user._id})
        .select("-fileUrl -extractedText, -summary")
        .sort({createdAt: -1})
        .lean();
        res.status(200).json(history);
    } catch (error) {
        console.log("Getting history error: ", error);
        res.status(500).json({"message":"Internal Server Issue"});
    }
}

export default upload;