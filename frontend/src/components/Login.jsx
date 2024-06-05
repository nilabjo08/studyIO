import React , { useState } from 'react'

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import email_icon from "../components/LoginSignup/assets-login/email.png";
import password_icon from "../components/LoginSignup/assets-login/password.png";
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
  const handleSignIn = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:4000/api/v1/users/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          console.log("Login Success");
          alert("Login successful!");
          navigate("/home");
        } else {
          alert("Incorrect password! Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
        <div className="log">
        <div className="container">
          <div className="header">
            <div className="text">Sign In</div>
            <div className="underline"></div>
          </div>
          <form onSubmit={handleSignIn}>
            <div className="inputs">

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
        <div className="signup">
    <Link to={"/register"}>
                <span>Sign Up if you're new to the site!</span>
              </Link>    
    </div>
      </div>

      
    
    </>
  )
}

export default Login
