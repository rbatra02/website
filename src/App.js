import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage'; // Make sure HomePage is imported
import Resume from './components/Resume';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="landing">
          <Link to="/" className="landing-button">Home</Link> {/* Link to HomePage */}
          <Link to="/about-me" className="landing-button">About Me</Link>
          <Link to="/experience" className="landing-button">Experience</Link>
          <Link to="/projects" className="landing-button">Projects</Link>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} exact /> {/* Set HomePage as the default route */}
          <Route path="/about-me" element={<Resume />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
