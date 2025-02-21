import React, { useState } from "react";
import "../components/styles.css"; 

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
      "Responsible for the coordination of all aspects involving the finalization of the loan closing process.",
      "Managed and supervised a crew of up to 10 employees in the closing department, overseeing daily tasks, workflow efficiency, and staff performance.",
      "Calculated and applied appropriate fees regarding home refinancing, investments, and mortgage consolidation.",
      "Prepared Title Bills and Invoicing after reviewing property taxes, judgements, assignments, and other critical documents applicable to final closing." 
    ]
  }
};

const JobExperience = () => {
  const [selectedEmployer, setSelectedEmployer] = useState("Angiemellado.art");
  const [isFading, setIsFading] = useState(false);

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

  return (
    <div id="experience" className="expContainer">
      <section className="experience-section">
        <h2 className="sectionHeading">Experience</h2>
        
        <div className="experience-container">
          <div className="employer-list">
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
            <h1 className="job-title">{highlightCompanyName(jobDescriptions[selectedEmployer]?.title || "Company title")}</h1>
            <p className="job-date">{jobDescriptions[selectedEmployer]?.date || "Date"}</p>
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
  );
};

export default JobExperience;
