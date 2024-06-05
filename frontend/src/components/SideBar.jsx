import React from 'react'
import { IoCloseSharp, IoLibraryOutline } from "react-icons/io5";
import { FcHome, FcReadingEbook,FcCollaboration,FcInfo } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const SideBar = ({ isActive, setIsActive }) => {

  return (
    <>
        <div className={isActive ? "sidebar active" : "sidebar"}>
            
                <div className="close">
                   <IoCloseSharp onClick={() => setIsActive(false)}/>
                </div>
                <div className="sidebar-nav">
                  <ul>
                    <li>
                      <Link to ={"/home"}>
                        <FcHome />
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link to ={"/course"}>
                        <FcReadingEbook />
                        <span>Courses</span>
                      </Link>
                    </li>
                    <li>
                      <Link to ={"/blog"}>
                      <FcCollaboration />
                        <span>Blog</span>
                      </Link>
                    </li>
                    <li>
                      <Link to ={"/book"}>
                      <IoLibraryOutline />
                        <span>E-Library</span>
                      </Link>
                    </li>
                    <li>
                      <Link to ={"/about"}>
                        <FcInfo/>
                        <span>About</span>
                      </Link>
                    </li>
                    
                  </ul>
                  <div className="social-icons">
                    <FaInstagram />
                    <FaXTwitter />
                    <FaFacebook />
                  </div>
                </div>
        </div>
    </>
  );
};

export default SideBar






