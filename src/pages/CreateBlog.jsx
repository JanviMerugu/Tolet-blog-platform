// src/pages/CreateBlog.jsx
import React, { useState } from 'react';
import '../styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const CreateBlog = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="auth-container">
      <div className="auth-box wide-auth-box neon-border teal-gold">
        <h3 className="text-center text-white mb-4">Create Blog</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Name</label>
              <input type="text" className="form-control neon-input" placeholder="Enter your name" />
            </div>
            <div className="col-md-6 mb-3">
              <label>Role</label>
              <input type="text" className="form-control neon-input" placeholder="Content Creator" />
            </div>
            <div className="col-md-6 mb-3">
              <label>Title</label>
              <input type="text" className="form-control neon-input" placeholder="Title goes here" />
            </div>
            <div className="col-md-6 mb-3">
              <label>Category</label>
              <input type="text" className="form-control neon-input" placeholder="News & Events" />
            </div>
            <div className="col-md-12 mb-3">
              <label>Intro</label>
              <input type="text" className="form-control neon-input" placeholder="Short Introduction" />
            </div>
            <div className="col-md-12 mb-3">
              <label>Upload Image</label>
              <input type="file" className="form-control neon-input" />
            </div>
            <div className="col-md-12 mb-4">
              <label>Content</label>
              <textarea rows="5" className="form-control neon-input" placeholder="Write your content..."></textarea>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="neon-button">Submit</button>
            <button type="reset" className="neon-button">Reset</button>
          </div>
        </form>
      </div>

      {/* ✅ Bootstrap Success Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Submission Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your blog details have been submitted successfully!</Modal.Body>
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
