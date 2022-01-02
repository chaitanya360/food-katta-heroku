import React from "react";
import { Link } from "react-router-dom";
import { FormStyle } from "./pages.style";

function Register(props) {
  const handleRegister = () => {
    alert("register success");
  };
  return (
    <FormStyle onSubmit={handleRegister}>
      <div className="title">User Registration</div>
      <div className="field">
        <span className="label-wrapper">
          <label>User Name :</label>
        </span>
        <span>
          <input placeholder="User Name" />
          <span className="error-msg">Invalid value</span>
        </span>
      </div>
      <div className="field">
        <span className="label-wrapper">
          <label>Email :</label>
        </span>
        <span>
          <input placeholder="Email" />
          <span className="error-msg">Invalid value</span>
        </span>
      </div>

      <div className="field">
        <span className="label-wrapper">
          <label>Password :</label>
        </span>
        <span>
          <input placeholder="Password" />
          <span className="error-msg">Invalid value</span>
        </span>
      </div>
      <div className="field">
        <span className="label-wrapper">
          <label>Re-enter Your Password :</label>
        </span>
        <span>
          <input placeholder="Password" />
          <span className="error-msg">Invalid value</span>
        </span>
      </div>
      <div className="field">
        <span className="label-wrapper">
          <label>Mobile :</label>
        </span>
        <span>
          <input placeholder="Mobile" />
          <span className="error-msg">Invalid value</span>
        </span>
      </div>
      <div className="submit-wrapper">
        <button type="submit" className="submit-btn">
          Register
        </button>
      </div>
      <div className="alternative">
        Already Have An Account ?<Link to="/login">login</Link>
      </div>
    </FormStyle>
  );
}

export default Register;
