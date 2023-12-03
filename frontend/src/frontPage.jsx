import React, { useState } from 'react';
import DateSelector from './dateSelector';
import ProgressBar from './progressBar';
import './style.css';
import img from './yovel.png'; 
import bgImg from './bg.jpg';


const FrontPage = () => {
  const [progress, setProgress] = useState(0);
  const [showDateSelector, setShowDateSelector] = useState(false);

  const handleConfirmButtonClick = () => {
    setShowDateSelector(true);
  };

  return (
    <div>
      {showDateSelector ? (
        <>
          <ProgressBar progress={progress} />
          <DateSelector setProgress={setProgress} />
        </>
      ) : (
        <section id='front-page'>
        <div id='img-bg'>
        <img id='personal-img' src={img} alt="img" />

        <h1>יובל אמונה - מורה פרטית למתמטיקה</h1>
        </div>
        <div id='background'>
        <img id='bg' src={bgImg} alt="img" />
          <button id='schedule' onClick={handleConfirmButtonClick}>קביעת שיעור</button>
          </div>
        </section>
      )}
    </div>
  );
};

export default FrontPage;

