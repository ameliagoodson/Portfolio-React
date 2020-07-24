import React from "react";
import "./About.css";

const About = () => (
  <div className="container">
    <h1 className="about-intro">
      I make intuitive and attractive applications, leveraging skills in
      communications and marketing to better understand client needs and the
      user experience.
    </h1>
    <h2 className="about-subtitle">I speak your language</h2>
    <div class="row">
      <div class="col-sm">
        <h2>Front-end developer</h2>
        <h3 className="subheading">Tools of the trade</h3>
        <ul className="tools-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>Sass</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>API interaction</li>
        </ul>
      </div>
      <div class="col-sm">
        <h2>Back-end developer</h2>
        <h3 className="subheading">Tools of the trade</h3>
        <ul className="tools-list">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB and Mongoose</li>
          <li>MySQL and Sequelize</li>
          <li>Creating APIs</li>
          <li>Sessions</li>
          <li>Templating Engines</li>
          <li>Writing tests</li>
          <li>MVC structure</li>
          <li>User authentication</li>
        </ul>
      </div>
      <div class="col-sm">
        <h2>Dev tools</h2>
        <ul className="tools-list">
          <li>Git</li>
          <li>Github</li>
          <li>Heroku</li>
        </ul>
        <h2>Marketing and communications</h2>
        <ul className="tools-list">
          <li>Google analytics</li>
          <li>Search engine optimisation (SEO)</li>
          <li>Professional writing and proofreading</li>
          <li>Stakeholder engagement</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About;
