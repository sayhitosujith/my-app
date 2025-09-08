import React, { useState } from 'react';

const PatientForm = ({ addPatient }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    condition: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addPatient(formData);
    setFormData({ name: '', age: '', gender: '', condition: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Patient</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="age" type="number" value={formData.age} onChange={handleChange} placeholder="Age" required />
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <input name="condition" value={formData.condition} onChange={handleChange} placeholder="Condition" required />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default PatientForm;
