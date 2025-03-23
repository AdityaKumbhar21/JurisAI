import { axiosInstance } from "../lib/axios";
import {create} from "zustand";
import {toast} from "react-hot-toast";



export const useAuthStore = create((set, get)=>({
    isSigningUp: false,
    isSigningIn: false,
    isLoggingOut: false,
    authUser: null,
    isCheckingAuth: false,


    checkAuth: async ()=>{
        try {
            const res = await axiosInstance.get('/auth/check');
            set({authUser: res.data});
        } catch (error) {
            console.error("Error in the checking store", error);
            set({authUser:null});
        }finally{
            set({isCheckingAuth: false});
        }
    },

    signUp: async (data)=>{
        try {
            set({isSigningUp: true});
            const res = await axiosInstance.post('/auth/signup', data);
            set({authUser: res.data});
            toast.success("Account created successfully");
        } catch (error) {
            console.error("error in signing up: ", error);
            toast.error(error.response.data.message);
        }
        finally{
            set({isSigningUp: false});
        }
    },


    signIn: async(data) =>{
        try {
            set({isSigningIn: true});
            const res = await axiosInstance.post('/auth/login', data);
            set({authUser: res.data});
            toast.success("Logged in successfully");
        } catch (error) {
            console.error("Error in logging in: ", error);
            toast.error(error.response.data.message);
        }
    },

    logout: async()=>{
        try {
            set({isLoggingOut: true});
            await axiosInstance.post('/auth/logout');
            set({authUser: null});
            toast.success("Logged out Succesfully");
        } catch (error) {
            console.error("Error in logging out: ", error);
            toast.error(error.response.data.message);
        } finally{
            set({isLoggingOut: false})
        }
    }
}))