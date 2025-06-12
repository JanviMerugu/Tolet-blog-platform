import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import '../styles/main.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post('https://blogbackend-lghb.onrender.com/api/auth/login', { email, password });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Login failed. Please try again.');
      }
    } catch (err) {
      alert(err?.response?.data?.msg || 'Server error during login.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box neon-border cyan-yellow">
        <h3 className="text-center text-white mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group mb-3 input-icon">
            <label>Email</label>
            <FaEnvelope className="icon" />
            <input type="email" name="email" className="form-control neon-input" required />
          </div>
          <div className="form-group mb-4 input-icon">
            <label>Password</label>
            <FaLock className="icon" />
            <input type="password" name="password" className="form-control neon-input" required minLength="6" />
          </div>
          <button type="submit" className="neon-button" disabled={loading}>
            {loading ? 'Logging in...' : 'LOGIN'}
          </button>
        </form>
        <div className="text-center mt-3 small-links">
          <Link to="/forgot-password">Forgot Password ?</Link> | <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
