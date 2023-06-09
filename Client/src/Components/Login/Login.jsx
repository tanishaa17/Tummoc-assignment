import React, { useEffect, useState } from "react";
import '../Login/Login.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginToken, userLogin } from "../Redux/Actions/action";
import { FcGoogle } from "react-icons/fc"
import { GoogleLogin } from 'react-google-login';


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((store) => store.loginReducer);


  const handleLogin = () => {
    const loginCreds = {
      email, password
    }
    // console.log(loginCreds);
    userLogin(loginCreds).then((res) => {
      dispatch(handleLoginToken(res));
      navigate("/")
    })
      .catch((err) => {
        console.log(err);
      })
  }


  // useEffect(() => {
  //   const token = localStorage.getItem("token") || [];
  //   if (isAuthenticated) {
  //     dispatch(userLogin({ token }));
  //   } else {
  //     localStorage.setItem("token", token);
  //   }
  // }, []);

  return (
    <form id="loginForm" onSubmit={(e) => e.preventDefault()}>
      <h2 >Login Page</h2>

      <input type="email" placeholder="Enter email" required value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br />

      <input type="password" placeholder="Password" required value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br />

      <button id="loginBtn" type="submit" onClick={handleLogin}>
        LOGIN
      </button> <br />
      or <br />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        Sign in with

        <FcGoogle style={{ marginLeft: "5px", cursor: "pointer" }} />
      </div>
      <p>Don't have an account? <Link id="registerLink" to='/register'>Create Account</Link></p>
    </form>

  )
};