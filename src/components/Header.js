import { useState } from "react";
import { Link } from "react-router-dom";

export const Title = () => (
    <a href="/">
        <img className="logo" alt="logo" src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"></img>
    </a>
)


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    {/* It doesn't reload, this is client side routing*/}
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/about"> About </Link></li>
                    <li><Link to="/contact"> Contact</Link></li>
                    <li>Cart</li>
                </ul>
            </div>
            {!isLoggedIn ? <button onClick={() => setIsLoggedIn(true)}>Login</button> : <button onClick={() => setIsLoggedIn(false)}>Logout</button>}
        </div>
    )
}

export default Header