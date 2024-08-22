import React, { useState } from 'react';
import './dropdown.css'; // Import the CSS file

function Dropdown() {
  const [selectedRole, setSelectedRole] = useState('Student');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedRole} <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleRoleChange('Student')}>Student</li>
          <li onClick={() => handleRoleChange('Professor')}>Professor</li>
          <li onClick={() => handleRoleChange('Employee')}>Employee</li>
          <li onClick={() => handleRoleChange('Others')}>Others</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
