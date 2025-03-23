import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {useAuthStore} from "../store/useAuthStore";
import {EyeOff, Eye, Loader2} from "lucide-react"

const SignupPage = () => {

  const {isSigningUp, signUp} = useAuthStore();
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setformData] = useState({
    fullname:"",
    email: "",
    password: "",

  });

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    signUp(formData);
  }

  return (
    <div className="min-h-screen bg-primary flex justify-center items-center p-4 font-sec">
  <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md h-[600px] flex flex-col justify-between">
    <div>
      <h1 className="text-4xl font-black text-center mb-4">juris.ai</h1>
      <h2 className="text-2xl text-center mt-12 mb-2">Welcome</h2>
      <p className="text-center text-gray-600 mb-8 text-base">
        Sign up to your account
      </p>

      <form onSubmit={handleFormSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Enter fullname*"
          value={formData.fullname}
          onChange={(e)=>setformData({...formData,fullname: e.target.value})}
          className="w-full border border-gray-300 rounded-md py-3 px-4 text-base text-lg"
          required
        />
        <input
          type="email"
          placeholder="Enter email*"
          value={formData.email}
          onChange={(e)=> setformData({...formData, email:e.target.value})}
          className="w-full border border-gray-300 rounded-md py-3 px-4 text-base text-lg"
          required
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password*"
            value={formData.password}
            onChange={(e) => setformData({ ...formData, password: e.target.value })}
            className="w-full border border-gray-300 rounded-md py-3 px-4 text-base text-lg pr-12" 
            required
          />
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white rounded-md py-3 px-4 text-lg hover:bg-gray-800 transition hover:cursor-pointer" disabled={isSigningUp}>
          {isSigningUp ? (
              <>
              <Loader2 className="size-5 animate-spin" />
              Loading...
            </>) : ("Sign Up")}
        </button>
      </form>
    </div>

    <p className="text-center mt-6 text-sm">
      Already have an account?{' '}
      <Link to="/login" className="hover:cursor-pointer hover:underline ">
        SignIn
      </Link>
    </p>
  </div>
</div>

  );
}

export default SignupPage