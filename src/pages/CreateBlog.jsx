// src/pages/CreateBlog.jsx
import React, { useEffect, useState } from 'react';
import '../styles/main.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateBlog = () => {
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'creator') {
      setShowForm(true);
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
    alert('Blog submitted successfully!');
  };

  return (
    <div className="auth-container">
      {showForm && (
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
              <input type="file" className="form-control neon-input" required />
            </div>
            <div className="form-group mb-4">
              <label>Content</label>
              <textarea rows="4" className="form-control neon-input" required></textarea>
            </div>
            <button type="submit" className="neon-button">Submit</button>
          </form>
        </div>
      )}

      {/* 🔒 Access Denied Modal */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white">
              <div className="modal-header">
                <h5 className="modal-title">Access Denied</h5>
              </div>
              <div className="modal-body">
                <p>You must be logged in as a content creator to add a blog.</p>
              </div>
              <div className="modal-footer">
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
