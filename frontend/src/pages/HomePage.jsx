import NavBar from '../components/NavBar';
import History from '../components/History';
import { useState } from 'react';
import { useDocStore } from '../store/useDocStore';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const HomePage = () => {

  const [selectedFile, setSelectedFile]= useState(null)
  const {isFileUploading, upload} = useDocStore();
  const navigate = useNavigate();


  
  

  const handleFormChange = (e)=>{
    const file = e.target.files[0];
    if(file){
      setSelectedFile(file);
    }
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    if(!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);
    upload(formData, navigate);
  }
  return (
    <div>
      <NavBar />
    <main className="flex-grow p-6 flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-md text-center">
            <h1 className="text-2xl mb-4">Get Started — Add Files, Images, etc to summarize</h1>

            <form onSubmit={handleFormSubmit} encType='multipart/form-data'>
              <div className="mb-4 flex justify-center">
                <label
                  htmlFor="file-upload"
                  className="w-24 h-24 flex items-center justify-center bg-primary rounded-lg cursor-pointer hover:bg-blue-100 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-10 h-10 text-gray-400"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*,application/pdf"
                    className="hidden"
                    onChange={handleFormChange}
                  />
                </label>
              </div>  
                {selectedFile && (
                    <p className="mt-2 text-lg text-sec mb-3">
                      Selected file: <span className="font-semibold">{selectedFile.name}</span>
                    </p>
                  )}

              <button
                type="submit"
                className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition w-60 text-lg hover:cursor-pointer" disabled={isFileUploading}>
                {isFileUploading ? (
                  <>
                    <Loader2 className="size-5 animate-spin">
                      Uploading....
                    </Loader2>
                  </>
                ) : ("Summarize")}
              </button>
            </form>
          </div>
        </div>

        
        <div className="mt-10">
        </div>
        
          <History />
      </div>
    </main>
    </div>
  );
};

export default HomePage;
