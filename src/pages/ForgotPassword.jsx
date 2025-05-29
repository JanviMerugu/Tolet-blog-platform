// src/pages/ForgotPassword.jsx
import React from 'react';
import '../styles/main.css';

const ForgotPassword = () => {
  const handleReset = (e) => {
    e.preventDefault();
    alert('Reset link sent to your email.');
  };

  return (
    <div className="auth-container">
      <div className="auth-box neon-border teal-gold">
        <h3 className="text-center mb-4 text-white">FORGOT PASSWORD</h3>
        <form onSubmit={handleReset}>
          <div className="form-group mb-4">
            <label>Email</label>
            <input type="email" className="form-control neon-input" required />
          </div>
          <button type="submit" className="neon-button">SEND RESET LINK</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
