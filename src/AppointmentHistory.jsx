import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("appointmentDetails");
    if (stored) {
      setAppointments([JSON.parse(stored)]);
    }
  }, []);

  return (
    <div className="p-10">
      <Typography variant="h2" color="black">Appointment History</Typography>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        appointments.map((appt, index) => (
          <Card key={index} className="p-5 my-4">
            <p><strong>Date:</strong> {appt.date}</p>
            <p><strong>Department:</strong> {appt.department}</p>
            <p><strong>Doctor:</strong> {appt.doctor}</p>
            <p><strong>Time:</strong> {appt.time}</p>
            <p><strong>Reason:</strong> {appt.reason}</p>
          </Card>
        ))
      )}
    </div>
  );
};

export default AppointmentHistory;
