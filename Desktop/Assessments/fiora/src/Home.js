import "./App.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Portfolio from "./Portfolio";

function Home(props) {
  return (
    <div>
      <div className='App'>
        <header className='Fiora'>
          <div className='linked-in'>
            <a href='https://www.linkedin.com/in/fiorademarco'>Linkedin</a>
          </div>
          <div>
            <div className='name'>Fiora De Marco</div>
            <br />
            <p>Software Engineer</p>
          </div>
          <a href='https://drive.google.com/file/d/1Sw8u4sdK3iyRnHk5Ay0okk2wyURmVGRH/view?usp=sharing'>
            Resume
          </a>
        </header>
      </div>
      <div className='display-flex'>
        <div className='tile'>
          I’m Fiora. Having studied architecture, I have a background in design
          and in the understanding of how different elements or components can
          work together optimally to create a good web design and user
          experience. I love the sense of accomplishment I get from solving
          problems and being able to think outside the box, breaking down
          problems from a high level and tackling them piece by piece. I am
          currently exploring opportunities for growth as a Software Developer
          in New York City and look forward to working with a team that values
          collaboration in a learning environment. I am someone that can find
          happiness in many situations and I love to learn.
        </div>
        <div key={Portfolio}>
          Portfolio
          {/* <Link to='/Portfolio'>Portfolio</Link> */}
          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default Home;
