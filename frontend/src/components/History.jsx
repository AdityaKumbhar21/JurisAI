import React from 'react'


const History = () => {
  return (
    <div className="font-sec">
    <div className="w-full max-w-md">
      <h2 className="text-xl font-medium mb-4">Previous Uploads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition cursor-pointer">
          filename.pdf
        </div>
        {/* Add more upload items here */}
      </div>
    </div>
  </div>
  )
}

export default History