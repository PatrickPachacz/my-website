import React, { useState } from "react";
import Loader from "../components/loader"
import Nav from "../components/nav"
import "../components/styles.css"; 


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  
  const styles = {
    page: {
      background: "black",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start", // Align content to the left
      justifyContent: "center",
      paddingLeft: "10vw", // Push content closer to the left
      color: "white",
      position: "relative", // Prevents absolute positioning issues
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
        color: "lightblue",
      },
      smallText1: {
        fontSize: "20px",
        marginBottom: "5px",
        color: "lightblue",
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
      
      sectionHeading: {
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        position: "relative",
        paddingTop: "50px",
        width: "100%",
        maxWidth: "400px",
        color: "lightblue",
        borderBottom: "2px solid lightblue", 
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

          <section id="profile" style={styles.section}>
            <h2 style={styles.sectionHeading}>Profile</h2>
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

          <div className="expContainer">
          <section id="experience" style={styles.section}>
            <h2 style={styles.sectionHeading}>Experience</h2>
            <div class="experienceContent"></div>
            <p>This is the experience section.</p>
          </section>
          </div>

          <section id="contact" style={styles.section}>
           <h2 style={styles.sectionHeading}>Contact</h2>
           <p>This is the contact section.</p>
          </section>


        </main>
      )}
    </>
  );
}