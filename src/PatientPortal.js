import React from "react";
import "./PatientPortal.css";

// ✅ Add missing icon imports
import { PiLineVerticalThin } from "react-icons/pi";
import { FaPowerOff } from "react-icons/fa";

const PatientPortal = () => {
  return (
    <div className="portal-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h2>
            Dental <span className="subtext">World</span>
          </h2>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-item">🏠 My Dashboard</div>
          <div className="nav-item active">📄 Forms</div>
          <div className="nav-item">🧳 Documents</div>
        </nav>

        <div className="sidebar-support">
          <div className="nav-item">🆘 Help</div>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="main-header">
          <h1>My Patient Portal</h1>

          <div className="user-badge">
            <div className="user-icon">ss</div>
            <span className="username">sujith s</span>
            
            {/* Vertical line icon */}
            <PiLineVerticalThin size={24} color="black" />

            {/* Logout button */}
            <a href="/Logout" className="logout-link">
              <div className="relative group cursor-pointer">
                <FaPowerOff color="black" size={20} />
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  Logout
                </span>
              </div>
            </a>
          </div>
        </header>

        {/* Progress Section */}
        <section className="progress-section">
          <div className="progress-box">
            <div className="progress-info">
              <p>
                <strong>Progress</strong>
              </p>
              <p>0%</p>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: "0%" }}></div>
            </div>
            <div className="progress-note">
              Forms will be reviewed by staff when completed
            </div>
          </div>
        </section>

        {/* Forms Section */}
        <section className="forms-section">
          <h2>Forms</h2>
          <p>
            Please complete all forms assigned to you in this section. Your
            responses help our team provide the most accurate and effective care.
          </p>
        </section>

        {/* Help Box */}
        <aside className="help-box">
          <h3>❓ Need help?</h3>
          <p>
            Are you unsure about some of the questions? Don’t worry, we can help.
          </p>
<button
  className="contact-btn"
  onClick={() => window.location.href = '/CustomerCare'}
>
  Contact Us
</button>
        </aside>
      </main>
    </div>
  );
};

export default PatientPortal;
