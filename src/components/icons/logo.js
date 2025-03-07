import React from "react";

const Logo = () => {
    return (
        <div style={styles.logoContainer}>
            <svg width="80" height="80" viewBox="0 40 200 220" xmlns="http://www.w3.org/2000/svg">
                <text x="85" y="120" style={styles.text}>P</text>
            </svg>
        </div>
    );
};

const styles = {
    logoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fill: "White",
        fontSize: "80px",
        fontWeight: "bold",
        fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
    },
};

export default Logo;
