import React, { useState, useEffect } from "react";
import Logo from "../components/icons/logo";
import "../components/nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setHidden(currentScrollY > scrollY && currentScrollY > 50);
        setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, [scrollY]);


  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleMenu();
    }
  };

  return (
    <nav className={`navbar ${hidden ? "hidden" : ""}`}>
        <a href="#welcome" className="logo-link">
          <Logo />
        </a>


      <div 
        className="hamburger" 
        onClick={toggleMenu} 
        onKeyDown={handleKeyDown} 
        role="button" 
        tabIndex="0"
        aria-label="Toggle navigation menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <a href="#profile" className="nav-link">Profile</a>
        </li>
        <li className="nav-item">
          <a href="#experience" className="nav-link">Experience</a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">Projects</a>
        </li>
        <a className="resume-item" href="/patrickpachacz.resume.pdf" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
