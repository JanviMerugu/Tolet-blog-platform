import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import '../styles/main.css';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('general');

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    // ✅ Save role in localStorage
    localStorage.setItem('role', role);

    // ✅ Redirect to blog page
    navigate('/blog');
  };

  return (
    <div className="auth-container">
      <div className="auth-box neon-border cyan-yellow">
        <h3 className="text-center text-white mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3 input-icon">
            <label>Email</label>
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email"
              className="form-control neon-input"
              name="email"
              required
            />
          </div>

          <div className="form-group mb-3 input-icon">
            <label>Password</label>
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              className="form-control neon-input"
              name="password"
              required
              minLength="6"
            />
          </div>

          {/* ✅ Radio buttons for role selection */}
          <div className="form-group mb-4">
            <label>Select Role</label><br />
            <div style={{ color: '#ccc', marginTop: '5px' }}>
              <label style={{ marginRight: '20px' }}>
                <input
                  type="radio"
                  name="role"
                  value="general"
                  checked={role === 'general'}
                  onChange={() => setRole('general')}
                  style={{ marginRight: '6px' }}
                />
                General User
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="creator"
                  checked={role === 'creator'}
                  onChange={() => setRole('creator')}
                  style={{ marginRight: '6px' }}
                />
                Content Creator
              </label>
            </div>
          </div>

          <button type="submit" className="neon-button">LOGIN</button>
        </form>

        <div className="text-center mt-3 small-links">
          <a href="/forgot-password">Forgot Password ?</a> | <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
