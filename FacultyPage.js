import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultyPage.css'; // Assuming you have some CSS for styling

const FacultyPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear tokens, user data, etc.)
    // Example: localStorage.removeItem('token');
    // Redirect to login page after logout
    navigate('/login'); // Adjust the path based on your routing
  };

  return (
    <div className="faculty-container">
      <nav className="faculty-navbar">
        <h2>Faculty Dashboard</h2>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </nav>
      <div className="faculty-operations">
        <button onClick={() => navigate('/faculty/view-students')} className="faculty-button">View Students</button>
        <button onClick={() => navigate('/faculty/materials')} className="faculty-button">Materials</button>
        <button onClick={() => navigate('/faculty/attendance')} className="faculty-button">Attendance</button>
        <button onClick={() => navigate('/faculty/grades')} className="faculty-button">Grades</button>
      </div>
    </div>
  );
};

export default FacultyPage;
