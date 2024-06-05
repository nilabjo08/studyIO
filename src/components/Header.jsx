import React from "react";
import { IoMenu } from "react-icons/io5";
import { SiStudyverse } from "react-icons/si";


const Header = ({ setIsActive }) => {

  return (
    <div className="header">
      <div className="ham-menu">
      <IoMenu onClick={() => setIsActive(true)} />
      </div>
      <div className="logo">
          <SiStudyverse />
          <span>study.io</span>
      </div> 
    </div>
  );
};

export default Header;
