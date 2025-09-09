import React from 'react';
import './AppointmentHistory.css'; // Import the CSS

const AppointmentHistory = () => {
  const appointmentData = {
    firstName: "chadha",
    middleName: "",
    lastName: "s",
    gender: "Male",
    dob: "2025-09-11",
    age: "1",
    mobile: "7037937741",
    alternateContact: "",
    email: "sujithreddy1991@gmail.com",
    address: "QA",
    emergencyContactName: "",
    emergencyContactNumber: "",
    patientID: "",
    department: "Cardiology",
    doctor: "Dr. Smith",
    time: "11:30 AM",
    appointmentType: "In-person",
    reason: "",
    previousVisit: "",
    existingConditions: [],
    allergies: "",
    currentMedications: "",
    pastSurgeries: "",
    insuranceProvider: "",
    policyNumber: "",
    cardHolderName: "",
    insuranceCard: null,
    paymentMethod: "",
    termsAccepted: true,
    consentToShare: true,
    date: "Thu Sep 11 2025"
  };

  const renderRow = (label, value) => (
    <tr>
      <td className="label">{label}</td>
      <td>{value}</td>
    </tr>
  );

  return (
<div>
  <div className="appointment-history">
    <h2>📋 Appointment History</h2>


    <div className="section">
      <h3>🧑‍⚕️ Patient Information</h3>
      <table>
        <tbody>
          {renderRow("Name", `${appointmentData.firstName} ${appointmentData.middleName} ${appointmentData.lastName}`)}
          {renderRow("Gender", appointmentData.gender)}
          {renderRow("Date of Birth", appointmentData.dob)}
          {renderRow("Age", appointmentData.age)}
          {renderRow("Mobile", appointmentData.mobile)}
          {renderRow("Email", appointmentData.email)}
          {renderRow("Address", appointmentData.address)}
        </tbody>
      </table>
    </div>

    <div className="section">
      <h3>🏥 Appointment Details</h3>
      <table>
        <tbody>
          {renderRow("Department", appointmentData.department)}
          {renderRow("Doctor", appointmentData.doctor)}
          {renderRow("Type", appointmentData.appointmentType)}
          {renderRow("Date & Time", `${appointmentData.date} at ${appointmentData.time}`)}
          {renderRow("Reason", appointmentData.reason || "Not specified")}
          {renderRow("Previous Visit", appointmentData.previousVisit || "Not specified")}
        </tbody>
      </table>
    </div>

    <div className="section">
      <h3>⚕️ Medical Information</h3>
      <table>
        <tbody>
          {renderRow("Existing Conditions", appointmentData.existingConditions.length > 0 ? appointmentData.existingConditions.join(", ") : "None reported")}
          {renderRow("Allergies", appointmentData.allergies || "Not specified")}
          {renderRow("Current Medications", appointmentData.currentMedications || "Not specified")}
          {renderRow("Past Surgeries", appointmentData.pastSurgeries || "Not specified")}
        </tbody>
      </table>
    </div>

    <div className="section">
      <h3>🆘 Emergency Contact</h3>
      <table>
        <tbody>
          {renderRow("Name", appointmentData.emergencyContactName || "Not provided")}
          {renderRow("Phone", appointmentData.emergencyContactNumber || "Not provided")}
        </tbody>
      </table>
    </div>

    <div className="section">
      <h3>💳 Insurance Details</h3>
      <table>
        <tbody>
          {renderRow("Provider", appointmentData.insuranceProvider || "Not provided")}
          {renderRow("Policy Number", appointmentData.policyNumber || "Not provided")}
          {renderRow("Card Holder Name", appointmentData.cardHolderName || "Not provided")}
          {renderRow("Insurance Card", appointmentData.insuranceCard ? "Uploaded" : "Not uploaded")}
        </tbody>
      </table>
    </div>

    <div className="section">
      <h3>💰 Payment & Consent</h3>
      <table>
        <tbody>
          {renderRow("Payment Method", appointmentData.paymentMethod || "Not specified")}
          {renderRow("Terms Accepted", appointmentData.termsAccepted ? "✅ Yes" : "❌ No")}
          {renderRow("Consent to Share Info", appointmentData.consentToShare ? "✅ Yes" : "❌ No")}
        </tbody>
      </table>
    </div>

   <button
  onClick={() => window.print()}
  style={{ marginBottom: '20px', padding: '8px 16px', cursor: 'pointer', backgroundColor: 'green' }}
>
  🖨️ Print / Export PDF
</button>

  </div>


</div>
  );
};

export default AppointmentHistory;
