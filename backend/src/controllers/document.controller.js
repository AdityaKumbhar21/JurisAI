import {documentModel} from "../models/document.model.js";
import { cloudinaryUpload } from "../utils/cloudinaryUpload.js";
import path from "path";
import multer from "multer";
import { extractTextPdf, extractTextWithTesseract } from "../utils/textExtractions.js";


const storage = multer.memoryStorage();
const upload = multer({storage});


export const uploadFile = async (req, res)=>{
    try {
        const file = req.file;
        if(!file){
            res.status(400).json({"message":"Please upload a file or Image !"})
        }
        const fileName = path.parse(file.originalname).name
        const result = await cloudinaryUpload(file.buffer);
        if(!result){
            res.status(400).json({"message":"Something went Wrong"});
        }
        const userId = req.user._id;
        let extractedText = "";

        if(file.mimetype.startsWith("image/")){
            extractedText = await extractTextWithTesseract(result.secure_url);
        }
        else if(file.mimetype === "application/pdf"){
            extractedText =  await extractTextPdf(file.buffer);
        }
        else{
            return res.status(400).json({"message":"File type not supported"});
        }
        
        const uploadedDocument = await documentModel.create({
            userId,
            fileUrl: result.secure_url,
            fileName,
            extractedText,
            status: "Processed"
        });
        

        
        res.status(200).json({url: uploadedDocument.fileUrl, name: uploadedDocument.fileName, text: uploadedDocument.extractedText});
        

    } catch (error) {
        console.log("File upload error: ", error);
        res.status(500).json({"message":"Error uploading file"});
    }
}



export default upload;