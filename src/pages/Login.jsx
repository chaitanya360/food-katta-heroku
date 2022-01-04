import React, { useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";
import { FormStyle } from "./pages.style";

function Login(props) {
  // input states
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // errors states
  const [usernameError, setUsernameError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    let errorCount = 0;

    // if not validated means has error
    if (!validateUsername()) errorCount++;
    if (!validatePassword()) errorCount++;

    if (errorCount > 0) return;
    alert(userName + "" + password);
  };

  useEffect(() => {
    if (userName.length !== 0) setUsernameError([]);
  }, [userName]);

  useEffect(() => {
    if (password.length !== 0) setPasswordError([]);
  }, [password]);

  const validateUsername = () => {
    if (usernameError.length !== 0) return false;
    if (userName.length === 0) {
      setUsernameError((errors) => [...errors, "Enter Username"]);
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (passwordError.length !== 0) return false;
    if (password.length == 0) {
      setPasswordError((errors) => [...errors, "Enter Password"]);
      return false;
    }
    if (password.length < 5) {
      setPasswordError((errors) => [...errors, "Password is not valid"]);
      return false;
    }
    return true;
  };

  return (
    <FormStyle onSubmit={handleLogin}>
      <div className="title">User Login</div>
      <div className="field">
        <span className="label-wrapper">
          <label>User Name :</label>
        </span>
        <span>
          <input
            placeholder="User Name"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onBlur={() => validateUsername()}
          />
          {usernameError.map((error) => (
            <span className="error-msg">{error}</span>
          ))}
        </span>
      </div>
      <div className="field">
        <span className="label-wrapper">
          <label>Password :</label>
        </span>
        <span>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => validatePassword()}
          />
          {passwordError.map((error) => (
            <span className="error-msg">{error}</span>
          ))}
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
