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
        default: "Pending"
    },
}, {timestamps: true});


export const documentModel = mongoose.model("Document", documentSchema);