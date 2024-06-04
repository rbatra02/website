// Button.js
import React from 'react';
import { FaFilePdf } from 'react-icons/fa'; // Icon for Resume button
import './Button.css'; // Ensure you have your CSS file for styling

const Button = () => {
  const handleResumeOpen = () => {
    const resumeUrl = `${process.env.PUBLIC_URL}/files/RBResume.pdf`;
    console.log('Opening resume:', resumeUrl);

    // Create an iframe to embed the PDF
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = resumeUrl;
    iframe.allowFullScreen = true; // Allow fullscreen mode
    document.body.appendChild(iframe);

    // Wait for the iframe to load and then trigger print
    iframe.onload = () => {
      iframe.style.display = 'block'; // Make iframe visible
      iframe.style.width = '100%'; // Set width to 100%
      iframe.style.height = '100%'; // Set height to 100%
      iframe.style.position = 'fixed'; // Fix the position
      iframe.style.left = '0'; // Align to left
      iframe.style.top = '0'; // Align to top
      iframe.style.zIndex = '9999'; // Ensure it is on top

      iframe.contentWindow.focus(); // Focus on the iframe
      iframe.contentWindow.print(); // Trigger print dialog

      // Optionally remove the iframe after printing
      // document.body.removeChild(iframe);
    };
  };

  return (
    <button onClick={handleResumeOpen} className="home-button">
      <FaFilePdf />
      Resume
    </button>
  );
};

export default Button;
