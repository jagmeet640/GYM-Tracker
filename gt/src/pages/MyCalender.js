// src/components/Calendar.js
import React, { useState } from 'react';


const MyCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return Array.from({ length: lastDay.getDate() }, (_, i) => i + 1);
  };

  return (
    <div className="calendar-container">
      <div className="month-header">
        {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
      </div>
      <div className="days-container">
        {daysInMonth(currentMonth).map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCalendar;
