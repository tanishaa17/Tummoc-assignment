import React, { useState } from "react";
import '../Register/Register.css'

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = () => {
    if (password !== confirmPassword) {
      alert(`Password doesn't match`)
    } else {
      const userData = {
        name,
        email,
        password
      }
      console.log(userData);
    }
  }
  return (
    <form id="registerForm">
      <h2>Register Page</h2>
      <div>
        <label >
          Full Name:
        </label>
        <input type="text" placeholder="Enter Name" required value={name} onChange={(e) => { setName(e.target.value) }} />
      </div>

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
          Confirm password:
        </label>
        <input type="password" placeholder="Confirm password" required value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
      </div >

      <div >
        <label>
          <input type="checkbox" />
          <span >
            Remember me
          </span>
        </label>
      </div>
      <div>
        <button type="button" onClick={register}>
          REGISTER
        </button>
      </div>
    </form >
  )
};
