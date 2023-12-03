import React, { useState } from 'react';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import './style.css'


const ApproveMessage = ({ selectedDate, onBack,setProgress,selectedHour}) => {
  const [showContinueButton, setShowContinueButton] = useState(false);

  const formattedDate = format(selectedDate, 'dd/MM/yy', { locale: he });
  const dayNameInHebrew = format(selectedDate, 'EEEE', { locale: he });

  

  return (
    <section id='approve-message'>
    <button id='back'  onClick={onBack}><i class="fa-solid fa-angle-left"></i>חזרה</button>
    <i class="fa-solid fa-circle-check fa-3x"></i>
    <p>קבעת שיעור במתמטיקה  </p>
    <p>{formattedDate} בתאריך </p>
    <div className='months-navigation'>
    <p> ({dayNameInHebrew}) </p>
    <p> {selectedHour} בשעה</p>
    </div>
    <h1>!! בהצלחה</h1>

    </section>
  );
};

export default ApproveMessage;
