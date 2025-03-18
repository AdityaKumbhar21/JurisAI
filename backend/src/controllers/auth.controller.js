import { userModel } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";


export const signup = async (req, res)=>{
    try {
        const {fullname, email, password} = req.body;

        const user = await userModel.findOne({email});

        if(user) return res.status(400).json({"message":"User already exists"});
        const saltRounds = 12;

        bcrypt.hash(password, saltRounds,async (err, hash)=>{
            if(err) return res.status(400).json({"message":"Something went wrong while signing you up"});
            
            const createdUser = await userModel.create({
                fullname,
                email,
                password: hash
            });

            generateToken(createdUser._id, res);
            res.status(200).json({"message":"User created successfully"});
            
        });
    } catch (error) {
        console.log("Signup error: ", error);
        res.status(500).json({"message":"Internal Server error"});
    }
}


export const login = async (req, res)=>{
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if(!user)return res.status(400).json({"message":"Invalid Credentials"});

        bcrypt.compare(password, user.password, (err, result)=>{
            if(err){
                console.log(err);
                
                return res.status(400).json({"message":"Something went wrong while logging you up"});
            } 

            if(result){
                generateToken(user._id, res);
                return res.status(200).json({"message":"Login Successful!"});
            }
            else{
                return res.status(400).json({"message":"Invalid Credentials"});
            }
        });
    } catch (error) {
        console.log("Login error: ", error);
        res.status(500).json({"message":"Internal Server error"});
    }
}

export const logout = (req, res)=>{
    try {
        res.cookie("token", "");
        res.status(200).json({"message":"Logged out successfully"});
    } catch (error) {
        console.log("Logout error: ", error);
        res.status(500).json({"messages":"Internal Server error"});
        
    }
}

export const checkAuth = async (req, res)=>{
    try {
       res.status(200).json(req.user)
    } catch (error) {
        console.log("Check Auth error: ", error);
        res.status(500).json({"message":"Internal Server error"});
    }
}