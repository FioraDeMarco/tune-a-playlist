import React from "react";
import { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Portfolio.css";
import App from "./App";
import { Link } from "react-router-dom";

export class Portfolio extends React.Component {
  render() {
    return (
      <div className='large-container'>
        <div>
          {/* <div className='App'> */}
          <header className='Fiora'>
            <div className='linked-in'>
              <a href='https://www.linkedin.com/in/fiorademarco'>Linkedin</a>
            </div>
            <div>
              <Link to='/App'>
                <div
                  className='portfolio-name'
                  style={{ textDecoration: "none" }}
                >
                  Fiora De Marco ~ Software Engineer
                </div>
              </Link>
            </div>
            {/* <a href='https://drive.google.com/file/d/1Sw8u4sdK3iyRnHk5Ay0okk2wyURmVGRH/view?usp=sharing'>
              Resume
            </a> */}
            <a href='https://github.com/FioraDeMarco'>GitHub</a>
          </header>
          {/* </div> */}
        </div>
        <div className='display-flex-Portfolio'>
          <br />
          <br />
          {/* <div className='name'>
            <Link to='/App'>Home</Link>
          </div> */}
          <br />
          <div className='container'>
            <div className='portfolio-name'>Projects: </div>
            <br />
            <div className='links'>
              <a href='https://gittogether-fsa.herokuapp.com'>GitTogether</a>
            </div>
            <br />
            Capstone | Group Project | Coding Collaboration Platform
            <br />
            GitTogether is a RESTful Application built with React and Supabase
            that allows users to seek peers to work on projects with and seek
            projects to work on with fellow software developers. It encourages
            inspiration and collaboration in a social environment linked with
            Github. Building this app required manipulation of the UI using
            React-Redux and React hooks.
            <br />
            <br />
            ● Tech stack: Supabase, Ockokit, React-Redux, Heroku for deployment
            <br />
            <div className='picture'>
              <br />
              <br />
              <img src={require("./gitTogether5.png")} id='image' alt='2' />
              <br />
              <br />
              ● User can post comments on any project.
              <br />
              <br />
              <img src={require("./gitTogether1.png")} id='image' alt='2' />
              <br />
              <br />
              ● User can chat with other users via the chatroom.
              <br />
              <br />
              <img src={require("./gitTogether2.png")} id='image' alt='yo' />
              <br />
              ● User can post projects to the project feed.
              <br />
              <br />
              <img src={require("./gitTogether3.png")} id='image' alt='3' />
            </div>
            <div>Watch the Demo Video!</div>
            <br />
            <br />
            <div className='links'>
              <a href='https://soundaathon-app.herokuapp.com/'>Soundathon</a>
            </div>
            <br />
            Hackathon Project | Sole Developer |
            https://soundaathon-app.herokuapp.com/
            <br />
            <br />
            Soundathon is a Single Page Application built with React and Leaflet
            that allows users to view music events in their area based on their
            location. Soundathon displays venues which are within a 10 mile
            radius, and further.
            <br />
            ● Tech stack: Leaflet, React, React-leaflet, Heroku for deployment
            <br />
            <br />
            ● Platform for underground artists and small music venues.
            <br />
            <br />
            <div className='picture'>
              <img src={require("./soundathon1.png")} id='image' alt='2' />
              <br />
              ● User can access their location.
              <br />
              <br />
              <img src={require("./soundathon2.png")} id='image' alt='2' />
              <br />
              ● Local musical gems get recognition!
              <br />
              <br />
              <img src={require("./soundathon4.png")} id='image' alt='2' />
              <br />
              ● Artists can add events to the map.
              <br />
              <br />
              <img src={require("./soundathon3.png")} id='image' alt='2' />
            </div>
            <br />
            <div className='links'>
              <a href='https://github.com/Torchic-Trainers-8/grace-shopper'>
                Grace Shopper
              </a>
            </div>
            <br />
            Best Yarn (Grace-Shopper) | Group Project | E-Commerce Platform
            <br />
            Best Yarn is a RESTful e-commerce app built with React, Express and
            Sequelize. Building this app required the development of a
            persistent shopping cart which utilized Postico for data storage.
            ~https://polar-bayou-43017.herokuapp.com/products
            <br />
            <br />
            ● Users can shop for top notch yarn!
            <br />
            <br />
            <div className='picture'>
              <img src={require("./GraceShopper.png")} id='image' alt='2' />
            </div>
            <br />
            <div className='portfolio-name'>
              <a href='mailto:fiorademarco7@gmail.com'>
                Like to chat? Send me an email!
                <div className='name'>fiorademarco7@gmail.com</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;

// import React from "react";
// import { Component } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import "./Portfolio.css";
// import App from "./App";
// import { Link } from "react-router-dom";

// export class Portfolio extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className='App'>
//           <header className='Fiora'>
//             <div className='linked-in'>
//               <a href='https://www.linkedin.com/in/fiorademarco'>Linkedin</a>
//             </div>
//             <div>
//               <Link to='/App'>
//                 <div className='name' style={{ textDecoration: "none" }}>
//                   Fiora De Marco ~ Software Engineer
//                 </div>
//               </Link>
//             </div>
//             {/* <a href='https://drive.google.com/file/d/1Sw8u4sdK3iyRnHk5Ay0okk2wyURmVGRH/view?usp=sharing'>
//               Resume
//             </a> */}
//             <a href='https://github.com/FioraDeMarco'>GitHub</a>
//           </header>
//         </div>
//         <div className='display-flex-Portfolio'>
//           <br />
//           <br />
//           {/* <div className='name'>
//             <Link to='/App'>Home</Link>
//           </div> */}
//           <br />
//           <div className='container'>
//             <div className='name'>Projects: </div>
//             <br />
//             <a href='https://gittogether-fsa.herokuapp.com'>GitTogether</a>
//             <br />
//             Capstone project: GitTogether | Software Developer |Coding
//             Collaboration Platform
//             <br />
//             ● RESTful Application built with React and Supabase that allows
//             users to seek peers to work on projects with and to seek projects to
//             work on with fellow software developers in a social environment
//             linked with Github
//             <br />
//             ● Manipulated UI using React-Redux and React hooks
//             <br />
//             ● Incorporated chatting and posting capabilities though a supabase,
//             postgres database and nested components in React
//             <br />
//             ● Tech stack: Supabase, Ockokit, React-Redux, Heroku for deployment
//             <br />
//             <br />
//             <a href='https://soundaathon-app.herokuapp.com/'>Soundathon</a>
//             <br />
//             Soundathon/Hackathon | Sole Developer |
//             https://soundaathon-app.herokuapp.com/
//             <br />
//             ● Single Page Application
//             <br />
//             ● App allows users to view music events in their local area based on
//             their location App displays venues which are within a 10 mile
//             radius, and further
//             <br />
//             ● Tech stack: Leaflet, React, React-leaflet, Heroku for deployment
//             <br />
//             <br />
//             <a href='https://github.com/Torchic-Trainers-8/grace-shopper'>
//               Grace Shopper
//             </a>
//             <br />
//             Yarn Inc (Grace-Shopper) | Group project | E-Commerce Platform
//             <br />
//             ● RESTful e-commerce app built with React, Express and Sequelize
//             <br />● Developed a persistent shopping cart utilizing Postico to
//             store data
//             <br />
//             <br />
//             <a href='mailto:fiorademarco7@gmail.com?body=My custom mail body'>
//               Like to chat? Send me an email! fiorademarco7@gmail.com
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Portfolio;
