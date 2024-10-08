import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentPage.css'; // Assuming you have some CSS for styling

const StudentPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear tokens, user data, etc.)
    // Example: localStorage.removeItem('token');
    // Redirect to login page after logout
    navigate('/login'); // Adjust the path based on your routing
  };

  return (
    <div className="student-container">
      <nav className="student-navbar">
        <h2>Student Dashboard</h2>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </nav>
      <div className="student-operations">
        <button onClick={() => navigate('/student/registration')} className="student-button">Registration</button>
        <button onClick={() => navigate('/student/marks')} className="student-button">Marks</button>
        <button onClick={() => navigate('/student/materials')} className="student-button">Materials</button>
        <button onClick={() => navigate('/student/attendance')} className="student-button">Attendance</button>
      </div>
    </div>
  );
};

export default StudentPage;
