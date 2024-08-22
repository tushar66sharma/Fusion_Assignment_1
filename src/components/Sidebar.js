// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Add your CSS styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Fusion Software</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/module1">Module 1</Link></li>
          <li><Link to="/module2">Module 2</Link></li>
          <li><Link to="/module3">Module 3</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
