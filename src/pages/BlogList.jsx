// src/pages/BlogList.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const allBlogs = [
  {
    id: 1,
    title: 'Vacation Rental Safety: How to Ensure a Secure Stay',
    date: 'Tue Sept 19 2023',
    image: '/blog1.png',
    excerpt: 'Explore top safety tips to ensure your vacation rental is secure and worry-free.',
  },
  {
    id: 2,
    title: 'How to Build a Positive Relationship with Tenants',
    date: 'Mon Sept 18 2023',
    image: '/blog2.png',
    excerpt: 'Happy tenants mean fewer vacancies. Learn how to build rapport and trust.',
  },
  {
    id: 3,
    title: 'Ideal Colour Palette for Everyday Interiors',
    date: 'Sun Sept 17 2023',
    image: '/blog3.png',
    excerpt: 'From warm neutrals to fresh greens, here’s what interior designers recommend.',
  },
  {
    id: 4,
    title: 'Unlocking Doors: Internship Opportunities at To-Let',
    date: 'Sat Sept 16 2023',
    image: '/blog4.png',
    excerpt: 'Take a look into our internships that offer real-world housing market experience.',
  },
  {
    id: 5,
    title: 'Life at To-Let Globe: Our Culture, Stories & Smiles',
    date: 'Fri Sept 15 2023',
    image: '/blog5.png',
    excerpt: 'Get a sneak peek into life behind the scenes with the To-Let Globe team.',
  },
  {
    id: 6,
    title: 'Big Moves: Brands We’ve Partnered With This Year',
    date: 'Thu Sept 14 2023',
    image: '/blog6.png',
    excerpt: 'See the companies that joined hands with us to change the rental space.',
  },
  {
    id: 7,
    title: 'Faces of the Brand: Meet the People Behind To-Let',
    date: 'Wed Sept 13 2023',
    image: '/blog7.png',
    excerpt: 'From founders to interns, meet the team that brings rental dreams to life.',
  },
  {
    id: 8,
    title: 'Smart Property Listings: What’s New in 2024',
    date: 'Tue Sept 12 2023',
    image: '/blog8.png',
    excerpt: 'Learn what features make a listing smarter and more effective this year.',
  },
  {
    id: 9,
    title: 'Your Go-To Rental Checklist: Don’t Miss This!',
    date: 'Mon Sept 11 2023',
    image: '/blog9.png',
    excerpt: 'This checklist ensures you don’t forget anything before moving in.',
  },
];

const BlogList = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 3;

  const filteredBlogs =
    activeTab === 'trending'
      ? allBlogs.slice(0, 9)
      : allBlogs.slice(3, 9); // blogs 4–9 for "latest"

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const displayedBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  const handleTab = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div className="blog-page container py-5 text-white">
      <h2 className="text-center mb-2">Rental Tips & Blog</h2>
      <p className="text-center mb-4" style={{ color: 'white' }}>
        Helpful articles for landlords and tenants
      </p>

      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn btn-sm mx-2 ${activeTab === 'trending' ? 'btn-info text-dark' : 'btn-outline-info'}`}
          onClick={() => handleTab('trending')}
        >
          Trending
        </button>
        <button
          className={`btn btn-sm ${activeTab === 'latest' ? 'btn-info text-dark' : 'btn-outline-info'}`}
          onClick={() => handleTab('latest')}
        >
          Latest
        </button>
      </div>

      <div className="row">
        {displayedBlogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card bg-dark text-light border-info h-100">
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <p className="text-info mb-1">{blog.date}</p>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.excerpt}</p>
                <Link to={`/blog/${blog.id}`} className="text-info fw-bold">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-3">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`btn btn-sm mx-1 ${currentPage === index + 1 ? 'btn-info text-dark' : 'btn-outline-info'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
