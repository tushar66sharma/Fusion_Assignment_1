// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import DesignationDropdown from './DesignationDropdown';
import './Navbar.css'; // Add your CSS styling

const Navbar = ({ roles, selectedRole, onRoleChange }) => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-brand">Fusion Software</Link>
      <DesignationDropdown roles={roles} selectedRole={selectedRole} onChange={onRoleChange} />
    </div>
  );
};

export default Navbar;
