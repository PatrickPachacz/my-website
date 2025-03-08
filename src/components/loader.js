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
          @keyframes rotateArcInner {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(180deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes rotateArcOuter {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(-180deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }

          .rotating-arc-inner {
            transform-origin: 100px 130px;
            animation: rotateArcInner 2s cubic-bezier(0.5, 0, 0.5, 1) infinite; /* Ease-in-out effect */
          }

          .rotating-arc-outer {
            transform-origin: 100px 130px;
            animation: rotateArcOuter 2s cubic-bezier(0.5, 0, 0.5, 1) infinite; /* Opposite direction */
          }
        `}
      </style>

      <svg width="200" height="220" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
        <g className="rotating-arc-inner">
          <path
            d="M 100,130 
               m -60, 0 
               a 60,60 0 0,1 120,0"
            style={styles.circleInner}
          />
        </g>

        <g className="rotating-arc-outer">
          <path
            d="M 100,130 
               m -80, 0 
               a 80,80 0 0,1 160,0"
            style={styles.circleOuter}
          />
        </g>

        <text x="100" y="140" fill="white" fontSize="50" fontWeight="bold" textAnchor="middle" fontFamily="'Dancing Script', 'Pacifico', 'Brush Script MT', cursive">
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
};

export default Loader;
