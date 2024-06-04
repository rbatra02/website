import React from 'react';
import './Resume.css';
import AboutMeTitle from './AboutMeTitle'; // Link to the AboutMeTitle component
import ImageSlideshow from './ImageSlideshow'; // Import the slideshow component

const Resume = () => {
  return (
    <div className="resume-section">
      <AboutMeTitle />
      <p>Hello! I'm Raghav, a recent Computer Science and Engineering graduate with a minor in Mathematics from Santa Clara University’s School of Engineering. 
        I am passionate about leveraging emerging technologies to drive meaningful innovation and positively impact businesses and everyday lives. 
        My academic background and hands-on projects have equipped me with a robust understanding of technical frameworks and the ability to apply them 
        effectively in various contexts.</p>
      <p>I am particularly fascinated by the potential of generative AI. Specifically, I am interested in exploring its evolving capabilities and 
        integrating this technology to solve complex problems and innovate within the tech industry.</p>
      <p>Outside of technology, I maintain a balanced lifestyle that includes regular workouts at the gym, 
        enjoying music, and engaging in competitive PC gaming, particularly Valorant.</p>
      <p>I am also an avid reader 
        with an interest in psychology. Understanding cognitive processes and human behavior enhances my ability 
        to tackle both personal and professional challenges. This knowledge aids in navigating team dynamics and user 
        interactions, while also providing deeper insights into my own behaviors and motivations.</p>
      <ImageSlideshow /> {/* Include the slideshow */}
    </div>
  );
};

export default Resume;
