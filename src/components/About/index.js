import React from "react";
import "./About.scss";

import Me from "../../assets/yashpal.jpg";

const About = () => {
  return (
    <div className="details__section">
      <div className="about">
        <h1>About Me</h1>
        <div className="about__container">
          <div className="about__info">
            <p>
              I'm a self-taught Software Developer and a Competitive Programmer.
               I'm pursuing my Bachelor's Degree in
              Computer Science and Engineering from National Institute of Technology Agartala,
              graduating in 2025.
            </p>
          
            <p>
           I do problem solving on online platform like 
           Codeforces, CodeChef and Leetcode and have solved more than
           1000+ problem combined.
           I am rated Knight(max 1978) on <a href="https://leetcode.com/yashpal_97/ " target="_blank"><strong>Leetcode</strong></a>,
             Pupil(max 1319) on <a href="https://codeforces.com/profile/yashpal_97 " target="_blank"><strong>Codeforces</strong></a> and 
             3 star (max 1703) on <a href="https://www.codechef.com/users/yashpal_op" target="_blank"><strong>CodeChef</strong></a>.
          </p>
          <p>
            I like to pariticipate in hackathons and coding competitions.
            My team Lifetime Terror secured 2nd rank in Tripura Police Hackathon which was a National 
            level competition.
            I have achieved the postman student expert badge too. 
          </p>
            <p>
             I have worked as a Software Development intern at <strong>National Informatics Centre Agartala</strong> and as a Web Development intern at <strong>Viand Reseach Private Limited </strong>
             where I enhanced my Development skills.
             I am also the Web Development Lead of Google Developer Student Club (GDSC) at NIT Agartala.
            </p>
            <p></p>
          </div>
          

          <div className="about__image">
            <img src={Me} alt=" " />
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skills__container">
          <h1>Skills</h1>
          <div className="skill__cards">
            <div className="skill__card" style={{ backgroundColor: "#cf92fb" }}>
              <h2>Languages</h2>
              <p>C/C++</p>
              <p>Java</p>
              <p>Javascript</p>
              <p>SQL</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>Framework</h2>
              
              <p>React Js</p>
              <p>Express Js</p>
              
              <p>Node Js</p>
              <p>SpringBoot</p>
              <p>REST API</p>
             
            </div>

            <div className="skill__card" style={{ backgroundColor: "#911ae5" }}>
              <h2>Developer Tools</h2>
              <p>Docker</p>
              <p>Git</p>
              <p>Github</p>
              <p>Postman</p>
              <p>Firebase</p>
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            </div>
            
            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>Coursework</h2>
              
              <p>Computer </p>
              <p>Networks</p>
              <p></p>
              <p>OOP</p>
              
              <p>DBMS</p>
              <p>Operating</p>
              <p>System</p>
              <p></p>
              <p>Algorithms</p>
             
            </div>
            <div className="skill__card" style={{ backgroundColor: "#b44bff" }}>
              <h2>Database</h2>
              
              <p>MySQL</p>
              <p>MongoDB</p>
              <p>PostgreSQL</p>
            </div>
           
           
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
