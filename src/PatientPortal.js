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
import { FaBell } from "react-icons/fa";
import logo from "./assets/DutyDentist.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PatientPortal = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  useEffect(() => { localStorage.setItem("theme", darkMode ? "dark" : "light"); }, [darkMode]);

  const navigate = useNavigate();

  // Forms data with dynamic questions
  const [forms, setForms] = useState([
  {
    id: 1,
    title: "Medical History Form",
    completed: false,
    responses: {},
    questions: [
      {
        id: "q1",
        type: "select",
        label: "Do you have any chronic illness?",
        options: ["Yes", "No"],
        required: true,
      },
      {
        id: "q2",
        type: "select",
        label: "Please list any medications you take:",
        options: [
          "None",
          "Blood Pressure Medication",
          "Diabetes Medication",
          "Painkillers",
          "Antibiotics",
          "Other",
        ],
        required: false,
      },
    ],
  },

  {
  id: 3,
  title: "Insurance Details",
  completed: false,
  responses: {},
  questions: [
    {
      id: "q1",
      type: "select",
      label: "Insurance Provider:",
      options: ["Aetna", "Cigna", "United Healthcare", "Blue Cross", "Other"],
      required: true,
    },
    {
      id: "q2",
      type: "text",
      label: "Policy Number:",
      required: true,
    },
  ],
},


  {
  id: 4,
  title: "Emergency Contact Info",
  completed: false,
  responses: {},
  questions: [
    {
      id: "q1",
      type: "select",
      label: "Contact Name:",
      options: ["Spouse", "Father", "Mother", "Friend", "Sibling"],
      required: true,
    },
    {
      id: "q2",
      type: "text",
      label: "Contact Phone:",
      required: true,
    },
  ],
},

  {
    id: 5,
    title: "Lifestyle Questionnaire",
    completed: false,
    responses: {},
    questions: [
      {
        id: "q1",
        type: "select",
        label: "Do you exercise regularly?",
        options: ["Yes", "No"],
        required: true,
      },
      {
        id: "q2",
        type: "select",
        label: "Which of these do you consume?",
        options: ["Alcohol", "Tobacco", "Caffeine", "None"],
        required: false,
      },
    ],
  },
]);


  const [searchTerm, setSearchTerm] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [activeForm, setActiveForm] = useState(null);
  const [formResponses, setFormResponses] = useState({});

