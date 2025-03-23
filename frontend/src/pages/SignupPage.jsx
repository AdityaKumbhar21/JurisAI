import React from 'react'
import {Link} from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-primary flex justify-center items-center p-4 font-sec">
  <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md h-[600px] flex flex-col justify-between">
    <div>
      <h1 className="text-4xl font-black text-center mb-4">juris.ai</h1>
      <h2 className="text-2xl text-center mt-12 mb-2">Welcome</h2>
      <p className="text-center text-gray-600 mb-8 text-base">
        Sign up to your account
      </p>

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Enter fullname*"
          className="w-full border border-gray-300 rounded-md py-3 px-4 text-base text-lg"
          required
        />
        <input
          type="email"
          placeholder="Enter email*"
          className="w-full border border-gray-300 rounded-md py-3 px-4 text-base text-lg"
          required
        />
        <input
          type="password"
          placeholder="Password*"
          className="w-full border border-gray-300 rounded-md py-3 px-4 text-base text-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-black text-white rounded-md py-3 px-4 text-lg hover:bg-gray-800 transition hover:cursor-pointer"
        >
          Sign Up
        </button>
      </form>
    </div>

    <p className="text-center mt-6 text-sm">
      Already have an account?{' '}
      <Link to="/login" className="hover:cursor-pointer hover:underline ">
        Register
      </Link>
    </p>
  </div>
</div>

  );
}

export default SignupPage