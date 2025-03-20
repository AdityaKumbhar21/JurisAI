import pdf from "pdf-parse";
import axios from "axios";

import tessaract from "tesseract.js"




export const extractTextPdf = async (fileUrl)=>{
    try {
        const data = await  pdf(fileUrl);
    
        return data.text;
    } catch (error) {
        console.log("Pdf -Parse error: ", error);
        throw new Error("Could not parse pdf");
    }
}

export const extractTextWithTesseract = async (fileUrl) =>{
    try {
        const {data: {text}} = await tessaract.recognize(
            fileUrl,
            'eng',
        );
        return text;
    } catch (error) {
        console.log("Tesseract error: ", error);
        throw new Error("Failed to extract data");
        
    }
}



