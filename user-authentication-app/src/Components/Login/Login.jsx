import React, { useState } from "react";
import '../Login/Login.css'
import { Link } from "react-router-dom";
export const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form id="loginForm">
      <h2 >Login Page</h2>

      <input type="email" placeholder="Enter email" required value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br />

      <input type="password" placeholder="Password" required value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br />

      <button id="loginBtn" type="button">
        LOGIN
      </button>
      <p>if you don't have an account, please <Link id="registerLink" to='/register'>Register</Link></p>
    </form>
    
  )
};