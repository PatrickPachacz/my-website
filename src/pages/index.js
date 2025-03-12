import React, { useState } from "react";
import Loader from "../components/loader"
import Nav from "../components/nav"
import Jobexp from "../components/jobexp";
import "../components/styles.css"; 





export default function Home() {
  const [isLoading, setIsLoading] = useState(true)


  return (
    <>
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <main>
          <Nav />
          <div className="page" id="welcome">
          <div className="welcomeSection">
            <p className="smallText1">Hello, my name is</p>
            <h1 className="largeText">Patrick Pachacz.</h1>
            <h1 className="largeTextWelcome">Welcome to my website.</h1>
             <p className="description">
             I’m a self-taught developer with a passion for building 
             intuitive and engaging digital experiences. Through dedication and 
             hands-on learning, I've slowly improved my skills in web development. 
             </p>
          </div>
          </div>

          <div className="github-container">
            <a 
             href="https://github.com/PatrickPachacz" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="github-link"
            >
            github.com/PatrickPachacz 
           </a>
           <svg width="30px" height="120px" viewBox="5 0 25 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 0 Q 40 40, 10 100 T 10 210" stroke="red" stroke-width="4" fill="transparent"/>
            <path d="M20 0 Q -10 40, 20 100 T 20 210" stroke="white" stroke-width="4" fill="transparent"/>
           </svg>


          </div>

          <section id="profile" className="section">
            <h2 className="sectionHeading">Profile</h2>
            <div class="profileContent">
            <div className="textSection">
              <p className="profileDescription">I enjoy creating web applications. 
              <p>I have spent years working in various industries, mostly in Real Estate and Administration.
                As a hobby I enjoy creating new web applications and solving any problems related to them.</p>
              <p>I slowly learned what I could with the time I had. Starting with HTML, CSS, and JavaScript.</p>
              <p>Overtime, I gained confidence in my abilities.</p>
              <p>I look forward to looking to learning more.</p>
              <p>Here are a few technologies that I have been working with recently:</p>
              <div className="tech-list">


               <div className="tech-item">
               <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">&#10004;</div>
               </div>
                  <span>JavaScript</span>
                </div>
                <div className="tech-item">
                <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">&#10004;</div>
               </div>
                 <span>TypeScript</span>
               </div>
                <div className="tech-item">
                <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">&#10004;</div>
               </div>
                 <span>React</span>
               </div>
               <div className="tech-item">
               <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">&#10004;</div>
               </div>
                 <span>Node.js</span>
               </div>
               <div className="tech-item">
               <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">&#10004;</div>
               </div>
                  <span>Express</span>
               </div>
               <div className="tech-item">
               <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">&#10004;</div>
               </div>
                 <span>WordPress</span>
               </div>
               <div className="tech-item">
               <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">&#10004;</div>
               </div>
                 <span>MongoDB</span>
               </div>
                <div className="tech-item">
                <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">&#10004;</div>
               </div>
                 <span>CSS</span>
                </div>
             </div>
              </p>
            </div>
            <div className="photoSection">
              <div className="photo-wrapper">
              <div className="photo-wrapper-overlay"></div> 
                <img src="https://res.cloudinary.com/dyk0onjht/image/upload/v1741482545/headshot_cbym8l.jpg" alt="Headshot" className="profilePhoto" />
              </div>
            </div>
            </div>
          </section>

 
           <Jobexp />


          <div id="projects" className="projectContainer">
          <section className="section">
           <h2 className="sectionHeading">Recent Projects</h2>  
            <div className="projectWrapper">
              <div className="imageContainer">
                <img src="https://res.cloudinary.com/dyk0onjht/image/upload/v1739488547/passport2love_s0an5c.png" alt="passport2love" className="projectPhoto"></img>
              </div>
              <div className="projectDetails">
                <div className="projectTitle">
                 <p className="featuredText">Featured Project</p>
                 <h3 className="projectName">Passport2Love</h3>
                </div>

                <div className="projectDescription">
                 <p>
                   Passport2Love is a dynamic and engaging platform designed to connect individuals across the globe. 
                    Built with a focus on user experience, it facilitates seamless interactions through an intuitive interface.
                 </p>
                </div>
           
                <div className="projectTech">
                  <p><strong>Tech Stack:</strong> MERN (MongoDB, Express, React, Node.js)</p>
                </div>
              </div>
            </div>

       
            
          </section>
          </div>
        </main>
      )}
    </>
  );
}