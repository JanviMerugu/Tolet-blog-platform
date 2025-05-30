import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const Register = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('general');

  const handleRegister = (e) => {
    e.preventDefault();
    const password = e.target.password.value;

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // ✅ Save role to localStorage
    localStorage.setItem('role', role);

    alert('✅ Registered successfully as ' + role + '! Redirecting to login...');
    navigate('/login'); // ✅ Redirect to login
  };

  return (
    <div className="auth-container">
      <div className="auth-box neon-border cyan-yellow">
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={handleRegister}>
          <div className="form-group mb-3">
            <label>First Name</label>
            <input type="text" className="form-control neon-input" required />
          </div>
          <div className="form-group mb-3">
            <label>Last Name</label>
            <input type="text" className="form-control neon-input" required />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input type="email" className="form-control neon-input" required />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control neon-input"
              placeholder="At least 6 characters"
              required
              minLength="6"
            />
          </div>
          <div className="form-group mb-3">
            <label>Phone Number</label>
            <input type="text" className="form-control neon-input" required />
          </div>

          {/* ✅ Role Selection Radio Buttons */}
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

          <button type="submit" className="neon-button">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
