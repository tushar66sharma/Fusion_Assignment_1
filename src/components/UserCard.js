// src/components/UserCard.js
import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.avatar} alt={user.name} className="user-avatar" />
      <h2 className="user-name">{user.name}</h2>
      <p className="user-role">{user.role}</p>
    </div>
  );
};

export default UserCard;
