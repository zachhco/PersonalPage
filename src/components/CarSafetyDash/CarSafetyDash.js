import React, { useEffect } from 'react';
import './CarSafetyDash.css';

const CarSafetyDash = () => {
  useEffect(() => {
    // Load external CSS
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://car-dash-app.onrender.com/static/css/style.css';
    document.head.appendChild(linkElement);

    // Load external JavaScript
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://car-dash-app.onrender.com/static/js/main.js';
    document.body.appendChild(scriptElement);

    // Cleanup function
    return () => {
      document.head.removeChild(linkElement);
      document.body.removeChild(scriptElement);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="car-safety-dash-container">
      <h2>Car Safety Dashboard</h2>
      <div id="death-prediction-app"></div>
    </div>
  );
};

export default CarSafetyDash;
