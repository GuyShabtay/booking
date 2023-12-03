import React, { useState } from 'react';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import ApproveMessage from './approveMessage';
import './style.css';


const Summary = ({ selectedDate, onBack,setProgress,selectedHour}) => {
  const [showApproveMessage, setShowApproveMessage] = useState(false);

  const formattedDate = format(selectedDate, 'dd/MM/yy', { locale: he });
  const dayNameInHebrew = format(selectedDate, 'EEEE', { locale: he });

  const handleConfirmButtonClick = () => {
    setShowApproveMessage(true);
    setProgress(4);
  };

  const handleBack = () => {
    setShowApproveMessage(false); 
    setProgress(3);
  };

  return (
    <section id='summary'>
    {showApproveMessage ? (
      <ApproveMessage selectedDate={selectedDate} onBack={handleBack} setProgress={setProgress} selectedHour={selectedHour} />
    ) : (
      <>
      <button id='back'  onClick={onBack}><i class="fa-solid fa-angle-left"></i>חזרה</button>
      <h1>סיכום</h1>
      <p>{formattedDate} שיעור במתמטיקה בתאריך </p>
      <p>בשעה {selectedHour} ({dayNameInHebrew})</p>
      <button id='summary-confirm' onClick={handleConfirmButtonClick}>אישור</button>
      </>
      )}
    </section>
  );
};

export default Summary;
