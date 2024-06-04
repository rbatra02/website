// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBriefcase, FaFolderOpen, FaFilePdf } from 'react-icons/fa';
import './HomePage.css';  // Ensure you have your CSS file for styling
import me from '../imgs/me.jpg'; // Import the image
import resume from '../files/RBResume.pdf';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Hello & welcome!</h1>
            <p>I’m Raghav, passionate about the transformative potential of AI in reshaping our future across various industries.</p>
            <div className="content-container">
                <div className="button-container">
                    <Link to="/about-me" className="home-button">
                        <FaUser /> {/* Icon for About Me */}
                        About Me
                    </Link>
                    <Link to="/experience" className="home-button">
                        <FaBriefcase /> {/* Icon for Experience */}
                        Experience
                    </Link>
                    <Link to="/projects" className="home-button">
                        <FaFolderOpen /> {/* Icon for Projects */}
                        Projects
                    </Link>
                    <a href= {resume} className="home-button" target="_blank" rel="noopener noreferrer">
                        <FaFilePdf /> 
                        Resume
                    </a>
                </div>
                <img src={me} alt="Raghav" className="profile-image" />
            </div>
        </div>
    );
};

export default HomePage;
