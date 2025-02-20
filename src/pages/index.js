import React, { useState } from "react";
import Loader from "../components/loader"
import Nav from "../components/nav"
import "../components/styles.css"; 


export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedEmployer, setSelectedEmployer] = useState("Angiemellado.art");
  const [isFading, setIsFading] = useState(false);
  
    const jobDescriptions = {
      "Angiemellado.art": { 
        title: "Web Developer @ Angiemellado.art", 
        date: "June 2024 - January 2025", 
        details: [
          "Participated in the launching of a responsive, user-centric webpage utilizing WordPress with customized themes, resulting in an increase of client engagement time within the first month of deployment.",
          "Managed and optimized core web services, leading to a reduction of site downtime.",
          "Improved major front-end features of Angiemellado.art website.",
          "Reviewed modifications to ensure thoughtful and consistent user experiences.",
        ]
      },
      "Alan Solutions": { 
        title: "Frontend Developer @ Alan Solutions", 
        date: "December 2023 - February 2024", 
        details: [
          "Collaborated with designers, project managers, and other engineers to transform creative concepts into production realities for clients.", 
          "Conducted debugging and testing to ensure data accuracy and functionality.",
          "Led initiatives to integrate external datasets into the platform, improving user experience for constant flow of traffic.",
          "Contributed to the creation of web applications utilizing technologies such as Astro, JavaScript, and React."
        ]
      },
      "One Sotheby's": { 
        title: "Transaction Coordinator @ One Sotheby's International Realty", 
        date: "May 2023 - May 2024", 
        details: [
          "Collaborated with title companies, escrow officers, and other stakeholders to expedite residential closing process.",
          "Maintained detailed records of transactions and updated databases regularly.",
          "Communicated effectively with clients, real estate agents, lenders, and other third parties involved in closing transactions.", 
        ]
      },
      "Mortgage Connect": { 
        title: "Team Lead @ Mortgage Connect", 
        date: "March 2020 - October 2022", 
        details: [
          "Responsible for the coordination of all aspects involving the finalization of the loan closing procoess.",
          "Managed and supervised a crew of up to 10 employees in the closing department, overseeing daily tasks, workflow efficiency, and staff performance.",
          "Calculated and applied appropriate fees regarding home refinancing, investments, and mortgage consolidation.",
          "Prepared Title Bills and Invoicing after reviewing property taxes, judgements, assignments, and other critical documents applicable to final closing." 
        ]
        }
    };
    
    const handleEmployerClick = (employer) => {
      if (employer !== selectedEmployer) {
        setIsFading(true); 
        setTimeout(() => {
          setSelectedEmployer(employer); 
          setIsFading(false); 
        }, 300); 
      }
    };

    const highlightCompanyName = (title) => {
    const [jobTitle, companyName] = title.split(" @ ");
      return (
      <>
        {jobTitle} <span style={{ color: 'yellow' }}>{" @ "}{companyName}</span>
      </>
    );
    };

    


  
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
      
      sectionHeading: {
        fontSize: "32px",
        fontWeight: "bold",
        textAlign: "center",
        position: "relative",
        paddingTop: "50px",
        width: "100%",
        maxWidth: "400px",
        color: "white",
        borderBottom: "2px solid white", 
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

          <div id="experience" className="expContainer">
          <section class="experience-section">
            <h2 style={styles.sectionHeading}>Experience</h2>
            
          <div class="experience-container">
            <div class="employer-list">
            {Object.keys(jobDescriptions).map((employer) => (
              <button
                key={employer}
                className={`employer-item ${selectedEmployer === employer ? "selected" : ""}`}
                onClick={() => handleEmployerClick(employer)}
              >
                {employer}
              </button>
            ))} 
           </div>

           <div className={`job-description ${isFading ? "fade-out" : "fade-in"}`}>
            <h1 class="job-title">{highlightCompanyName(jobDescriptions[selectedEmployer]?.title || "Company title")}</h1>
            <p class="job-date">{jobDescriptions[selectedEmployer]?.date || "Date"}</p>
            {Array.isArray(jobDescriptions[selectedEmployer]?.details) ? (
              <ul>
              {jobDescriptions[selectedEmployer].details.map((detail, index) => (
               <li key={index}>{detail}</li>
              ))}
              </ul>
              ) : (
            <p>Select a company to view details.</p>
            )}
           </div>
          </div>
          </section>
          </div>

          <div id="projects" className="projectContainer">
          <section style={styles.section}>
            <h2 style={styles.sectionHeading}>Recent Projects</h2>
            
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