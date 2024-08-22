import React from "react";
import ProfileCard from "../components/ProfileCard";
import DetailsCard from "../components/details_card";
import SkillsCard from "../components/skills_card";
import CoursesCard from "../components/courses_card";
import Rightsidebar from "../components/rigthsidebar";
import Leftsidebar from "../components/leftside_bar";
import Dropdown from "../components/dropdown";
import "./homepage.css"; // Importing the CSS file for styling


const HomePage = () => {
  return (
    
    <div className="homepage">
      <Leftsidebar/>
      <div className="top-section">
        <Dropdown />
      </div>
      
      <ProfileCard />
      <div className="professional-profile">
        <h2>Professional Profile</h2>
        <hr />
      </div>
      <div className="other-cards">
        <DetailsCard/>
        <SkillsCard/>
        <CoursesCard/>
      </div>
      <Rightsidebar/>
      

      
      
      
    </div>
  );
};

export default HomePage;
