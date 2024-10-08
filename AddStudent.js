import React, { useState } from 'react';
import './AddStudent.css';  // Import the CSS file

const AddStudent = () => {
  const [studentId, setStudentId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle adding student logic here
    console.log('Student added:', { studentId, studentName, email, contactNumber, address });
  };

  return (
    <div className="add-student-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Student ID:</label>
        <input 
          type="text" 
          value={studentId} 
          onChange={(e) => setStudentId(e.target.value)} 
          required
        />

        <label>Student Name:</label>
        <input 
          type="text" 
          value={studentName} 
          onChange={(e) => setStudentName(e.target.value)} 
          required
        />

        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />

        <label>Contact Number:</label>
        <input 
          type="tel" 
          value={contactNumber} 
          onChange={(e) => setContactNumber(e.target.value)} 
          required
        />

        <label>Address:</label>
        <input 
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          required
        />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
