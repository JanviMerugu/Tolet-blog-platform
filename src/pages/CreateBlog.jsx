// src/pages/CreateBlog.jsx
import React, { useEffect, useState } from 'react';
import '../styles/main.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateBlog = () => {
  const [isCreator, setIsCreator] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'creator') {
      setIsCreator(true);
    } else {
      setShowModal(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/login'); // Redirect to login
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Blog submitted successfully!');
    e.target.reset();
  };

  return (
    <div className="auth-container">
      {/* ✅ Creator can see form */}
      {isCreator && (
        <div className="auth-box neon-border teal-gold wide-auth-box">
          <h3 className="text-center mb-4">Create Blog</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Title</label>
              <input type="text" className="form-control neon-input" required />
            </div>
            <div className="form-group mb-3">
              <label>Category</label>
              <input type="text" className="form-control neon-input" required />
            </div>
            <div className="form-group mb-3">
              <label>Intro</label>
              <input type="text" className="form-control neon-input" required />
            </div>
            <div className="form-group mb-3">
              <label>Upload Image</label>
              <input type="file" className="form-control neon-input" accept="image/*" required />
            </div>
            <div className="form-group mb-4">
              <label>Content</label>
              <textarea rows="5" className="form-control neon-input" required></textarea>
            </div>
            <button type="submit" className="neon-button">Submit</button>
          </form>
        </div>
      )}

      {/* ❌ Access denied for general users */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-0">
                <h5 className="modal-title">Access Denied</h5>
              </div>
              <div className="modal-body">
                <p>Only users registered as <strong>content creators</strong> can create a blog.</p>
              </div>
              <div className="modal-footer border-0">
                <button className="btn btn-warning" onClick={handleCloseModal}>
                  Go to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateBlog;
