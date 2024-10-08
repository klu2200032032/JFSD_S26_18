import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ParentPage.css'; // Assuming you have some CSS for styling

const ParentPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear tokens, user data, etc.)
    // Example: localStorage.removeItem('token');
    // Redirect to login page after logout
    navigate('/login'); // Adjust the path based on your routing
  };

  return (
    <div className="parent-container">
      <nav className="parent-navbar">
        <h2>Parent Dashboard</h2>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </nav>
      <div className="parent-operations">
        <button onClick={() => navigate('/parent/child-records')} className="parent-button">Child Records</button>
        <button onClick={() => navigate('/parent/fees')} className="parent-button">Fees</button>
        <button onClick={() => navigate('/parent/attendance')} className="parent-button">Attendance</button>
        <button onClick={() => navigate('/parent/grades')} className="parent-button">Grades</button>
      </div>
    </div>
  );
};

export default ParentPage;
