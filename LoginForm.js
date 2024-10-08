import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'Student') {
      navigate('/student');
    } else if (role === 'Faculty') {
      navigate('/faculty');
    } else if (role === 'Parent') {
      navigate('/parent'); // Redirect to Parent dashboard
    } else {
      alert('Please select a valid role.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="role">Select Role:</label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="" disabled>Select Role</option>
              <option value="Student">Student</option>
              <option value="Faculty">Faculty</option>
              <option value="Parent">Parent</option> {/* Added Parent option */}
            </select>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="admin-login-link">
          <p>Admin? <a href="/admin/login">Login here</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
