import React, { useState, useRef } from "react";
import "./Otp.css";
import image from "../image2.png";
import { Link } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputsRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!isNaN(value) && value !== " ") {
      setOtp([...otp.slice(0, index), value, ...otp.slice(index + 1)]);
      if (index < 4 && value !== "") {
        inputsRef[index + 1].current.focus();
      }
    } else {
      event.target.value = "";
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace") {
      event.preventDefault(); // prevent default backspace behavior of browser
      if (index > 0) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        inputsRef[index - 1].current.focus();
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  return (
    <div>
      <div className="container-otp">
        <div className="wrapper-otp">
          <h2>Enter the Verification Code</h2>
          <h2>to continue</h2>
          <br />
          <p>We have sent the Details to the xyz@gmail.com</p>
          <p>If you dont see it, check your spam</p>
          <br />
          <div className="otp-bx">
            {otp.map((digit, index) => (
              <input
                className="bx"
                key={index}
                type="text"
                maxLength={1}
                ref={inputsRef[index]}
                value={digit}
                onChange={(event) => handleChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
              />
            ))}
          </div>
          <Link to="/success">
          <button type="submit" className="btn">
            SUBMIT
          </button>
          </Link>
          <a href="/" className="go-back">
            &larr; Go Back
          </a>
        </div>
      </div>
      <div className="container-3">
        <div className="side-container-3">
          <h2 className="heading-3">Welcome To Our Website</h2>
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
    </div>
  );
};

export default Otp;
