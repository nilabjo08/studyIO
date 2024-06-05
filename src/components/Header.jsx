import React from "react";
import { IoMenu } from "react-icons/io5";
import { SiStudyverse } from "react-icons/si";
import { useLocation } from 'react-router-dom';

const Header = ({ isActive, setIsActive }) => {

  const location = useLocation();
 // Check if it's the homepage
  const isHomePage = location.pathname === '/home';

  return (
    <div className="header-container">

    <div className={isHomePage ? "home-header" : "header"}>
      <div className="ham-menu">
      <IoMenu onClick={() => setIsActive(prev => !prev)} />
      </div>
      <div className="logo">
          <SiStudyverse />
          <span>study.io</span>
      </div> 
    </div>
    </div>
  );
};

export default Header;
