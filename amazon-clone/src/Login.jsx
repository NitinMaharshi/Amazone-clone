import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();

    //do the login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in, redirect to homepage
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and logged in, redirect to homepage
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
          />
        </Link>

        <div className="login_container">
          <h1>Sign in</h1>
          <form action="">
            <h5>E-mail</h5>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="text"
            />
            <h5>Password</h5>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="text"
            />
            <button onClick={login} type="submit" className="login_signinbtn">
              Sign IN
            </button>
          </form>
          <p>
            By signing-in you agree to AmaZon's Conditions of Use & Sale. Please
            see your Privacy Notice, our Cookies Notice and our intrest-Based
            Ads Notice
          </p>
          <button onClick={register} className="login_regbtn">
            Create your Amazone Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
