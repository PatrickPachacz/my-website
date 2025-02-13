import React, { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      onFinish();
    }, 5500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!loading) return null;

  return (
    <div style={styles.loaderContainer}>
      <style>
        {`
          @keyframes drawPolygon {
            0% {
              stroke-dasharray: 0, 500;
              stroke-dashoffset: 500;
            }
               50% {
              stroke-dasharray: 500, 0;
              stroke-dashoffset: 0;
              stroke: white; 
            }
            100% {
              stroke-dasharray: 500, 0;
              stroke-dashoffset: 0;
              stroke: yellow; 
            }
          }
          .animated-polygon {
            animation: drawPolygon 5s forwards;
          }
        `}
      </style>

      <svg width="200" height="220" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
       
        <polygon
          points="100,10 40,198 190,78 10,78 160,198"
          style={styles.polygon}
          className="animated-polygon"
        />
        <text x="100" y="120" fill="white" fontSize="40" fontWeight="bold" textAnchor="middle">
          P
        </text>
      </svg>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    background: "black", 
    zIndex: 9999,
  },
  polygon: {
    fill: "none",
    stroke: "white",
    strokeWidth: 3,
    strokeDasharray: "500",
    strokeDashoffset: "500",
  },
};

export default Loader;
