import { Link, useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import {useDocStore} from "../store/useDocStore";
import { useEffect } from 'react';
import toast from 'react-hot-toast';

function SummaryPage() {
  const {isSummaryLoading, pollDocumentStatus, summary, fileName} = useDocStore();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    pollDocumentStatus(id, ()=>{
      toast.error("Failed to summarize document");
      navigate('/home');
    })
  }, [id])
  return (
    <div className="min-h-screen flex flex-col w-screen font-sec bg-white">
    <NavBar />
    <div className=" w-screen flex justify-start mb-8 mt-30 ml-3">
          <Link
            to="/home"
            className="text-gray-600 text-lg hover:text-black transition"
          >
            ← Back to Home
          </Link>
        </div>
    <main className="flex-grow p-6 mt-6">
    
      <div className="max-w-4xl mx-auto">
        
  
       <div className='mt-6'>
          <h1 className="text-3xl font-bold mb-6 text-center mt-4">Summary Report</h1>
          <p className="text-center text-gray-500 mb-10">Generated overview based on your uploaded documents</p>
       </div>
  
        {isSummaryLoading && <div className="mb-8 animate-pulse text-lg text-gray-700">Sumarizing...</div>}
  
        {!isSummaryLoading && 
          <div className="space-y-6">
          <div className="">
            <h2 className="flex items-center text-xl font-bold mb-4">
              Summary for {fileName}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {summary}
            </p>
          </div>
        </div>
        }
      </div>
    </main>
  </div>
  
  );
}


export default SummaryPage;