const completedForms = forms.filter(f => f.completed).length;
const progress = forms.length > 0
  ? Math.round((completedForms / forms.length) * 100)
  : 0;


  const handleStartForm = (form) => {
    setActiveForm(form);
    setFormResponses(form.responses || {});
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setActiveForm(null);
    setFormResponses({});
    setModalOpen(false);
  };

  const handleInputChange = (questionId, value) => {
  // Limit Policy Number and Contact Phone to max 10 digits
  if (questionId === "q2" && (activeForm.id === 3 || activeForm.id === 4)) {
    // Remove non-digit characters
    value = value.replace(/\D/g, "");
    // Limit to 10 digits
    if (value.length > 10) value = value.slice(0, 10);
  }

  setFormResponses(prev => ({ ...prev, [questionId]: value }));
};


  const handleSubmitForm = () => {
    // Validate required fields
    const missing = activeForm.questions.filter(q => q.required && !formResponses[q.id]);
    if (missing.length > 0) {
      alert("Please answer all required fields!");
      return;
    }

    setForms(prev =>
      prev.map(f =>
        f.id === activeForm.id ? { ...f, completed: true, responses: formResponses } : f
      )
    );
    handleCloseModal();
  };

  const filteredForms = forms.filter(form => form.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className={`portal-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Sidebar */}
      <aside className="sidebar">
        <img style={{ width: "90%", height: "10%" }} src={logo} alt="Application_logo" />
        <button className="dark-mode-toggle" onClick={() => 
          setDarkMode(!darkMode)}>{darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}</button>

        <nav className="sidebar-nav">
          <Link to="/Welcome" className="nav-item"><IoHomeOutline size={20} /><span>Home</span></Link>
          <Link to="/PatientPortal" className="nav-item"><SiGoogleforms size={20} /><span>Forms</span></Link>
          <Link to="/DocumentCenter" className="nav-item"><MdOutlineDocumentScanner size={20} /><span>Documents Center</span></Link>
          <Link to="/Settings" className="nav-item"><TiSpanner size={25} /><span>Settings</span></Link>
          <Link to="/Profile" className="nav-item"><FaRegUser size={20} /><span>Profile</span></Link>
        </nav>
        <div className="nav-item"><BiSupport /><span>Help</span></div>
        <div className="sidebar-support"><h8>App Version : {packageJson.version}</h8></div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="main-header">
          <b><h1>Patient Onboarding Portal</h1></b>
          <div className="header-actions">
            <div className="notification-wrapper">
              <FaBell size={22} className="cursor-pointer" onClick={() => setShowNotifications(!showNotifications)} />
              {showNotifications && (
                <div className="notifications-dropdown">
                  {["New message from your doctor", "Insurance approved", "Appointment rescheduled"].map((note, idx) => <div key={idx} className="notification-item">{note}</div>)}
                </div>
              )}
            </div>
            <PiLineVerticalThin size={24} color="black" />
            <div className="user-badge" onClick={() => setShowProfileMenu(!showProfileMenu)}>
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

        {/* Stats & Progress */}
        <section className="stats-card">
          <div className="card stats-container">
            <h3 className="stats-title">Forms KPI</h3>
            <div className="stats-section">
              <div className="stat-box"><h4>Total Forms</h4><p>{forms.length}</p></div>
              <div className="stat-box"><h4>Completed Forms</h4><p>{completedForms}</p></div>
              <div className="stat-box"><h4>Pending Forms</h4><p>{forms.length - completedForms}</p></div>
            </div>
          </div>
        </section>

        <section className="progress-section">
          <div className="progress-box">
            <div className="progress-info"><p><strong>Progress</strong></p><p>{progress}%</p></div>
<div className="progress-bar-container">
  <div
    className="progress-bar"
    style={{ width: `${progress}%` }}
  />
</div>

            <div className="progress-note">Forms will be reviewed by staff when completed.</div>
          </div>
        </section>

        {/* Search */}
        <div className="search-bar">
          <input type="text" placeholder="Search forms..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>

        {/* Forms Section */}
        <section className="forms-section">
          {filteredForms.map(form => (
            <div key={form.id} className="card">
              <div className="card-body">
                <h2 className="card-title">{form.title}</h2>
                <p className="card-text">Please complete all forms assigned to you. Your responses help our team provide the most accurate care.</p>
                <button className={`form-btn ${form.completed ? "completed" : ""}`} onClick={() => handleStartForm(form)}>
                  {form.completed ? "View / Edit" : "Start Form"}
                </button>
              </div>
            </div>  
          ))}
        </section>

<div className="fixed bottom-6 right-6 flex flex-col items-end gap-1 z-50">
<button
  disabled={completedForms !== forms.length}
  onClick={() => navigate("/Profile")}
  className={`px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform
    ${completedForms === forms.length
      ? "bg-red-600 text-white hover:bg-red-700 cursor-pointer animate-pulse scale-105"
      : "bg-gray-400 text-gray-700 cursor-not-allowed"}
  `}
>
  + ONBOARD NEW PATIENT
</button>


  {completedForms !== forms.length && (
    <span className="text-xs text-red-600 font-medium">
      <u>NOTE: complete all forms to enable this Button</u>
    </span>
  )}
</div>




        {/* Dynamic Modal */}
        {modalOpen && activeForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>{activeForm.title}</h2>
              <div className="modal-body">
              {activeForm.questions.map(q => {
  // Only show "medications" if chronic illness is "Yes"
  if (q.id === "q2" && activeForm.id === 1 && formResponses["q1"] === "No") {
    return null; // Hide this field
  }

  switch (q.type) {
case "text":
  return (
    <label key={q.id}>
      {q.label}: 
      <input
        type="text"
        value={formResponses[q.id] || ""}
        onChange={e => handleInputChange(q.id, e.target.value)}
        inputMode={(q.id === "q2" && (activeForm.id === 3 || activeForm.id === 4)) ? "numeric" : "text"}
        placeholder={(q.id === "q2" && (activeForm.id === 3 || activeForm.id === 4)) ? "Enter up to 10 digits" : ""}
      />
    </label>
  );

    case "select":
      return (
        <label key={q.id}>
          {q.label}:
          <select
            value={formResponses[q.id] || ""}
            onChange={e => handleInputChange(q.id, e.target.value)}
          >
            <option value="">Select</option>
            {q.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </label>
      );
    case "textarea":
      return (
        <label key={q.id}>
          {q.label}:
          <textarea
            value={formResponses[q.id] || ""}
            onChange={e => handleInputChange(q.id, e.target.value)}
          />
        </label>
      );
    case "checkbox":
      return (
        <fieldset key={q.id}>
          <legend>{q.label}:</legend>
          {q.options.map(opt => (
            <label key={opt}>
              <input
                type="checkbox"
                checked={formResponses[q.id]?.includes(opt)}
                onChange={e => {
                  const prev = formResponses[q.id] || [];
                  if (e.target.checked) handleInputChange(q.id, [...prev, opt]);
                  else handleInputChange(q.id, prev.filter(v => v !== opt));
                }}
              />
              {opt}
            </label>
          ))}
        </fieldset>
      );
    default:
      return null;
  }
})}


              </div>
              <div className="modal-footer">
                <button onClick={handleCloseModal} className="modal-btn cancel">Cancel</button>
                <button onClick={handleSubmitForm} className="modal-btn submit">Submit</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PatientPortal;
