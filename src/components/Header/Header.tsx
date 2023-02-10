import { Outlet } from "react-router-dom";
import "./header.css"
import profilePic from "../.././assets/innebandysquare.jpg"
import { FaBars } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const menuClick = () => {
        setOpenMenu(!openMenu)
    }

    return (<>
        <div className="container">
            <header>
                <div className="headerProfileHolder">
                    <img src={profilePic}/>
                    <div className="headerNameHolder">
                        <h4>Hektor</h4>
                        <p>Järfälla IBK - Herrar B</p>
                    </div>
                </div>
                <FaBars className="menuIcon" onClick={() => menuClick()}/>
                {openMenu && 
                    <div className="menuOpen">
                        <h3>Herrar B</h3>
                        <ul>
                            <Link to="/aktiviteter" className="link" onClick={() => menuClick()}><li>Aktiviteter</li></Link>
                            <Link to="/nyhetsflode" className="link" onClick={() => menuClick()}><li>Nyhetsflöde</li></Link>
                            <Link to="/lagmedlemmar" className="link" onClick={() => menuClick()}><li>Lagmedlemmar</li></Link>
                            <Link to="/minprofil" className="link" onClick={() => menuClick()}><li>Min profil</li></Link>
                        </ul>
                    </div>
                }
            </header>
            <Outlet></Outlet>
        </div>
    </>)
}