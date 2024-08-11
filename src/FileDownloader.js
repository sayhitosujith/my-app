// FileDownloader.js
import React from 'react';
import axios from 'axios';

const FileDownloader = () => {
  const downloadFile = async () => {
    try {
      // Replace the URL with the API endpoint you want to use
      const response = await axios({
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        method: 'GET',
        responseType: 'blob', // Important
      });

      // Create a URL for the file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'filename.ext'); // Specify the filename
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <div>
      <button onClick={downloadFile}>Download File</button>
    </div>
  );
};

export default FileDownloader;
