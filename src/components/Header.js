import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";


export const Title = () => (
    <a href="/">
        <img className="h-24 p-2" alt="logo" src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"></img>
    </a>
)


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState();
    const online = useOnline();
    return (
        <div className="flex justify-between bg-pink-50 shadow-xl sm:bg-blue-300">
            {/* It means sm , it changes the ui when it crosses small media */}
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    {/* It doesn't reload, this is client side routing*/}
                    <li className="px-2"><Link to="/"> Home </Link></li>
                    <li className="px-2"><Link to="/about"> About </Link></li>
                    <li className="px-2"><Link to="/contact"> Contact</Link></li>
                    <li className="px-2"><Link to="/instamart"> Instamart</Link></li>
                    <li className="px-2">Cart</li>
                </ul>
            </div>
            {/* <h1>{online?'login':'logout'}</h1> */}
            {!isLoggedIn ? <button className="mx-2" onClick={() => setIsLoggedIn(true)}>Login</button> : <button onClick={() => setIsLoggedIn(false)}>Logout</button>}
        </div>
    )
}

export default Header