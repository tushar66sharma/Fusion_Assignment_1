import React from "react";
import "./ProfileCard.css";
import porfilecardimage from "../components/assets/profilecradimage.png";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-text">
        <h2>Welcome, Your Name!</h2>
        <div style={{ display: "flex", gap: "300px" }}>
          <span>Roll No:</span>
          <span>B.Tech CSE 2022</span>
        </div>
        <p>Current Sem:</p>
        <button className="edit-profile-btn">Edit Your Profile</button>
      </div>
      <div className="profile-image">
        <img src={porfilecardimage} alt="Illustration" />
      </div>
    </div>
  );
};

export default ProfileCard;
