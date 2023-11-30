// SelectedDateComponent.js
import React, { useState } from 'react';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import Summary from './summary';
import './style.css'

const HourSelector = ({ selectedDate, onBack,setProgress }) => {
  const [showSummary, setShowSummary] = useState(false);

  const formattedDate = format(selectedDate, 'dd/MM/yy', { locale: he });
  const dayNameInHebrew = format(selectedDate, 'EEEE', { locale: he });

  const handleTimeButtonClick = () => {
    setShowSummary(true);
    setProgress(3);


  };
  const handleBack = () => {
    setShowSummary(false); 
    setProgress(2);
  };

  return (
    <section id='hourSelector'>
      {showSummary ? (
        <Summary selectedDate={selectedDate} onBack={handleBack} setProgress={setProgress} />
      ) : (
        <>
        <button id='back'  onClick={onBack}><i class="fa-solid fa-angle-left"></i>חזרה</button>
        <h1>בחירת שעה</h1>
          <p>({dayNameInHebrew}) {formattedDate}</p>
          <div class='hours-container'>
          <button onClick={handleTimeButtonClick}>11:00</button>
          <button onClick={handleTimeButtonClick}>12:00</button>
          <button onClick={handleTimeButtonClick}>13:00</button>
          <button onClick={handleTimeButtonClick}>14:00</button>
          <button onClick={handleTimeButtonClick}>15:00</button>
          <button onClick={handleTimeButtonClick}>16:00</button>
          </div>

         

          {/* Add additional content for the selected date component */}
        </>
      )}
    </section>
  );
};

export default HourSelector;
