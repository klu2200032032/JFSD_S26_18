import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css'; // Assuming you want to add some CSS for styling

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add authentication logic here (e.g., API call)
    if (username && password) {
      // Simulate a successful login
      navigate('/admin');
    } else {
      alert('Please enter your username and password.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-box">
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button type="submit" className="admin-login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
