import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import userContext from "../utils/userContext";

const About = () => {
    const { user, setUserInfo } = useContext(userContext);
    return (
        <>
            <h1>About {user.name}</h1>
            <Outlet/>
            <p>Finding about path is our goal</p>
        </>
    )
}

export default About
