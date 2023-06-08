import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import '../Register/Register.css'
import { Link } from "react-router-dom";
import { userRegister } from "../Redux/Actions/action";
import { FcGoogle } from "react-icons/fc"


export const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch()
  const register = () => {

    if (password !== confirmPassword) {
      alert(`Password doesn't match`)
    } else {
      const userData = {
        name,
        email,
        password
      }
      // console.log(userData);
      dispatch(userRegister(userData));
    }
  }
  return (
    <form id="registerForm" onSubmit={(e) => e.preventDefault()}>
      <h2>Register Page</h2>

      <input type="text" placeholder="Enter Name" required value={name} onChange={(e) => { setName(e.target.value) }} /> <br />

      <input type="email" placeholder="Enter email" required value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br />

      <input type="password" placeholder="Password" required value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br />
      <input type="password" placeholder="Confirm password" required value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} /> <br />

      <button id="registerBtn" type="submit" onClick={register}>
        REGISTER
      </button> <br />
      or <br />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        Sign up with

        <FcGoogle style={{ marginLeft: "5px", cursor: "pointer" }} />
      </div>
      <p>Already have an account? <Link id="loginLink" to='/login'>Login</Link></p>
    </form >
  )
};
