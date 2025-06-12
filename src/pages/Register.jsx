import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const role = e.target.role.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }

    if (!role) {
      alert('Please select a role.');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        'https://blogbackend-lghb.onrender.com/api/auth/register',
        {
          username: `${firstName} ${lastName}`,
          email,
          password,
          role,
        }
      );

      if (res.status === 201) {
        alert('Registration successful! Please login.');
        navigate('/login');
      } else {
        alert(res.data.msg || 'Registration successful, please login.');
        navigate('/login');
      }
    } catch (err) {
      alert(err?.response?.data?.msg || 'Server error during registration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box neon-border cyan-yellow">
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={handleRegister}>
          <div className="form-group mb-3">
            <label>First Name</label>
            <input name="firstName" className="form-control neon-input" required />
          </div>
          <div className="form-group mb-3">
            <label>Last Name</label>
            <input name="lastName" className="form-control neon-input" required />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input name="email" type="email" className="form-control neon-input" required />
          </div>
          <div className="form-group mb-3">
            <label>Select Role</label>
            <select name="role" className="form-control neon-input" required>
              <option value="">-- Choose Role --</option>
              <option value="creator">Blog Creator</option>
              <option value="viewer">Blog Viewer</option>
            </select>
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input name="password" type="password" className="form-control neon-input" required minLength="6" />
          </div>
          <div className="form-group mb-4">
            <label>Phone Number</label>
            <input name="phoneNumber" className="form-control neon-input" />
          </div>
          <button type="submit" className="neon-button" disabled={loading}>
            {loading ? 'Registering...' : 'REGISTER'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
