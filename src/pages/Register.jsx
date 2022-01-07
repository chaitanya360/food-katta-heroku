import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FormStyle } from "./pages.style";

function Register(props) {
  // input states
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [number, setnumber] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");

  // errors states
  const [usernameError, setUsernameError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);
  const [numberError, setNumberError] = useState([]);
  const [rePasswordError, setRePasswordError] = useState([]);
  const [emailError, setEmailError] = useState([]);

  const handleRegister = (e) => {
    e.preventDefault();
    let errorCount = 0;

    // if not validated means has error
    if (!validateUsername()) errorCount++;
    if (!validatePassword()) errorCount++;
    if (!validateRePassword()) errorCount++;
    if (!validateNumber()) errorCount++;
    if (!validateEmail()) errorCount++;

    if (errorCount > 0) return;
    alert(userName + "" + password);
  };

  useEffect(() => {
    if (userName.length !== 0) setUsernameError([]);
  }, [userName]);

  useEffect(() => {
    if (password.length !== 0) setPasswordError([]);
  }, [password]);

  useEffect(() => {
    if (rePassword.length !== 0) setRePasswordError([]);
  }, [rePassword]);

  useEffect(() => {
    if (number.length !== 0) setNumberError([]);
  }, [number]);

  useEffect(() => {
    if (email.length !== 0) setEmailError([]);
  }, [email]);

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

  const validateRePassword = () => {
    if (rePasswordError.length !== 0) return false;
    if (rePassword.length == 0) {
      setRePasswordError((errors) => [...errors, "Enter Your password again"]);
      return false;
    }
    if (rePassword !== password) {
      setRePasswordError((errors) => [...errors, "Passwords do not match"]);
      return false;
    }
    return true;
  };

  const validateNumber = () => {
    if (numberError.length !== 0) return false;
    if (number.length === 0) {
      setNumberError((errors) => [...errors, "Enter Your Mobile Number"]);
      return false;
    }
    if (number.length !== 10) {
      setNumberError((errors) => [...errors, "Enter 10 digit Number"]);
      return false;
    }
    return true;
  };

  const validateEmail = () => {
    if (emailError.length !== 0) return false;
    if (email.length === 0) {
      setEmailError((errors) => [...errors, "Enter Your Email Address"]);
      return false;
    }

    return true;
  };

  return (
    <FormStyle onSubmit={handleRegister}>
      <div>
        <div className="logo">FoodKatta</div>
        <div className="form-container">
          <div className="fields-wrapper">
            <div className="title">Create your account?</div>
            <div className="sub-title">
              Create an account to explore your favourite food.
            </div>
            <div className="field">
              <span>
                <img src={`${process.env.PUBLIC_URL}/images/icons/user.svg`} />
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
              <span>
                <img src={`${process.env.PUBLIC_URL}/images/icons/mail.svg`} />
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => validateEmail()}
                />
                {emailError.map((error) => (
                  <span className="error-msg">{error}</span>
                ))}
              </span>
            </div>

            <div className="field">
              <span>
                <img src={`${process.env.PUBLIC_URL}/images/icons/key.svg`} />
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
            <div className="field">
              <span>
                <img src={`${process.env.PUBLIC_URL}/images/icons/key.svg`} />
                <input
                  placeholder="Password"
                  type="password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  onBlur={() => validateRePassword()}
                />
                {rePasswordError.map((error) => (
                  <span className="error-msg">{error}</span>
                ))}
              </span>
            </div>
            <div className="field">
              <span>
                <img src={`${process.env.PUBLIC_URL}/images/icons/phone.svg`} />
                <input
                  placeholder="Mobile Number"
                  type="text"
                  value={number}
                  onChange={(e) => setnumber(e.target.value)}
                  onBlur={() => validateNumber()}
                />
                {numberError.map((error) => (
                  <span className="error-msg">{error}</span>
                ))}
              </span>
            </div>
            <div className="tnc">
              <input type="checkbox" />
              <span>I agree to the terms & conditions</span>
            </div>
            <div className="submit-wrapper">
              <button type="submit" className="submit-btn">
                Register
              </button>
            </div>
          </div>
        </div>
        <div className="alternative">
          Already Have An Account ?<Link to="/login">Sign in</Link>
        </div>
        <div className="alternative">
          Are You a Seller ?<Link to="/seller-register">Register here</Link>
        </div>
      </div>
    </FormStyle>
  );
}

export default Register;
