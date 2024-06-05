import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="wel-container">
        <div className="welcome-a">
          <div className="welcome-img">
          <h1 className="ibm-plex-sans-bold" >WELCOME TO STUDY.IO</h1>
            <img src={require("../assets/wel-img.jpg")} alt="welcome" />
          </div>
          <div className="welcome-txt">

            <p>
            We're thrilled to have you join our vibrant community of learners. At STUDY.IO, we believe that education should be accessible, engaging, and tailored to your needs. That's why we've curated the best content from YouTube to create an unparalleled learning experience just for you.Whether you're here to master a new skill, dive deep into a subject, or simply explore something new, STUDY.IO has got you covered. Our platform brings together top-quality videos, expertly organized and easily accessible, to make your learning journey smooth and enjoyable.<br></br><br></br>Start exploring, and let the world of knowledge unfold before you. Happy learning!
            </p>
          </div>
        </div>
        <div className="welcome-b">
          <div className="sign-up">
            <Link to={"/register"}>
                <span>Sign Up if you're new to the site!</span>
              </Link>
          </div>
          <div className="sign-in">
              <Link to={"/login"}>
                <span>Sign In to acces the courses!</span>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
