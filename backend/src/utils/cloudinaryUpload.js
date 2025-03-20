import cloudinary from  "../config/cloudinary.config.js";
import streamifier from "streamifier";


export const cloudinaryUpload = (fileBuffer) =>{
    return new Promise((resolve, reject)=>{
        const stream = cloudinary.uploader.upload_stream({resource_type:'auto'}, 
            (err, result)=>{
                if(result) return resolve(result);
                else reject(err);
            }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
    });
}


