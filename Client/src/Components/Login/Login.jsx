import React, { useState } from "react";
import '../Login/Login.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../Redux/Actions/action";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  const login = () => {
    const loginCreds = {
      email, password
    }
    // console.log(loginCreds);
    dispatch(userLogin(loginCreds))
  }
  return (
    <form id="loginForm">
      <h2 >Login Page</h2>

      <input type="email" placeholder="Enter email" required value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br />

      <input type="password" placeholder="Password" required value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br />

      <button id="loginBtn" type="button" onClick={login}>
        LOGIN
      </button>
      <p>Don't have an account? <Link id="registerLink" to='/register'>Create Account</Link></p>
    </form>

  )
};