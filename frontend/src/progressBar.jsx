import React, { useState, useEffect } from 'react';
import './progressBar.css';
import topImg from './top img.jpg'

const ProgressBar = ({ progress }) => {
  return (
    <div>
    <img id='top-img' src={topImg} alt="img" />

    <div id='progress-bars'>
      <div className='progress-bar-container'>
        <div className={`progress-bar-1`}></div>
      </div>
      <div className='progress-bar-container'>
        {(progress === 2 || progress === 3 || progress === 4) && (
          <div className={`progress-bar-2`}></div>
        )}{' '}
      </div>
      <div className='progress-bar-container'>
        {(progress === 3 || progress === 4) && (
          <div className={`progress-bar-3`}></div>
        )}{' '}
      </div>
      <div className='progress-bar-container'>
        {progress === 4 && <div className='progress-bar-4'></div>}{' '}
      </div>
    </div>
    </div>
  );
};

export default ProgressBar;
