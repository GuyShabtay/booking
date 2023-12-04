import React, { useState, useEffect } from 'react';
import './style.css';
import HourSelector from './hourSelector';
import axios from 'axios';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';


const DateSelector = ({ setProgress }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showHourSelector, setShowHourSelector] = useState(false);
  const [availableDays, setAvailableDays] = useState([]);



 
  const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
  useEffect(() => {
    const fetchDays = async () => {
      const { data } = await axios.get(`/api/days`);
      const daysWithAvailableHours = data.filter(day => day.availableHours.length > 0);
      const availableDaysArray = daysWithAvailableHours.map(day => day.date);
      setAvailableDays(availableDaysArray);

    };

    fetchDays();
  }, []);

  const generateDates = () => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startingDayIndex = firstDay.getDay(); // 0 for Sunday, 1 for Monday, etc.
    const totalDays = daysInMonth(currentDate);
    const dates = [];

    

    // Add empty cells for days before the start of the month
    for (let i = 0; i < startingDayIndex; i++) {
      dates.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= totalDays; i++) {
      dates.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    }

    return dates;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowHourSelector(true);
    setProgress(2);

  };


  const handleBack = () => {
    setShowHourSelector(false); 
    setProgress(1);
  };

  useEffect(() => {
    // You can perform any additional actions when the month changes
    console.log('Month changed:', currentDate.toLocaleString('default', { month: 'long' }));
  }, [currentDate]);

  const dateToString = (date) => {
    return format(date, 'dd/MM/yy', { locale: he }) };

  return (
    <section id='date-selector'>
    {showHourSelector ? (
      <HourSelector selectedDate={selectedDate} onBack={handleBack} setProgress={setProgress} />
    ) : (
      <>
      <div className="months-navigation">
      
      <button onClick={handlePrevMonth} className='months-arrow'><i class="fa-solid fa-chevron-left"></i></button>
      <h1>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h1>
      <button onClick={handleNextMonth} className='months-arrow'><i class="fa-solid fa-chevron-right"></i></button>
      </div>
      <div id="calendar">
      <table>
        <thead>
          <tr>
            <th>א</th>
            <th>ב</th>
            <th>ג</th>
            <th>ד</th>
            <th>ה</th>
            <th>ו</th>
            <th>ש</th>
          </tr>
        </thead>
        <tbody>
          {generateDates().reduce((rows, date, index) => {
            if (index % 7 === 0) rows.push([]);
            rows[rows.length - 1].push(date);
            return rows;
          }, []).map((week, rowIndex) => (
            <tr key={rowIndex}>
              {week.map((date, colIndex) => (
                <td key={colIndex}>
                {date && (
                  <button
                    onClick={() => handleDateClick(date)}
                    className={availableDays.includes(dateToString(date)) ? 'available-day' : ''}
                  >
                    {date.getDate()}
                  </button>
                )}
                
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
     
     

    </>
  )}
</section>
);
};

export default DateSelector;
