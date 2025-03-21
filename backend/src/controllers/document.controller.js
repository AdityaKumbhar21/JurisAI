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
        uploadedDocument = await documentModel.findByIdAndUpdate(uploadedDocument._id, {summary,status:"Compeleted"}, {new:true});


        
        res.status(200).json({name: uploadedDocument.fileName, text: uploadedDocument.extractedText, summary});
    } catch (error) {
        console.log("File upload error: ", error);
        await documentModel.findByIdAndUpdate(uploadedDocument._id, {status:"failed"}, {new:true});
        res.status(500).json({"message":"Error uploading file"});
    }
}




export default upload;