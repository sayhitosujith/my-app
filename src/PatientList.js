import React from 'react';

const PatientList = ({ patients }) => {
  return (
    <div>
      <h2>Patient List</h2>
      {patients.length === 0 ? (
        <p>No patients added yet.</p>
      ) : (
        <ul>
          {patients.map((patient, index) => (
            <li key={index}>
              <strong>{patient.name}</strong> ({patient.age}, {patient.gender}) - {patient.condition}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientList;
