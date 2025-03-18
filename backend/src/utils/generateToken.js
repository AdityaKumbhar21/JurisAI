import jwt from "jsonwebtoken";



export const generateToken = (userId, res)=>{
    try {
        const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY, {
            expiresIn:"7d",
        });

        res.cookie("token", token, {
            maxAge: 7*60*60*60*1000, // msec
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development"
        })
    } catch (error) {
        console.log("Generate token error: ", error);
        res.status(500).json({"meesage":"Internal Server Issue"});
    }
}