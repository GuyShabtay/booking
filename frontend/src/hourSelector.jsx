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
  const [hours, setHours] = useState([]);

  const formattedDate = format(selectedDate, 'dd/MM/yy', { locale: he });
  const dayNameInHebrew = format(selectedDate, 'EEEE', { locale: he });

  useEffect(() => {
    const fetchHours=async()=>{
      const {data}=await axios.get('/api/hours');
      setHours(data);
    };
    fetchHours();
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
          {hours.map((time) => (
            <button key={time._id} onClick={() => handleTimeButtonClick(time)}>
              {time.time}
            </button>
          ))}
        </div>
        

         

          {/* Add additional content for the selected date component */}
        </>
      )}
    </section>
  );
};

export default HourSelector;
