import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Calendar.css";

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
  "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "02:00 PM",
  "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM"
];

const BookAppointment = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const [appointmentDetails, setAppointmentDetails] = useState(null); // ✅ Store booked appointment
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    time: "",
  });

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

  const handleDayClick = (day) => {
    const date = new Date(year, month, day);
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDate || !formData.time) {
      alert("Please select a date and time!");
      return;
    }

    // Save appointment details
    const newAppointment = {
      ...formData,
      date: selectedDate.toDateString(),
    };
    setAppointmentDetails(newAppointment);

    // Reset form
    setFormData({ name: "", phone: "", time: "" });
    setSelectedDate(null);
    alert("Appointment booked successfully!");
  };

  const handleCancel = () => {
    navigate("/Profile");
  };

  const renderDays = () => {
    const cells = [];
    dayNames.forEach((day) => cells.push(<div className="day-name" key={day}>{day}</div>));

    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selectedDate &&
        day === selectedDate.getDate() &&
        month === selectedDate.getMonth() &&
        year === selectedDate.getFullYear();

      cells.push(
        <div
          key={day}
          className={`day ${isToday(day) ? "today" : ""} ${isSelected ? "selected" : ""}`}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="appointment-card">
      <h1 className="book-appointment-header">Book Appointment</h1>

      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Patient Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
        </label>

        <div className="date-picker">
          <button type="button" className="toggle-calendar-btn" onClick={() => setShowCalendar(!showCalendar)}>
            {showCalendar ? "Close Calendar" : "Select Date"}
          </button>
          {selectedDate && <p className="selected-date">Selected Date: {selectedDate.toDateString()}</p>}
        </div>

        {showCalendar && (
          <div className="calendar">
            <div className="calendar-header">
              <button type="button" onClick={() => changeMonth(-1)}>←</button>
              <h2>{currentDate.toLocaleString("default", { month: "long" })} {year}</h2>
              <button type="button" onClick={() => changeMonth(1)}>→</button>
            </div>
            <div className="calendar-grid">{renderDays()}</div>
          </div>
        )}

        <label>
          Time Slot:
          <select name="time" value={formData.time} onChange={handleInputChange} required>
            <option value="">-- Select a time --</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </label>

        <div className="button-group">
          <button type="submit" className="submit-btn">Book Appointment</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      </form>

      {/* ✅ Appointment Details Section */}
      {appointmentDetails && (
        <div className="appointment-details">
          <h2>📌 Appointment Details</h2>
          <p><strong>Patient Name:</strong> {appointmentDetails.name}</p>
          <p><strong>Phone:</strong> {appointmentDetails.phone}</p>
          <p><strong>Date:</strong> {appointmentDetails.date}</p>
          <p><strong>Time:</strong> {appointmentDetails.time}</p>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
