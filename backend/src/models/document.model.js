import mongoose from "mongoose";

const documentSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },

    fileUrl: {
        type: String,
        required: true,
    },

    fileName: {
        type:String,
        required: true
    },

    extractedText:{
        type:String,
        default: "",
    },

    summary:{
        type:String,
        default:""
    },

    status:{
        type: String,
        enum: ["Uploaded", "Processed", "Summarized"],
        default: "Uploaded"
    },
}, {timestamps: true});


export const documentModel = mongoose.model("Document", documentSchema);