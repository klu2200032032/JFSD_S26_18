import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminPage.css'; // Assuming you have some CSS for styling

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Handle logout logic here (e.g., clear tokens, user data, etc.)
    // For example: localStorage.removeItem('token');
    // Redirect to login page after logout
    navigate('/login'); // Adjust the path based on your routing
  };

  return (
    <div className="admin-container">
      <nav className="admin-navbar">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </nav>
      <div className="admin-operations">
        <button onClick={() => navigate('/admin/add-student')} className="admin-button">Add Student</button>
        <button onClick={() => navigate('/admin/view-students')} className="admin-button">View Students</button>
        <button onClick={() => navigate('/admin/student-issues')} className="admin-button">Student Issues</button>
        <button onClick={() => navigate('/admin/courses')} className="admin-button">Courses</button>
        <button onClick={() => navigate('/admin/fee-payments')} className="admin-button">Fee Payments</button>
      </div>
    </div>
  );
};

export default AdminPage;
