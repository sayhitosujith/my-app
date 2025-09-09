import React, { useState } from "react";
import "./Calendar.css";

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const BookAppointment = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
const [selectedDate, setSelectedDate] = useState(null); // Optional: Track selected date

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(month + offset);
    setCurrentDate(newDate);
  };

  const isToday = (day) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  const renderDays = () => {
    const cells = [];

    // Day name headers
    dayNames.forEach((day) => {
      cells.push(
        <div className="day-name" key={day}>
          {day}
        </div>
      );
    });

    // Blank cells before the first day
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(
        <div
          key={day}
          className={`day ${isToday(day) ? "today" : ""}`}
        >
          {day}
        </div>
      );
    }

    return cells;
  };

  return (
  <div className="calendar-container">
    <button
      className="toggle-calendar-btn"
      onClick={() => setShowCalendar(!showCalendar)}
    >
      {showCalendar ? "Close Calendar" : "Select Date"}
    </button>

    {showCalendar && (
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={() => changeMonth(-1)}>←</button>
          <h2>
            {currentDate.toLocaleString("default", {
              month: "long",
            })}{" "}
            {year}
          </h2>
          <button onClick={() => changeMonth(1)}>→</button>
        </div>
        <div className="calendar-grid">{renderDays()}</div>
      </div>
    )}
  </div>
);

};

export default BookAppointment;
