// Import React and the stylesheet
import React from 'react';
import './Experience.css';
import Skills from './Skills'; // Import the Skills component
import nokia from '../imgs/nokia.jpg';
import nachonacho from '../imgs/nachonacho.png';
import inovaare from '../imgs/inovaare.jpg';

const Experience = () => {
  return (
    <div className="experience">
      <h1>Experience</h1>

      <div className="job">
        <img src={nokia} alt="Nokia" className="job-image" />
        <p>I worked as a Cloud Automation Intern at Nokia, where I optimized and refined existing scripts, enhancing their logic and 
          adding comments for better team comprehension. I also converted Excel files into JSON format to enable seamless execution 
          of Python scripts for server tasks.</p>
      </div>

      <div className="job">
        <img src={inovaare} alt="Inovaare" className="job-image" />
        <p>At Inovaare Corporation, I developed a web application to generate synthetic data for training a Large Language Model (LLM) 
          using the Self Instruct Model, specifically for the healthcare tool "Usher." I created file parsing functions and metadata 
          filters to extract relevant information, reducing data processing time. Additionally, I used Generative AI to produce synthetic 
          data, improving algorithm performance and model accuracy.</p>
      </div>
      
      <div className="job">
        <img src={nachonacho} alt="NachoNacho" className="job-image" />
        <p>During my time at NachoNacho, I developed a production environment to showcase service features to buyers and sellers. I 
          implemented a download queue using Prisma, TypeScript, React, and GraphQL, providing customers visibility into their download 
          duration. I demonstrated excellent communication skills and collaborated in a fast-paced environment to meet deadlines and 
          innovate technologies with a strong focus on customer satisfaction.</p>
      </div>
        
      <Skills /> {/* Include the Skills component here */}
    </div>
  );
};

export default Experience;
