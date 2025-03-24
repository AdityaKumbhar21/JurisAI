import React, { useEffect } from 'react';
import {useDocStore} from "../store/useDocStore";


const History = () => {
  const {history, getHistory} = useDocStore();

  useEffect(()=>{
    getHistory();
  }, [getHistory])

  return (
    <div className="font-sec">
    <div className="w-full max-w-md">
      <h2 className="text-xl font-medium mb-4">Previous Uploads</h2>
        {history.length === 0 ? ("No uploads yet.") : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {history.map((doc)=>(
              <div className="bg-primary rounded-lg p-4 hover:bg-blue-100 transition cursor-pointer">
                {doc.fileName}
              </div>
            ))}
        
          </div>
        )
      
      }
    </div>
  </div>
  )
}

export default History