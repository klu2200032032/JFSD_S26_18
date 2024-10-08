import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the password change logic.
    alert('Password changed successfully!');
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="new-password">New Password:</label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
