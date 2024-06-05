import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import user_icon from "../components/LoginSignup/assets-login/person.png";
import email_icon from "../components/LoginSignup/assets-login/email.png";
import password_icon from "../components/LoginSignup/assets-login/password.png";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      console.log(fullName, email, password);
      const result = await axios.post(
        "http://localhost:4000/api/v1/users/register",
        { fullName, email, password }
      );
      console.log(result);
      if (result.data === "User already exists") {
        alert("E-mail already registered! Please Login to proceed.");
        navigate("/");
      } else {
        alert("Registered successfully!");
        window.location.href = "/home";
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log("Full Name:", fullName, "Email", email);

  return (
    <>
      <div className="log">
        <div className="container">
          <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
          </div>
          <form onSubmit={handleSignUp}>
            <div className="inputs">
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="input">
                <img src={email_icon} alt="" />
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@ex.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input">
                <img src={password_icon} alt="" />
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="submit-container">
              <button className="submit gray">SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="signin">
        <Link to={"/login"}>
                <span>Sign In to acces the courses!</span>
              </Link>
      </div>
      </div>
      
    </>
  );
};

export default Signup;
