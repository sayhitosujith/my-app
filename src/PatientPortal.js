import React, { useState, useEffect } from "react";
import "./PatientPortal.css";
import packageJson from "../package.json";
import { IoHomeOutline } from "react-icons/io5";
import { SiGoogleforms } from "react-icons/si";
import { FaRegUser } from "react-icons/fa6";
import { TiSpanner } from "react-icons/ti";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { PiLineVerticalThin } from "react-icons/pi";
import { FaPowerOff, FaBell } from "react-icons/fa";
import logo from "./assets/logo-dd.jpg";
import { Link } from "react-router-dom";

const PatientPortal = () => {
  // 🌙 Dark mode (persistent)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // 🧾 Forms data
  const [forms, setForms] = useState([
    { id: 1, title: "Medical History Form", completed: false },
    { id: 2, title: "Allergy Disclosure", completed: true },
    { id: 3, title: "Insurance Details", completed: false },
    { id: 4, title: "Emergency Contact Info", completed: false },
    { id: 5, title: "Lifestyle Questionnaire", completed: false },
  ]);

  // 🔍 Search
  const [searchTerm, setSearchTerm] = useState("");

  // 🔔 Notifications
  const [showNotifications, setShowNotifications] = useState(false);
  const notifications = [
    "New message from your doctor",
    "Your insurance form has been approved",
    "Appointment rescheduled for Nov 20, 2025",
  ];

  // 👤 Profile Dropdown
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // 📊 Progress calculation
  const completedForms = forms.filter((f) => f.completed).length;
  const progress = Math.round((completedForms / forms.length) * 100);

  // ✅ Toggle form completion
  const toggleFormCompletion = (id) => {
    setForms((prev) =>
      prev.map((form) =>
        form.id === id ? { ...form, completed: !form.completed } : form
      )
    );
  };

  // 🔍 Filter forms based on search
  const filteredForms = forms.filter((form) =>
    form.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`portal-container ${darkMode ? "dark-mode" : ""}`}>
      
      {/* Sidebar */}
      <aside className="sidebar">
        <img
          style={{ width: "90%", height: "10%" }}
          src={logo}
          alt="Application_logo"
        />
        <nav className="sidebar-nav">
         <Link to="/Welcome" className="nav-item">
         <IoHomeOutline size={20} />
         <span>Home</span>
        </Link>
           <Link to="/PatientPortal" className="nav-item">
         <SiGoogleforms  size={20} />
         <span>Forms</span>
        </Link>
          <Link to="/DocumentCenter" className="nav-item">
         <MdOutlineDocumentScanner  size={20} />
         <span>Documents Center</span>
        </Link>
            <Link to="/Settings" className="nav-item">
         <TiSpanner size={25} />
         <span>Settings</span>
        </Link>
           <Link to="/Profile" className="nav-item">
         <FaRegUser  size={20} />
         <span>Profile</span>
        </Link>

          {/* 🌙 Dark mode toggle */}
      <button
        className="dark-mode-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

        </nav>



        <div className="nav-item">
          <BiSupport />
          <span>Help</span>
        </div>
        <div className="sidebar-support">
          <h8>App Version : {packageJson.version}</h8>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="main-header">
          <h1>My Patient Portal</h1>

          <div className="header-actions">
            {/* 🔔 Notifications */}
            <div className="notification-wrapper">
              <FaBell
                size={22}
                color="black"
                className="cursor-pointer"
                onClick={() => setShowNotifications(!showNotifications)}
              />
              {showNotifications && (
                <div className="notifications-dropdown">
                  {notifications.map((note, index) => (
                    <div key={index} className="notification-item">
                      {note}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <PiLineVerticalThin size={24} color="black" />

            {/* 👤 User badge */}
            <div
              className="user-badge"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <div className="user-icon">SS</div>
              <span className="username">Sujith S</span>

              {showProfileMenu && (
                <div className="profile-dropdown">
                  <a href="/Profile">Edit Profile</a>
                  <a href="/Settings">Settings</a>
                  <a href="/Logout">Logout</a>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* 🔔 Alert Banner */}
        {/* <div className="alert-banner">
          🕒 Alert : You have {forms.length - completedForms} forms pending.
        </div> */}

{/* 📊 Stats */}
<section className="stats-card">
  <div className="card stats-container">
    <h3 className="stats-title"> Forms KPI</h3>

    <div className="stats-section">
      <div className="stat-box">
<h4><strong><em>Total Forms</em></strong></h4>
        <p>{forms.length}</p>
      </div>
      <div className="stat-box">
<h4><strong><em>Completed Forms</em></strong></h4>
        <p>{completedForms}</p>
      </div>
      <div className="stat-box">
<h4><strong><em>Pending Forms</em></strong></h4>
        <p>{forms.length - completedForms}</p>
      </div>
    </div>
  </div>
</section>


        {/* 📈 Progress */}
        <section className="progress-section">
          <div className="progress-box">
            <div className="progress-info">
              <p>
                <strong>Progress</strong>
              </p>
              <p>{progress}%</p>
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-note">
              Forms will be reviewed by staff when completed.
            </div>
          </div>
        </section>

        {/* 🔍 Search Forms */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search forms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 🧾 Forms */}
        <section className="forms-section">

          {filteredForms.map((form) => (
            <div key={form.id} className="card">
              <div className="card-body">
                <h2 className="card-title">{form.title}</h2>
                <p className="card-text">
                  Please complete all forms assigned to you. Your responses help
                  our team provide the most accurate and effective care.
                </p>
                <button
                  className={`form-btn ${form.completed ? "completed" : ""}`}
                  onClick={() => toggleFormCompletion(form.id)}
                >
                  {form.completed ? "View / Edit" : "Start Form"}
                </button>
              </div>
            </div>
          ))}
        </section>

  <div className="activity-appointments-wrapper">
  {/* 🕓 Recent Activity */}
  <section className="recent-activity">
    <h3>Recent Activity</h3>
    <ul>
      <li>✅ Completed Allergy Disclosure</li>
      <li>📅 Scheduled check-up for Nov 20</li>
      <li>📝 Updated emergency contact info</li>
    </ul>
  </section>

  {/* 📅 Upcoming Appointments */}
  <section className="appointments-section">
    <h3>Upcoming Appointments</h3>
    <ul>
      <li>
        <strong>Nov 20, 2025:</strong> Routine Check-up @ 10:00 AM
      </li>
      <li>
        <strong>Dec 5, 2025:</strong> Follow-up @ 2:30 PM
      </li>
    </ul>
  </section>
</div>


        {/* 🆘 Help */}
        <aside className="help-box">
          <h3>Need help?</h3>
          <p>
            Are you unsure about some of the questions? Don’t worry, we can
            help.
          </p>
          <button
            className="contact-btn"
            onClick={() => (window.location.href = "/CustomerCare")}
          >
            Contact Us
          </button>
        </aside>
      </main>
    </div>
  );
};

export default PatientPortal;
