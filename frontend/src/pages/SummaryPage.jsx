import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function SummaryPage() {


  return (
    <div className="min-h-screen flex flex-col w-screen font-sec bg-white">
    <NavBar />
    <main className="flex-grow p-6">
    <div className=" w-screen flex justify-start mb-8">
          <Link
            to="/home"
            className="text-gray-600 text-lg hover:text-black transition"
          >
            ← Back to Home
          </Link>
        </div>
      <div className="max-w-4xl mx-auto">
        
  
        <h1 className="text-3xl font-bold mb-6 text-center">Summary Report</h1>
        <p className="text-center text-gray-500 mb-10">Generated overview based on your uploaded documents</p>
  
        <div className="mb-8 animate-pulse text-lg text-gray-700">Summarizing...</div>
  
        <div className="space-y-6">
          <div className="">
            <h2 className="flex items-center text-xl font-bold mb-4">
              <span className="text-blue-500 text-2xl mr-2">◆</span>
              Agreement Overview
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet totam nemo. Mollitia ex impedit modi
              nisi ipsa, perferendis a sunt. Incidunt minima temporibus ducimus nesciunt repellat perferendis quos earum!
            </p>
          </div>
          
          {/* Add more summary sections as needed */}
        </div>
      </div>
    </main>
  </div>
  
  );
}


export default SummaryPage;