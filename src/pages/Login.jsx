import React from "react";
import { Link } from "react-router-dom";
import { FormStyle } from "./pages.style";

function Login(props) {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("form submitted");
  };

  return (
    <FormStyle onSubmit={handleLogin}>
      <div className="title">User Login</div>
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
          <label>Password :</label>
        </span>
        <span>
          <input placeholder="Password" />
          <span className="error-msg">Invalid value</span>
        </span>
      </div>
      <div className="submit-wrapper">
        <button type="submit" className="submit-btn">
          Log In
        </button>
      </div>
      <div className="alternative">
        Don't Have An Account ?<Link to="/register">register</Link>
      </div>
    </FormStyle>
  );
}

export default Login;
