import React, { useState } from "react";
import { Line } from 'react-chartjs-2';
import { FaUsers, FaDollarSign, FaClipboardList, FaRegComments, FaCog } from 'react-icons/fa'; // Import icons
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import './SuperAdmin.css'; // Import the CSS styles
import { IoIosLogOut } from "react-icons/io";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const SuperAdmin = () => {
  const [appointments, setAppointments] = useState([
    { name: 'Solomon Ideh', phone: '09067813451', dentist: 'Malik Johnson', time: '15 May 2020 9:00 am' },
    { name: 'Daniel Samuel', phone: '08052343218', dentist: 'Aisha Bennett', time: '15 May 2020 8:30 am' },
    { name: 'Israel Faizul', phone: '07083465098', dentist: 'Jabari Mitchell', time: '15 May 2020 9:30 am' },
    { name: 'Hannah Pedro', phone: '08178901234', dentist: 'Olu Jacobs', time: '15 May 2020 8:00 am' }
  ]);

  const [revenueData, setRevenueData] = useState({
    totalRevenue: '₦250M',
    totalPatients: 368,
    totalDoctors: 26,
    analytics: [50, 60, 80, 90, 100, 60, 40, 90, 120, 80, 60, 70]
  });

  const [customerComplaints, setCustomerComplaints] = useState([
    { name: 'Adegboyoga Precious', time: '09:04 AM', complaint: 'The doctor that attended to me...' },
    { name: 'Eze Chinuedu', time: '3 days ago', complaint: 'The security guy is so disrespectful...' },
    { name: 'Jibike Alarape', time: '5 days ago', complaint: 'As a woman, you guys need to do better...' },
    { name: 'Adebanji Bolaji', time: '1 week ago', complaint: 'Your clinic is just too expensive...' },
    { name: 'Jide Kosoko', time: '2 months ago', complaint: 'How can a clinic treat someone without...'}
  ]);

  // Chart Data for Revenue Analytics
  const chartData = {
    labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb', '08 Feb', '09 Feb', '10 Feb', '11 Feb', '12 Feb'],
    datasets: [
      {
        label: 'Revenue Over Time',
        data: revenueData.analytics,
        fill: false,
        borderColor: '#4caf50',
        tension: 0.1,
      }
    ]
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="logo">DENTAL CARTE</div>
        <div className="menu">
          <ul>
            {/* <Link to="/Welcome" className="nav-item"><IoHomeOutline size={20} /><span>Home</span></Link>
                      <Link to="/PatientPortal" className="nav-item"><SiGoogleforms size={20} /><span>Forms</span></Link>
                      <Link to="/DocumentCenter" className="nav-item"><MdOutlineDocumentScanner size={20} /><span>Documents Center</span></Link>
                      <Link to="/Settings" className="nav-item"><TiSpanner size={25} /><span>Settings</span></Link>
                      <Link to="/Profile" className="nav-item"><FaRegUser size={20} /><span>Profile</span></Link>
                      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>{darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}</button> */}
            <li><FaClipboardList /> Overview</li>
            <li><FaUsers /> Doctors</li>
            <li><FaUsers /> Patients</li>
            <li><FaClipboardList /> Appointments</li>
            <li><FaDollarSign /> Revenue</li>
            <li><FaRegComments /> Complaints</li>
            <li><FaClipboardList /> Inventory</li>
            <li><FaCog /> Settings</li>
            <li><IoIosLogOut /> Log Out</li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <div className="header">
          <h1>Welcome back, Funmi</h1>
          <div className="stats">
            <div className="stat-box">
              <h2><FaDollarSign /> Total Revenue</h2>
              <p>{revenueData.totalRevenue}</p>
            </div>
            <div className="stat-box">
              <h2><FaUsers /> Total Patients</h2>
              <p>{revenueData.totalPatients}</p>
            </div>
            <div className="stat-box">
              <h2><FaUsers /> Total Doctors</h2>
              <p>{revenueData.totalDoctors}</p>
            </div>
          </div>
        </div>

        <div className="revenue-chart">
          <h2>Revenue Analytics</h2>
          <Line data={chartData} />
          <p>₦6,368.94</p>
        </div>

        <div className="appointments">
          <h2>Upcoming Appointments</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone No</th>
                <th>Dentist</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt, index) => (
                <tr key={index}>
                  <td>{appt.name}</td>
                  <td>{appt.phone}</td>
                  <td>{appt.dentist}</td>
                  <td>{appt.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="complaints">
          <h2>Customer Complaints</h2>
          <ul>
            {customerComplaints.map((complaint, index) => (
              <li key={index}>
                <p><strong>{complaint.name}</strong> - {complaint.time}</p>
                <p>{complaint.complaint}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
