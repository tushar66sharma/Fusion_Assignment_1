// src/components/DesignationDropdown.js
import React, { useState } from 'react';

const DesignationDropdown = ({ roles, onChange }) => {
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const handleChange = (event) => {
    const newRole = event.target.value;
    setSelectedRole(newRole);
    onChange(newRole);
  };

  return (
    <select value={selectedRole} onChange={handleChange} className="designation-dropdown">
      {roles.map(role => (
        <option key={role} value={role}>{role}</option>
      ))}
    </select>
  );
};

export default DesignationDropdown;
