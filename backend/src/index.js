import express from "express";
import authRoutes from "./routes/authRoutes.js";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { dbConnection } from "./config/db.config.js";
dotenv.config();

// applying middelwares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


// adding routes
app.use("/api/auth", authRoutes)

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("Server is running on port ", port);
    dbConnection();
});