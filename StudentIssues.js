import React, { useState } from 'react';
import './StudentIssues.css'; // Import the CSS file

const StudentIssues = () => {
  const [studentId, setStudentId] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle issue submission logic here
    console.log('Issue reported:', { studentId, problemDescription, contactEmail });
  };

  return (
    <div className="student-issue-container">
      <h2>Report an Issue</h2>
      <form onSubmit={handleSubmit}>
        <label>Student ID:</label>
        <input 
          type="text" 
          value={studentId} 
          onChange={(e) => setStudentId(e.target.value)} 
          required 
        />

        <label>Problem Description:</label>
        <textarea 
          value={problemDescription} 
          onChange={(e) => setProblemDescription(e.target.value)} 
          required 
        />

        <label>Contact Email:</label>
        <input 
          type="email" 
          value={contactEmail} 
          onChange={(e) => setContactEmail(e.target.value)} 
          required 
        />

        <button type="submit">Submit Issue</button>
      </form>
    </div>
  );
};

export default StudentIssues;
