import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    const [menuVisible, setMenuVisible] = useState(false);

    const slidingMenu = () => {
        let menu = document.querySelector('.slidingMenu');
        if (menuVisible === false) {
            menu.style.transform = `translatex(-250px)`;
            setMenuVisible(true);
        }
        else {
            menu.style.transform = `translatex(250px)`;
            setMenuVisible(false);
        }
    }

    return (
        <nav className="navbar navbar-expand-lg stickyNav primary-font custom-navbar" data-bs-theme="dark">
            <div className="container-fluid custom-Fluid">
                <Link className="navbar-brand custom-Brand primary-font" to="/" style={{ textShadow: "3px 3px 2px black", fontSize: "25px"}}>TimbercRAFT</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item hoverNavbar">
                            <Link className="nav-link custom-Link" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item hoverNavbar">
                            <Link className="nav-link custom-Link" to="/about">About</Link>
                        </li>
                        <li className="nav-item hoverNavbar">
                            <Link className="nav-link custom-Link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item hoverNavbar">
                            <Link className="nav-link custom-Link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-100 d-flex justify-content-end' style={{ position: "absolute", padding: "0px 10px" }}>
                <button className="navbar-toggler" type="button" onClick={slidingMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='slidingMenu text-center' style={{backgroundColor: "rgb(166 90 90)"}}>
                    <Link className="navbar-brand custom-Brand primary-font d-block m-0 py-2" to="/" style={{ textShadow: "3px 3px 2px black", fontSize: "25px"}}>TimbercRAFT</Link>
                    {/* <hr class="border border-secondary border-1 opacity-100 m-0"/> */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item hoverNavbar">
                            <Link className="nav-link custom-Link" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item hoverNavbar">
                            <Link className="nav-link custom-Link" to="/about">About</Link>
                        </li>
                        <li className="nav-item hoverNavbar">
                            <Link className="nav-link custom-Link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item hoverNavbar">
                            <Link className="nav-link custom-Link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Nav