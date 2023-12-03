import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FrontPage from './frontPage';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FrontPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();










// import React, { useState } from "react";
// import { render } from "react-dom";
// import Calendar from "react-calendar";
// // import 'react-calendar/dist/Calendar.css';
// import './calendar.css';

// const ReactCalendar = () => {
//   const [date, setDate] = useState(new Date());

//   const onChange = date => {
//     setDate(date);
//   };

//   return (
//     <div>
//       <Calendar onChange={onChange} value={date} />
      
//     </div>
//   );
// };

// render(<ReactCalendar />, document.querySelector("#root"));













// import {
//   add,
//   eachDayOfInterval,
//   endOfMonth,
//   format,
//   getDay,
//   isEqual,
//   isSameDay,
//   isSameMonth,
//   isToday,
//   parse,
//   parseISO,
//   startOfToday,
// } from 'date-fns'
// import { Fragment, useState } from 'react'


// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   let today = startOfToday()
//   let [selectedDay, setSelectedDay] = useState(today)
//   let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
//   let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

//   let days = eachDayOfInterval({
//     start: firstDayCurrentMonth,
//     end: endOfMonth(firstDayCurrentMonth),
//   })

//   function previousMonth() {
//     let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
//     setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
//   }

//   function nextMonth() {
//     let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
//     setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
//   }

  

//   return (
//     <div className="pt-16">
//       <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
//         <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
//           <div className="md:pr-14">
//             <div className="flex items-center">
//               <h2 className="flex-auto font-semibold text-gray-900">
//                 {format(firstDayCurrentMonth, 'MMMM yyyy')}
//               </h2>
             
//             </div>
//             <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
//               <div>S</div>
//               <div>M</div>
//               <div>T</div>
//               <div>W</div>
//               <div>T</div>
//               <div>F</div>
//               <div>S</div>
//             </div>
//             <div className="grid grid-cols-7 mt-2 text-sm">
//               {days.map((day, dayIdx) => (
//                 <div
//                   key={day.toString()}
//                   className={classNames(
//                     dayIdx === 0 && colStartClasses[getDay(day)],
//                     'py-1.5'
//                   )}
//                 >
//                   <button
//                     type="button"
//                     onClick={() => setSelectedDay(day)}
//                     className={classNames(
//                       isEqual(day, selectedDay) && 'text-white',
//                       !isEqual(day, selectedDay) &&
//                         isToday(day) &&
//                         'text-red-500',
//                       !isEqual(day, selectedDay) &&
//                         !isToday(day) &&
//                         isSameMonth(day, firstDayCurrentMonth) &&
//                         'text-gray-900',
//                       !isEqual(day, selectedDay) &&
//                         !isToday(day) &&
//                         !isSameMonth(day, firstDayCurrentMonth) &&
//                         'text-gray-400',
//                       isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
//                       isEqual(day, selectedDay) &&
//                         !isToday(day) &&
//                         'bg-gray-900',
//                       !isEqual(day, selectedDay) && 'hover:bg-gray-200',
//                       (isEqual(day, selectedDay) || isToday(day)) &&
//                         'font-semibold',
//                       'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
//                     )}
//                   >
//                     <time dateTime={format(day, 'yyyy-MM-dd')}>
//                       {format(day, 'd')}
//                     </time>
//                   </button>

                  
//                 </div>
//               ))}
//             </div>
//           </div>
//           <section className="mt-12 md:mt-0 md:pl-14">
//             <h2 className="font-semibold text-gray-900">
//               Schedule for{' '}
//               <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
//                 {format(selectedDay, 'MMM dd, yyy')}
//               </time>
//             </h2>
           
//           </section>
//         </div>
//       </div>
//     </div>
//   )
// }



// let colStartClasses = [
//   '',
//   'col-start-2',
//   'col-start-3',
//   'col-start-4',
//   'col-start-5',
//   'col-start-6',
//   'col-start-7',
// ]