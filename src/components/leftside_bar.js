import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation
import "./leftside_bar.css"; // Import CSS for styling

const Leftsidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <div className="profile-icon">👤</div>
        <h2>Name</h2>
      </div>
      <div className="button-group">
        <Link to="/page1" className="sidebar-button">Button 1</Link>
        <Link to="/page2" className="sidebar-button">Button 2</Link>
        <Link to="/page3" className="sidebar-button">Button 3</Link>
        <Link to="/page4" className="sidebar-button">Button 4</Link>
        <Link to="/page5" className="sidebar-button">Button 5</Link>
        <Link to="/page6" className="sidebar-button">Button 6</Link>
        <Link to="/page7" className="sidebar-button">Button 7</Link>
      </div>
    </div>
  );
};

export default Leftsidebar;
