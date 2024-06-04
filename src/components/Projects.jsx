import React from 'react';
import './Projects.css'; // Ensure you have a CSS file for styling


const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="project">
        <h2>E-scooter Black Box</h2>
        <p>The project involved the development of a sophisticated React-based web application designed 
            specifically for service providers to effectively monitor and manage the usage of E-scooters. This application 
            serves as a powerful tool for visualizing key performance metrics and user statistics in real-time, facilitating 
            enhanced decision-making and operational efficiencies. By integrating advanced data visualization techniques, 
            the platform enables providers to track usage patterns, optimize scooter deployments, and ultimately improve 
            service reliability and customer satisfaction. This project not only demonstrates innovative use of technology 
            in urban mobility solutions but also significantly contributes to the sustainable management of E-scooter fleets.</p>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BNo1TOk6BSs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
      <div className="project">
        <h2>HelpLink</h2>
        <p>The project represents a cutting-edge event management application, meticulously developed 
            by a team of five using Swift UI and Google Firebase. This application significantly 
            enhances event organization by simplifying the process of sharing critical medical data 
            and emergency contact information among attendees. Its intuitive interface and robust 
            backend ensure that participants can easily access important health-related information, 
            thereby enhancing safety and security during events. By addressing key logistical challenges 
            associated with large gatherings, HelpLink not only improves operational efficiency but also 
            provides peace of mind to organizers and attendees alike, reinforcing a commitment to well-being 
            and care in social settings.</p>
        <div className="shorts-video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JJLrVxmlu28"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Projects;
