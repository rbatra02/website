import React from 'react';
import './Skills.css'; // Make sure to create and link this CSS file
import { FaPython, FaReact, FaDocker, FaLinux, FaGit, FaJava } from 'react-icons/fa';
import { SiJavascript, SiCplusplus, SiTypescript, SiMysql, SiHtml5, SiCss3, SiFirebase, SiPytorch, SiGnubash } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="skill">
          <SiCplusplus className="icon" />
          <span>C++</span>
        </div>
        <div className="skill">
          <FaPython className="icon" />
          <span>Python</span>
        </div>
        <div className="skill">
          <FaJava className="icon" />
          <span>Java</span>
        </div>
        <div className="skill">
          <SiJavascript className="icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FaReact className="icon" />
          <span>React</span>
        </div>
        <div className="skill">
          <SiTypescript className="icon" />
          <span>TypeScript</span>
        </div>
        <div className="skill">
          <SiGnubash className="icon" />
          <span>Shell/Bash</span>
        </div>
        <div className="skill">
          <SiMysql className="icon" />
          <span>SQL</span>
        </div>
        <div className="skill">
          <SiHtml5 className="icon" />
          <span>HTML5</span>
        </div>
        <div className="skill">
          <SiCss3 className="icon" />
          <span>CSS</span>
        </div>
        <div className="skill">
          <SiFirebase className="icon" />
          <span>Google Firebase</span>
        </div>
        <div className="skill">
          <FaDocker className="icon" />
          <span>Docker</span>
        </div>
        <div className="skill">
          <FaLinux className="icon" />
          <span>Linux</span>
        </div>
        <div className="skill">
          <FaGit className="icon" />
          <span>Git</span>
        </div>
        <div className="skill">
          <SiPytorch className="icon" />
          <span>PyTorch</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
