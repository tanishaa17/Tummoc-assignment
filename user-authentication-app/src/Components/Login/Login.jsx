import React, { useState } from "react";
import '../Login/Login.css'
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form id="loginForm">
      <h2 >Login Page</h2>

      <div>
        <label>
          Email:
        </label>
        <input type="email" placeholder="Enter email" required value={email} onChange={(e) => { setEmail(e.target.value) }} />
      </div>
      <div >
        <label >
          Password:
        </label>
        <input type="password" placeholder="Password" required value={password} onChange={(e) => { setPassword(e.target.value) }} />
      </div>

      <div>
        <label>
          <input type="checkbox" />
          <span >
            Remember me
          </span>
        </label>
      </div>

      <div>
        <button type="button">
          LOGIN
        </button>
      </div>
    </form>
  )
};