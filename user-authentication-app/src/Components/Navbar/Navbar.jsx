import React from 'react'
import "../Navbar/Navbar.css"
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div id='navbar'>
            <img onClick={() => navigate('/')} src="https://tummoc.com/images/news/financialexpress-tummoc.png" alt="tummoc-logo" />

            <div id='loginDiv'>
                <p onClick={() => navigate('/register')}>Register</p>
                <p onClick={() => navigate('/login')}>Login</p>
            </div>
        </div>
    )
}
