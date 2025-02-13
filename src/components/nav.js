import React from "react";
import Logo from "../components/icons/logo";

const Nav = () => {
    return (
      <nav style={styles.navbar}>
        <div style={styles.logoWrapper}>
        <a href="#welcome" style={styles.logoLink}>
          <Logo />
        </a>
        </div>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <a href="#profile" style={styles.navLink}>Profile</a>
          </li>
          <li style={styles.navItem}>
            <a href="#experience" style={styles.navLink}>Experience</a>
          </li>
          <li style={styles.navItem}>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </li>
          <li style={styles.navItem}>
            <span style={styles.resumeItem}>Resume</span>
          </li>
        </ul>
      </nav>
    );
  };

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "20px 20px",
    background: "rgba(255, 255, 255, 0)",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    zIndex: 1000,
    backdropFilter: 'blur(10px)', 
    WebkitBackdropFilter: 'blur(10px)', 
  },

  logoWrapper: {
    display: "flex",
    alignItems: "center",
    marginLeft: "20px", 
    height: "100%", 
  },
  navList: {
    display: "flex",
    gap: "50px",
    listStyle: "none",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    alignItems: "center",
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  navItem: {
    cursor: "pointer",
  },
  resumeItem: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '5px 10px',
    border: '2px solid lightblue', 
    borderRadius: '5px', 
  },
};

export default Nav;
