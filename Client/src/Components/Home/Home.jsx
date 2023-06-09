import React, { useEffect, useState } from 'react'
import "../Home/Home.css"
import { useSelector } from 'react-redux';
export const Home = () => {
    const { isAuthenticated, currentUser } = useSelector((store) => store.loginReducer);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState({});
    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user")) || {};
        setCurrentLoggedInUser(user)
        if (token) setIsUserLoggedIn(true);
        else setIsUserLoggedIn(false);
    }, [isAuthenticated, currentUser]);
    return (
        <>
            {isUserLoggedIn ? (
                <h1>{`Welcome ${currentLoggedInUser.name}`}</h1>

            ) : (
                <h1>Welcome Home</h1>
            )}
        </>
    )
}
