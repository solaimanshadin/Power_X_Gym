import React from 'react';
import './Navbar.css';
import { useEffect } from 'react';
import { useState } from 'react';
const NavBar = () => {
    const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 20){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  }, []);
    return (
        <nav className={isSticky ? "fade in show navbar navbar-expand-sm fixed-top navbar-dark bg-dark " : "fade out show navbar navbar-expand-sm fixed-top navbar-dark " }>
            <div className="container">
                <a className="navbar-brand" href="/">POWER <strong className="text-yellow">X</strong></a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Service</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="/">Our Classes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact us</a>
                        </li>                 
                    </ul> 
                </div>
            </div>
        </nav>
    );
};
export default NavBar;