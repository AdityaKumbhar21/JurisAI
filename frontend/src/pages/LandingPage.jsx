import React from 'react'
import FactSlider from "../components/FactSlider"
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-red">
      <header className="bg-primary p-4 flex justify-between items-center mx-4 rounded-2xl mt-4">
        <div className="text-4xl font-black px-6">juris.ai</div>
        <div className='px-6  '>
        <Link to="/login" className="inline-block border border-black text-center text-md bg-white rounded-lg px-6 py-2 hover:bg-black hover:text-white transition whitespace-nowrap w-40">
        Sign In
        </Link>
        </div>
      </header>
      
    
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8 text-center">
        <h1 className="text-md text-sec font-cre"> <span className="text-blue-500 text-sm mr-2">◆</span>Powered AI</h1>
        <h1 className="text-6xl font-black mb-2">Tired of Long Legal Docs?</h1>
        <h2 className="text-6xl font-black mb-6">Let AI Summarize Them for You!</h2>
        <p className="max-w-md mx-auto mb-8 text-sec text-lg">
          Transform legal complexity into clarity with AI-powered document summaries.
        </p>
        
        <Link to="/getstarted" className="flex items-center justify-center w-60 text-lg bg-black text-white px-6 py-3 rounded-md mb-4 hover:bg-gray-900 transition">
          Get Started
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </main>
      
      <FactSlider />
      </div>

  );
}


export default LandingPage