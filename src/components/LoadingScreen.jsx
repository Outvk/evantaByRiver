import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="pyramid-loader">
          <div className="wrapper">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
            <span className="shadow"></span>
          </div>
        </div>
        <div className="loading-text">
          <h2>EVANTA</h2>
          <div className="loading-line">
            <div className="loading-line-inner"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
