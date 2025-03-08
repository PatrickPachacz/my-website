import React from "react";

const Logo = () => {
    return (
        <div style={styles.logoContainer}>
            <svg width="70" height="60" viewBox="0 40 200 220" xmlns="http://www.w3.org/2000/svg">
                <g className="rotating-arc-inner">
                    <path
                        d="M 110,130 
                           m -60, 0 
                           a 60,60 0 0,1 120,0"
                        style={styles.circleInner}
                    />
                </g>
                
    
                <g className="rotating-arc-outer">
                    <path
                        d="M 110,130 
                           m -80, 0 
                           a 80,80 0 0,1 160,0"
                        style={styles.circleOuter}
                    />
                </g>

                {/* Letter "P" */}
                <text x="85" y="150" style={styles.text}>P</text>

                {/* CSS for Animation */}
                <style>
                    {`
                        @keyframes rotateArcInner {
                            from {
                                transform: rotate(0deg);
                            }
                            to {
                                transform: rotate(360deg);
                            }
                        }

                        @keyframes rotateArcOuter {
                            from {
                                transform: rotate(0deg);
                            }
                            to {
                                transform: rotate(-360deg); /* Opposite direction */
                            }
                        }

                        .rotating-arc-inner {
                            transform-origin: 110px 130px;
                            animation: rotateArcInner 5s linear infinite;
                        }

                        .rotating-arc-outer {
                            transform-origin: 110px 130px;
                            animation: rotateArcOuter 5s linear infinite;
                        }
                    `}
                </style>
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
    circleInner: {
        fill: "none",
        stroke: "white", 
        strokeWidth: 4,
    },
    circleOuter: {
        fill: "none",
        stroke: "red", 
        strokeWidth: 4,
    },
    text: {
        fill: "White",
        fontSize: "80px",
        fontWeight: "bold",
        fontFamily: "'Dancing Script', 'Pacifico', 'Brush Script MT', cursive",
    },
};

export default Logo;
