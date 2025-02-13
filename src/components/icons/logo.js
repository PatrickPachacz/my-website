import React, { useEffect, useRef } from "react";

const Logo = () => {
    const polygonRef = useRef(null);

    useEffect(() => {
        if (polygonRef.current) {
            polygonRef.current.style.animation = "drawPolygon 5s linear infinite";
        }
    }, []);

    return (
        <div style={styles.logoContainer}>
            <svg width="80" height="80" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
                <polygon
                    ref={polygonRef}
                    points="100,10 40,198 190,78 10,78 160,198"
                    style={styles.polygon}
                />
                <text x="85" y="130" style={styles.text}>P</text>
            </svg>

            {/* CSS Animation */}
            <style>
                {`
                    @keyframes drawPolygon {
                        0% { stroke-dasharray: 0, 500; stroke-dashoffset: 0; }
                        50% { stroke-dasharray: 500, 400; stroke-dashoffset: -10; } 
                        100% { stroke-dasharray: 500, 500; stroke-dashoffset: -500; }
                    }
                `}
            </style>
        </div>
    );
};

const styles = {
    logoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    polygon: {
        fill: "none",
        stroke: "yellow",
        strokeWidth: 5,
        strokeDasharray: "500, 500", 
        strokeDashoffset: "0",
    },
    text: {
        fill: "White",
        fontSize: "50px",
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
    },
};

export default Logo;
