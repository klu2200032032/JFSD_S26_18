import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [facultyName, setFacultyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here for handling the form submission (e.g., sending the data to the backend)
    console.log(`Course ID: ${courseId}, Course Name: ${courseName}, Faculty Name: ${facultyName}`);
  };

  return (
    <div className="registration-container">
      <h1>Course Registration</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <label htmlFor="courseId">Course ID:</label>
        <input
          type="text"
          id="courseId"
          value={courseId}
          onChange={(e) => setCourseId(e.target.value)}
          required
        />

        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />

        <label htmlFor="facultyName">Faculty Name:</label>
        <input
          type="text"
          id="facultyName"
          value={facultyName}
          onChange={(e) => setFacultyName(e.target.value)}
          required
        />

        <button type="submit" className="registration-button">Register</button>
      </form>
    </div>
  );
};

export default Registration;
