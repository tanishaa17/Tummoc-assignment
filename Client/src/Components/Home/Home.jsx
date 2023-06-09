import React, { useEffect, useState } from 'react'
import "../Home/Home.css"
export const Home = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState({});
    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user")) || {};
        setCurrentLoggedInUser(user)
        if (token) setIsUserLoggedIn(true);
        else setIsUserLoggedIn(false);
    }, []);
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
