import mongoose from "mongoose";


export const dbConnection = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongo DB successfully connected at: ", conn.connection.host);
    } catch (error) {
        console.log("Mongo DB connection error: ", error);
    }
}