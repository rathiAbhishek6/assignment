import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

const App = () => {
  // State to store uploaded files
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Handle file drop
  const onDrop = (acceptedFiles) => {
    setUploadedFiles(prevFiles => [
      ...prevFiles,
      ...acceptedFiles.map(file => ({
        name: file.name,
        size: file.size,
        id: file.path || file.name // Give each file a unique identifier
      }))
    ]);
  };

  // Handle file deletion
  const handleDelete = (fileId) => {
    setUploadedFiles(prevFiles => prevFiles.filter(file => file.id !== fileId));
  };

  // React-dropzone hooks for drag-and-drop
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="container">
      {/* Upload Section */}
      <div className="upload-section" {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="upload-box">
          <p>Click to upload or drag and drop</p>
          <p>SVG, PNG, JPG or GIF (max, 800×400px)</p>
        </div>
      </div>

      <div className="upload-section" {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="upload-box">
          <p>Click to upload or drag and drop</p>
          <p>SVG, PNG, JPG or GIF (max, 800×400px)</p>
        </div>
      </div>

      {/* Uploaded File List */}
      <div className="file-list">
        {uploadedFiles.map((file, index) => (
          <div className="file-item" key={file.id}>
            <div className="file-info">
            <div className="file-info-name">
              <span className="file-name">{file.name}</span>
              <span className="file-size">{(file.size / 1024).toFixed(2)} 
              KB</span>
              </div>
             
              <button className="delete-btn" onClick={() => handleDelete(file.id)}>Delete</button>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '100%' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
