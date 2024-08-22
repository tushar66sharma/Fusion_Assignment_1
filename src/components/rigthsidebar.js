import React from 'react';
import './rightsidebar.css';

const Rightsidebar = () => {
    return (
        <div className="rightsidebar">
            <div className="button-group">
                <button className="btn">Notifications</button>
                <button className="btn">Announcements</button>
            </div>
            <div className="message-box">
                <p>A session by BitByte Club will be organised in CR101</p>
                <span className="close-btn">&times;</span>
            </div>
        </div>
    );
};

export default Rightsidebar;
