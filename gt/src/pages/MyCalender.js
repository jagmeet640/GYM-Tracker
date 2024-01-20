// // src/components/Calendar.js
// import React, { useState } from 'react';
// import Calendar from 'react-calendar'

// // todo
// // need to add functionality for multiple months and years


// const MyCalendar = () => {
//   // const [currentMonth, setCurrentMonth] = useState(new Date());

//   // const daysInMonth = (date) => {
//   //   const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
//   //   const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
//   //   return Array.from({ length: lastDay.getDate() }, (_, i) => i + 1);
//   // };

//   const ValuePiece = Date | null;

//   const Value = ValuePiece | [ValuePiece, ValuePiece];

//   const [value, onChange] = useState<Value>(new Date());

//   return (
//     // <div className="calendar-container">
//     //   <div className="month-header">
//     //     {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
//     //   </div>
//     //   <div className="days-container">
//     //     {daysInMonth(currentMonth).map((day) => (
//     //       <div key={day} className="day">
//     //         {day}
//     //       </div>
//     //     ))}
//     //   </div>
//     // </div>
//     <div>
//       <Calendar onChange={onChange} value={value} />
//     </div>
//   );
// };

// export default MyCalendar;


import React, { useState } from 'react';
import Calendar from 'react-calendar';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date()); // Use a Date object as the initial value

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default MyCalendar;
