import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
import {toast} from "react-hot-toast";

export const useDocStore = create ((set, get)=>({
    isSummaryLoading: false,
    history: [],
    summary: "",
    fileName: "",
    documentId: "",
    isFileUploading: false,
    isHistoryLoading: false,


    upload : async(data, navigate) =>{
        set({isFileUploading: true , summary: "", documentId: "", });
        try {
            const res = await axiosInstance.post('/doc/upload', data);
            const {name, uploadId} = res.data;
            set({isFileUploading: false, summary: "", fileName : name, documentId: uploadId});
            navigate(`/summary/${uploadId}`);

        } catch (error) {
            set({isFileUploading: false});
            console.error("Error in file uploading", error);
            toast.error(error?.response?.data?.message || "Upload failed");
        }
    },

    getHistory : async()=>{
        set({isHistoryLoading: true});
        try {
            const res = await axiosInstance.get('/doc/history');

            set({history: res.data});

        } catch (error) {
            console.error("Error loading history: ", error);
            toast.error(error.response.data.message);
        }finally{
            set({isHistoryLoading: false})
        }
    },

    pollDocumentStatus: async(id, pollingError)=>{
        set({isSummaryLoading: true});
        const interval = setInterval(async ()=>{
            try {
                const res = await axiosInstance.get(`/doc/getstatus/${id}`);
                const {status, summary} = res.data;

                if(status === "Completed"){
                    clearInterval(interval);
                    set({summary, isSummaryLoading: false});
                }
                else if(status === "Failed"){
                    clearInterval(interval);
                    set({summary: "Failed to summarize the document", isSummaryLoading: false});
                    pollingError && pollingError();
                }
            } catch (error) {
                console.error("Polling error: ", error);
                set({isSummaryLoading: false});
                clearInterval(interval);
            }
        }, 3000)
    }
    

}))