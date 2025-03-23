import express from "express";
import authRoutes from "./routes/authRoutes.js";
import documentRoutes from "./routes/documentRoutes.js";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import { dbConnection } from "./config/db.config.js";
import cors from "cors";
dotenv.config();

// applying middelwares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


// adding routes
app.use("/api/auth", authRoutes);
app.use("/api/doc", documentRoutes);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("Server is running on port ", port);
    dbConnection();
});