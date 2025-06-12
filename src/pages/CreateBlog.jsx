// src/pages/CreateBlog.jsx
import React, { useState } from 'react';
import '../styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const CreateBlog = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMsg('You must be logged in.');
      return;
    }

    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.role !== 'creator') {
      setErrorMsg('Access denied: Only creators can create blogs.');
      return;
    }

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://blogbackend-lghb.onrender.com/api/blogs', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMsg(data.msg || 'Blog creation failed.');
        return;
      }

      setShowModal(true);
      setErrorMsg('');
      e.target.reset();
    } catch {
      setErrorMsg('Something went wrong. Try again.');
    }
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="auth-container">
      <div className="auth-box wide-auth-box neon-border teal-gold">
        <h3 className="text-center text-white mb-4">Create Blog</h3>
        {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Title</label>
              <input type="text" name="title" className="form-control neon-input" required />
            </div>
            <div className="col-md-6 mb-3">
              <label>Category</label>
              <input type="text" name="category" className="form-control neon-input" required />
            </div>
            <div className="col-md-12 mb-3">
              <label>Tags (comma separated)</label>
              <input type="text" name="tags" className="form-control neon-input" />
            </div>
            <div className="col-md-12 mb-3">
              <label>Upload Image</label>
              <input type="file" name="image" className="form-control neon-input" required />
            </div>
            <div className="col-md-12 mb-4">
              <label>Content</label>
              <textarea name="content" rows="5" className="form-control neon-input" required></textarea>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="neon-button">Submit</button>
            <button type="reset" className="neon-button">Reset</button>
          </div>
        </form>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Submission Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your blog has been submitted successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateBlog;
