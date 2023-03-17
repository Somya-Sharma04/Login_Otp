import React, { useState } from "react";
import "./Login.css";
import image from "../image2.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [popup, setpopup] = useState(false);

  const handleOnClick = () => {
    setpopup(!popup);
  };

  return (
    <>
      <div>
        <header>
          <h2 className="logo">Logo</h2>
          <nav className="navigation">
            <a href="/" >Home</a>
            <a href="/" >About</a>
            <a href="/" >Services</a>
            <a href="/" className="popup">Contact</a>
            <button className="btnLogin-popup" onClick={handleOnClick}>
              Login
            </button>
          </nav>
        </header>
      </div>
      <div className={`container ${popup ? "show" : ""}`}>
        <div className="wrapper">

          <span className="icon-close" onClick={handleOnClick}>
                    <ion-icon name="close-outline"></ion-icon>
          </span>

          <div className="form-box login">
            <h2>Login</h2>
            <form action="/">
              <div className="input-box">
              <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="text" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password"  required />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>
                <a href="/">Forgot Password</a>
              </div>
              <Link to="/otp">
                <button type="submit" className="btn-1">
                  Login
                </button>
              </Link>
              <div className="login-register">
                <p>
                  Don't have an account?
                  <a href="#" className="register-link">
                    {" "}
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className={`container-2 ${popup ? "show" : ""}`}>
        <div className="side-container">
          <h2 className="heading-2">Welcome To Our Website</h2>
          <hr />
          <br />
          <p>We are excite to announce our new website .</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ut
            nisi natus mollitia amet velit ex tempore perferendis tempora
            aliquam alias, error eos iure. Optio?
          </p>
          <img src={image} alt="My Image" className="image-2" />
        </div>
      </div>
    </>
  );
};

export default Login;
