'use client'
import { useState } from 'react';

export default function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event:any) => {
    console.log('we think a file was uploaded')
    const selectedFile = event.target.files[0];
    // Add validation for file size here if needed
    
    if (selectedFile) {
      // You might want to validate the file or read its content here
      setFile(selectedFile);
    }
  };

  return (
    <div className=" h-80 flex items-center justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-sm cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">DOCX, PDF, HTML  (MAX. 4MB)</p>
        </div>
      <input
        id="dropzone-file"
        type="file"
        accept=".html,.docx,.pdf"
        className="hidden"
        onChange={handleFileChange} // Handle file selection
      />
      {file && <p>File selected: {file.name}</p>} {/* Visual feedback */}
      
      </label>
    </div>
  );
}
