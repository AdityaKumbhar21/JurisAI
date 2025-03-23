import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import {toast } from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {Loader2} from "lucide-react"

const NavBar = () => {
    const {isLoggingOut, logout} = useAuthStore();
    const navigate = useNavigate();
    const handleClick = (e) => {
      e.preventDefault();
      toast((t) => (
         <span>
          Are you sure you want to logout?
          <div className="flex gap-2 mt-2 justify-center">
            <button
              className="px-4 py-1 bg-red-500 text-white rounded hover:cursor-pointer hover:bg-red-700"
              onClick={() => {
                logout(); 
                navigate('/');
                toast.dismiss(t.id);
              }}
            >
              Yes
            </button>
            <button
              className="px-4 py-1 border rounded hover:cursor-pointer hover:bg-gray-100"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </span>
      ), { duration: 10000 });
    };
  
  return (
  
    <header className="bg-primary p-4 flex justify-center font-sec items-center mx-4 rounded-2xl mt-4 fixed top-0 left-0 right-0 z-50 relative">
      <div className="text-4xl font-bold text-center px-6">juris.ai</div>
      <div className="absolute right-6">
       <button onClick={handleClick} className="inline-block border border-black text-center text-md bg-white rounded-lg px-6 py-2 hover:bg-black hover:text-white transition whitespace-nowrap w-40 hover:cursor-pointer" disabled={isLoggingOut}>
        {isLoggingOut ? (<>
              <Loader2 className="size-5 animate-spin" />
              Loading...
            </>): ("Logout")}

       </button>
      </div>
    </header>

  )
}

export default NavBar