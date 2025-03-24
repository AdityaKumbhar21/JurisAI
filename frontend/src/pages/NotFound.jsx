import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center p-5 bg-primary flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-6xl mb-4 font-semibold">404 - Page Not Found</h1>
      <Link to="/" className="text-sec text-2xl hover:underline hover:text-black">Go back to Home</Link>
    </div>
  );
}
