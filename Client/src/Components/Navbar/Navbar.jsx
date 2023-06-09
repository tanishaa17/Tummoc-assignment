import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../Redux/Actions/action'

export const Navbar = () => {
    const { isAuthenticated, currentUser } = useSelector((store) => store.loginReducer);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState({});
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(userLogout());
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user")) || {};
        setCurrentLoggedInUser(user)
        if (token) setIsUserLoggedIn(true);
        else setIsUserLoggedIn(false);
    }, [isAuthenticated, currentUser]);

    return (
        <div id='navbar'>
            <img onClick={() => navigate('/')} src="https://tummoc.com/images/news/financialexpress-tummoc.png" alt="tummoc-logo" />

            <div id='loginDiv'>
                {isUserLoggedIn ? (
                    <>
                        <p>{currentLoggedInUser.name}</p>
                        <p onClick={handleLogout}>Logout</p>
                    </>
                ) : (
                    <>
                        <p onClick={() => navigate('/login')}>Login</p>
                        <p onClick={() => navigate('/register')}>Register</p>
                    </>
                )}

            </div>
        </div>
    )
}
