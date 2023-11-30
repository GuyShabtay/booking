import React, { useState, useEffect } from 'react';
import './progressBar.css'

const ProgressBar = ({progress}) => {
  
  
  return (
    <div id='progress-bars'>
      <h2>{progress}</h2>
      <div className="progress-bar-container">
     
        <div className={`progress-bar-1`}></div>
        )
      </div>
      <div className="progress-bar-container">
      {(progress === 2 || progress === 3 || progress === 4) && (
        <div className={`progress-bar-2`}></div>
        )}      </div>
      <div className="progress-bar-container">
      {(progress === 3 || progress === 4) && (
        <div className={`progress-bar-3`}></div>
        )}      </div>
      <div className="progress-bar-container">
      {progress === 4 && (
        <div className="progress-bar-4"></div>
        )}      </div>
    </div>
  );
};

export default ProgressBar;
