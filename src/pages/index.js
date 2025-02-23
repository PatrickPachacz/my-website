import React, { useState } from "react";
import Loader from "../components/loader"
import Nav from "../components/nav"
import "../components/styles.css"; 
import JobExperience from "../components/jobexperience.js";



export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const styles = {
    page: {
      background: "black",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start", 
      justifyContent: "center",
      paddingLeft: "10vw", 
      color: "white",
      position: "relative", 
      zIndex: -1,
    },
  
    content: {
      fontSize: "24px",
    },
    
      welcomeSection: {
        position: "absolute", 
        top: "25vh", 
        left: "10vw", 
        maxWidth: "600px", 
        color: "white",
      },
      smallText1: {
        fontSize: "20px",
        marginBottom: "5px",
        color: "white",
      },
      largeText: {
        fontSize: "50px",
        fontWeight: "bold",
        margin: "5px 0",
        color: "yellow",
      },
      description: {
        fontSize: "18px",
        lineHeight: "1.5",
        marginTop: "20px",
      },
  
      section: {
        background: "black",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center", 
        color: "white",
        padding: "50px",
      },
      
      sectionLine: {
        position: "absolute",
        bottom: "0",
        left: "50%",
        height: "2px",
        backgroundColor: "white",
      },
      
      textSection: {
        flex: 1,                  
        paddingRight: "20px",  
        width: "100%",
      },
      photoSection: {
        flex: 0.4,                
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        transition: "width 0.3s ease",

      },
      profileDescription: {
        fontSize: "18px",
        lineHeight: "1.5",
      },

  };

  return (
    <>
      {isLoading ? (
        <Loader onFinish={() => setIsLoading(false)} />
      ) : (
        <main>
          <Nav />
          <div style={styles.page} id="welcome">
          <div style={styles.welcomeSection}>
            <p style={styles.smallText1}>Hello, my name is</p>
            <h1 style={styles.largeText}>Patrick Pachacz.</h1>
            <h1 style={styles.largeText}>Welcome to my website.</h1>
             <p style={styles.description}>
             I’m a self-taught developer with a passion for building 
             intuitive and engaging digital experiences. Through dedication and 
             hands-on learning, I've honed my skills in web development. 
             Now, I’m eager to break further into the industry, collaborate with like-minded professionals, 
             and continue growing as a developer.
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
           <div className="github-line"></div>
          </div>

          <section id="profile" style={styles.section}>
            <h2 className="sectionHeading">Profile</h2>
            <div class="profileContent">
            <div style={styles.textSection}>
              <p style={styles.profileDescription}>Greetings! My name is Patrick and I enjoy creating web applications. 
              <p>It didn't all begin this way. I spent years working in various industries... mostly in Real Estate.
                Web development had my curiousity and interest, but I had initially assumed it was too late to try. </p>
              <p>I slowly learned what I could with the time I had, starting with HTML, CSS, and JavaScript.</p>
              <p>Overtime, I have gained confidence in my abilities.</p>
              <p>My main focus these days is finding the opportunity to be able to grow as a developer.</p>
              <p>Here are a few technologies I've been working with recently:</p>
              <div className="tech-list">


               <div className="tech-item">
               <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">✔️</div>
               </div>
                  <span>JavaScript</span>
                </div>
                <div className="tech-item">
                <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">✔️</div>
               </div>
                 <span>TypeScript</span>
               </div>
                <div className="tech-item">
                <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">✔️</div>
               </div>
                 <span>React</span>
               </div>
               <div className="tech-item">
               <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">✔️</div>
               </div>
                 <span>Node.js</span>
               </div>
               <div className="tech-item">
               <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">✔️</div>
               </div>
                  <span>Express</span>
               </div>
               <div className="tech-item">
               <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">✔️</div>
               </div>
                 <span>WordPress</span>
               </div>
               <div className="tech-item">
               <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">✔️</div>
               </div>
                 <span>MongoDB</span>
               </div>
                <div className="tech-item">
                <div class="spinning-container">
                <div class="spinning-circle"></div>
                <div class="checkmark">✔️</div>
               </div>
                 <span>CSS</span>
                </div>
             </div>
              </p>
            </div>
            <div style={styles.photoSection}>
              <div className="photo-wrapper">
              <div className="photo-wrapper-overlay"></div> 
                <img src="https://res.cloudinary.com/dyk0onjht/image/upload/v1739385071/f78quvx7t42dk9j0thve.jpg" alt="Patrick" className="profilePhoto" />
              </div>
            </div>
            </div>
          </section>

          <div>
           <JobExperience />
          </div>

          <div id="projects" className="projectContainer">
          <section style={styles.section}>
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