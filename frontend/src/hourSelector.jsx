// SelectedDateComponent.js
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import Summary from './summary';
import './style.css';
import axios from 'axios';


const HourSelector = ({ selectedDate, onBack,setProgress }) => {
  const [showSummary, setShowSummary] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);
  const [day, setDay] = useState({ availableHours: [] });

  const formattedDate = format(selectedDate, 'dd/MM/yy', { locale: he });
  const dayNameInHebrew = format(selectedDate, 'EEEE', { locale: he });

  useEffect(() => {
    const fetchDay = async () => {
      const { data } = await axios.get(`/api/days`);  
      for (let i = 0; i < data.length; i++) {
        if (data[i].date === formattedDate) {
          setDay(data[i]);
        }
      }
    };
    fetchDay();
  }, []);

  const handleTimeButtonClick = (hour) => {
    setSelectedHour(hour);
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
        <Summary selectedDate={selectedDate} onBack={handleBack} setProgress={setProgress} selectedHour={selectedHour} />
      ) : (
        <>
        <button id='back'  onClick={onBack}><i class="fa-solid fa-angle-left"></i>חזרה</button>
        <h1>בחירת שעה</h1>
          <p>({dayNameInHebrew}) {formattedDate}</p>
          <div className='hours-container'>
          {day.availableHours.length > 0 ? (
            day.availableHours.map((hour) => (
              <div key={hour}>
                <button onClick={() => handleTimeButtonClick(hour)}>
                  {hour}
                </button>
              </div>
            ))
          ) : (
            <h3>עדיין לא נקבעו שיעורים ליום זה</h3>
          )}
        </div>
        
        </>
      )}
    </section>
  );
};

export default HourSelector;
