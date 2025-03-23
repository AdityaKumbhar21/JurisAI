// src/pages/LandingPageAlt.jsx
import { Link } from 'react-router-dom';

function GetStartedPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sec">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full flex flex-col items-center text-center">
          <div className="text-6xl font-black mb-9">juris.ai</div>
          <h1 className="text-3xl font-semibold mb-2 mt-12">Welcome to juris.ai</h1>
          <p className="text-sec mb-6">
            Unlock AI-Driven Legal Summaries — No More Wasted Time on Documents.
          </p>

          <Link
            to="/signup"
            className="bg-black text-white px-6 py-3 rounded-md mb-4 w-full hover:scale-105 transition-transform duration-300 ease-in-out transform"
          >
            Get Started
          </Link>

          <div className="text-center my-2">OR</div>

            <Link to="/login"
              className="border border-black bg-white px-6 py-3 rounded-md w-full  hover:scale-105 transition-transform duration-300 ease-in-out transform">
              Sign In
            </Link>

          <p className="text-md text-black  mt-6 ">
            By continuing you agree to juris.ai <span className='underline'>Terms and Conditions</span>
          </p>
        </div>
</div>

      
      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-blue-100 p-8 m-9 rounded-3xl  flex flex-col justify-center items-center">
        <div className="max-w-2xl w-full">
          <h2 className="text-2xl font-bold mb-4 text-center">Legal Clarity, One Click Away.</h2>
          <h3 className="text-xl mb-6 text-center">AI-Powered Summaries in Seconds.</h3>
          
          <div className="flex justify-center">
            <img 
              src="./asset1.png" 
              alt="Office workers at desks" 
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStartedPage;