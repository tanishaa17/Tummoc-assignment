import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from "../Login/Login";
import { Register } from '../Register/Register';
import { Home } from '../Home/Home';
import { Navbar } from '../Navbar/Navbar';
export const AllRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}
