import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaPrint, FaTrash, FaShareAlt, FaSyncAlt, FaClone, FaEdit } from "react-icons/fa";
import "./Calendar.css";

const AppointmentHistory = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [appointmentsToPrint, setAppointmentsToPrint] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);
  const appointmentsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  // Pagination calculation
  const totalPages = Math.ceil(appointments.length / appointmentsPerPage);
  const indexOfLast = currentPage * appointmentsPerPage;
  const indexOfFirst = indexOfLast - appointmentsPerPage;
  const currentAppointments = appointments.slice(indexOfFirst, indexOfLast);

  // Print preview
  const openPrintPreview = (apts) => {
    if (!apts || apts.length === 0) return alert("No appointments to print!");
    setAppointmentsToPrint(apts);
    setShowPrintPreview(true);
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(generatePrintContent(appointmentsToPrint));
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    setShowPrintPreview(false);
  };

  const generatePrintContent = (apts) => `
    <html>
      <head>
        <title>Appointments</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h2 { color: #007BFF; }
          section { margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px; }
          section h3 { border-bottom: 1px solid #ddd; padding-bottom: 5px; color: #007BFF; }
          p { margin: 5px 0; }
        </style>
      </head>
      <body>
        <h2>Appointment Report</h2>
        ${apts.map(apt => `
          <section>
            <h3>Appointment ID: ${apt.appointmentID}</h3>
            <p><strong>Date:</strong> ${apt.date} | <strong>Time:</strong> ${apt.time}</p>
            <h4>Patient Info</h4>
            <p><strong>Name:</strong> ${apt.firstName} ${apt.middleName} ${apt.lastName}</p>
            <p><strong>Department:</strong> ${apt.department}</p>
            <p><strong>Doctor:</strong> ${apt.doctor}</p>
          </section>
        `).join("")}
      </body>
    </html>
  `;

  // Delete appointment
  const handleDeleteAppointment = (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;
    const updatedAppointments = appointments.filter(apt => apt.appointmentID !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    if (selectedAppointment && selectedAppointment.appointmentID === id) {
      setSelectedAppointment(null);
    }
    if (currentPage > Math.ceil(updatedAppointments.length / appointmentsPerPage)) {
      setCurrentPage(prev => prev - 1);
    }
  };

  // Delete selected appointments
  const handleDeleteSelected = () => {
    if (selectedIds.length === 0) return alert("No appointments selected!");
    if (!window.confirm("Are you sure you want to delete selected appointments?")) return;
    const updatedAppointments = appointments.filter(apt => !selectedIds.includes(apt.appointmentID));
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setSelectedIds([]);
  };

  // Share appointment
  const handleShare = (apt) => {
    const shareText = `Appointment Details:\nID: ${apt.appointmentID}\nName: ${apt.firstName} ${apt.lastName}\nDate: ${apt.date}\nTime: ${apt.time}`;
    navigator.clipboard.writeText(shareText);
    alert("Appointment details copied to clipboard!");
  };

  // Clone appointment (add at the end)
  const handleClone = (apt) => {
    const clonedApt = { 
      ...apt, 
      appointmentID: `Clone-${Date.now()}`,
      firstName: `Clone - ${apt.firstName}` 
    };
    const updatedAppointments = [...appointments, clonedApt];
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  // Edit appointment
  const handleEdit = (apt) => {
    navigate(`/BookAppointment`, { state: { appointment: apt } });
  };

  const handleRefresh = () => window.location.reload();

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(sid => sid !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === currentAppointments.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(currentAppointments.map(apt => apt.appointmentID));
    }
  };

  return (
    <div className="appointment-card container">
      <h1 className="book-appointment-header">Appointment History</h1>

      {/* Top Buttons */}
      <div className="action-buttons">
        <button className="submit-btn" onClick={() => navigate("/BookAppointment")}>➕ Add New Appointment</button>
        <button className="submit-btn" onClick={() => openPrintPreview(appointments)}><FaPrint /> Print All</button>
        <button className="cancel-btn" onClick={handleDeleteSelected}>🗑️ Delete Selected</button>
        <button className="submit-btn" onClick={handleRefresh}><FaSyncAlt /> Refresh</button>
      </div>

      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        <>
          <table className="appointment-table">
            <thead>
              <tr>
                <th><input type="checkbox" onChange={toggleSelectAll} checked={selectedIds.length === currentAppointments.length} /></th>
                <th className="sl-no">Sl No</th>
                <th>Appointment ID</th>
                <th className="date-col">Date</th>
                <th>Time</th>
                <th>Patient Name</th>
                <th>Department</th>
                <th>Doctor</th>
                <th>Appointment Type</th>
                <th className="actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentAppointments.map((apt, index) => {
                const formattedDate = new Date(apt.date).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                });

                return (
                  <tr key={apt.appointmentID}>
                    <td><input type="checkbox" checked={selectedIds.includes(apt.appointmentID)} onChange={() => toggleSelect(apt.appointmentID)} /></td>
                    <td className="sl-no">{indexOfFirst + index + 1}</td>
                    <td>{apt.appointmentID}</td>
                    <td className="date-col">{formattedDate}</td>
                    <td>{apt.time}</td>
                    <td>{`${apt.firstName} ${apt.middleName} ${apt.lastName}`}</td>
                    <td>{apt.department}</td>
                    <td>{apt.doctor}</td>
                    <td>{apt.appointmentType}</td>
                    <td className="actions table-actions">
                      <button className="icon-btn view" onClick={() => setSelectedAppointment(apt)} title="View"><FaEye /></button>
                      <button className="icon-btn print" onClick={() => openPrintPreview([apt])} title="Print"><FaPrint /></button>
                      <button className="icon-btn delete" onClick={() => handleDeleteAppointment(apt.appointmentID)} title="Delete"><FaTrash /></button>
                      <button className="icon-btn share" onClick={() => handleShare(apt)} title="Share"><FaShareAlt /></button>
                      <button className="icon-btn" style={{ backgroundColor: "#6F42C1" }} onClick={() => handleClone(apt)} title="Clone"><FaClone /></button>
                      <button className="icon-btn" style={{ backgroundColor: "#17A2B8" }} onClick={() => handleEdit(apt)} title="Edit"><FaEdit /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
          </div>
        </>
      )}

      {/* Appointment Details Modal */}
      {selectedAppointment && (
        <div className="modal-overlay" onClick={() => setSelectedAppointment(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>📌 Appointment Details</h2>
            <pre>{JSON.stringify(selectedAppointment, null, 2)}</pre>
            <div className="button-group">
              <button className="cancel-btn" onClick={() => setSelectedAppointment(null)}>Close</button>
              <button className="submit-btn" onClick={() => openPrintPreview([selectedAppointment])}><FaPrint /> Print</button>
              <button className="submit-btn" onClick={() => handleShare(selectedAppointment)}><FaShareAlt /> Share</button>
            </div>
          </div>
        </div>
      )}

      {/* Print Preview Modal */}
      {showPrintPreview && (
        <div className="modal-overlay" onClick={() => setShowPrintPreview(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxHeight: "80vh", overflowY: "auto" }}>
            <h2>🖨️ Print Preview</h2>
            {appointmentsToPrint.map((apt, idx) => (
              <section key={idx} style={{ borderBottom: "1px solid #ccc", marginBottom: "15px", paddingBottom: "10px" }}>
                <h3>Appointment ID: {apt.appointmentID}</h3>
                <p><strong>Name:</strong> {`${apt.firstName} ${apt.middleName} ${apt.lastName}`}</p>
                <p><strong>Date:</strong> {apt.date} | <strong>Time:</strong> {apt.time}</p>
                <p><strong>Department:</strong> {apt.department} | <strong>Doctor:</strong> {apt.doctor}</p>
                <p><strong>Appointment Type:</strong> {apt.appointmentType}</p>
              </section>
            ))}
            <div className="button-group" style={{ marginTop: "15px" }}>
              <button className="submit-btn" onClick={handlePrint}><FaPrint /> Print</button>
              <button className="cancel-btn" onClick={() => setShowPrintPreview(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentHistory;
