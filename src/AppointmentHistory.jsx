import React from 'react';

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

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>📋 Appointment History</h2>

      <section>
        <h3>🧑‍⚕️ Patient Information</h3>
        <p><strong>Name:</strong> {appointmentData.firstName} {appointmentData.middleName} {appointmentData.lastName}</p>
        <p><strong>Gender:</strong> {appointmentData.gender}</p>
        <p><strong>Date of Birth:</strong> {appointmentData.dob}</p>
        <p><strong>Age:</strong> {appointmentData.age}</p>
        <p><strong>Mobile:</strong> {appointmentData.mobile}</p>
        <p><strong>Email:</strong> {appointmentData.email}</p>
        <p><strong>Address:</strong> {appointmentData.address}</p>
      </section>

      <section>
        <h3>🏥 Appointment Details</h3>
        <p><strong>Department:</strong> {appointmentData.department}</p>
        <p><strong>Doctor:</strong> {appointmentData.doctor}</p>
        <p><strong>Type:</strong> {appointmentData.appointmentType}</p>
        <p><strong>Date & Time:</strong> {appointmentData.date} at {appointmentData.time}</p>
        <p><strong>Reason:</strong> {appointmentData.reason || "Not specified"}</p>
        <p><strong>Previous Visit:</strong> {appointmentData.previousVisit || "Not specified"}</p>
      </section>

      <section>
        <h3>⚕️ Medical Information</h3>
        <p><strong>Existing Conditions:</strong> {appointmentData.existingConditions.length > 0 ? appointmentData.existingConditions.join(", ") : "None reported"}</p>
        <p><strong>Allergies:</strong> {appointmentData.allergies || "Not specified"}</p>
        <p><strong>Current Medications:</strong> {appointmentData.currentMedications || "Not specified"}</p>
        <p><strong>Past Surgeries:</strong> {appointmentData.pastSurgeries || "Not specified"}</p>
      </section>

      <section>
        <h3>🆘 Emergency Contact</h3>
        <p><strong>Name:</strong> {appointmentData.emergencyContactName || "Not provided"}</p>
        <p><strong>Phone:</strong> {appointmentData.emergencyContactNumber || "Not provided"}</p>
      </section>

      <section>
        <h3>💳 Insurance Details</h3>
        <p><strong>Provider:</strong> {appointmentData.insuranceProvider || "Not provided"}</p>
        <p><strong>Policy Number:</strong> {appointmentData.policyNumber || "Not provided"}</p>
        <p><strong>Card Holder Name:</strong> {appointmentData.cardHolderName || "Not provided"}</p>
        <p><strong>Insurance Card:</strong> {appointmentData.insuranceCard ? "Uploaded" : "Not uploaded"}</p>
      </section>

      <section>
        <h3>💰 Payment & Consent</h3>
        <p><strong>Payment Method:</strong> {appointmentData.paymentMethod || "Not specified"}</p>
        <p><strong>Terms Accepted:</strong> {appointmentData.termsAccepted ? "✅ Yes" : "❌ No"}</p>
        <p><strong>Consent to Share Info:</strong> {appointmentData.consentToShare ? "✅ Yes" : "❌ No"}</p>
      </section>
    </div>
  );
};

export default AppointmentHistory;
