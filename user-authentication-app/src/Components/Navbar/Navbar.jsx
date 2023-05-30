import React from 'react'
import "../Navbar/Navbar.css"

export const Navbar = () => {
    return (
        <div id='navbar'>
            <img src="https://tummoc.com/images/news/financialexpress-tummoc.png" alt="tummoc-logo" />

            <div id='loginDiv'>
                <p>Login</p>
                <p>Register</p>
            </div>
        </div>
    )
}
