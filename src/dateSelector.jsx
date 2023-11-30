import React, { useState, useEffect } from 'react';
import './style.css';
import HourSelector from './hourSelector';

const DateSelector = ({ setProgress }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showHourSelector, setShowHourSelector] = useState(false);

 
  const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

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
                    onClick={() => handleDateClick(date)}>
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
      {selectedDate && (
        <p>Selected Date: {selectedDate.toLocaleDateString()}</p>
      )}
     
     

      {/* Add additional content for the selected date component */}
    </>
  )}
</section>
);
};

export default DateSelector;
