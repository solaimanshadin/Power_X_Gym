import React from 'react';
import './Footer.css';
import youtube from '../../Images/bxl-youtube.png';
import fb from '../../Images/bxl-facebook.png';
import insta from '../../Images/bxl-instagram.png';
import twitter from '../../Images/bxl-twitter.png';
import whatsapp from '../../Images/bxl-whatsapp.png';

const Footer = () => {
    return (
        <div className="footer-block">
            <div className="row">
                <div className="col-3">
                    <h4>POWER <strong className="text-yellow">X</strong></h4>
                </div>
                <div className="col-2">
                    <a className="font-weight-bold" href='/'>Need Help?</a><br/>
                    <a href='/'>Help Center</a><br/>
                    <a href='/signup'>Email Support</a><br/>
                    <a href='/'>Live Chat</a><br/>
                    <a href='/'>Gift Certificates</a><br/>
                    <a href='/'>Send Us Feedback</a><br/>
                </div>
                <div className="col-2">
                    <a className="font-weight-bold" href='/'>Digital Resources</a><br/>
                    <a href='/'>Articles</a><br/>
                    <a href='/'>E-books</a><br/>
                </div>
                <div className="col-2">
                    <a className="font-weight-bold" href='/'>Contact With Us</a><br/>
                    <a href='/'><img src={youtube} alt=""/></a>
                    <a href='/'><img src={fb} alt=""/></a>
                    <a href='/'><img src={insta} alt=""/></a>
                    <a href='/'><img src={twitter} alt=""/></a>
                    <a href='/'><img src={whatsapp} alt=""/></a><br/>
                    <a href='/'>Forum</a><br/>
                </div>
                <div className="col-2">
                    <a className="font-weight-bold" href='/'>Join Our Newsletter</a><br/>
                    <p>Get exclusive news,features, and updates from The Shredder Weight Loss Academy.</p>
                </div>
            </div>
            <p className="text-center text-secondary"><small>Copyright © 2020 POWER-X</small></p>
        </div> 
    );
};

export default Footer;