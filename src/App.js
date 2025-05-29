import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import CreateBlog from './pages/CreateBlog';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
