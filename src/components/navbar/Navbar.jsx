import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { BiHomeHeart } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import { SiMinutemailer } from "react-icons/si";

function Navbar() {
    return (
        <div className="navbar">
            <nav className='nav-list'>
                <Link to="/" className='nav-link'>
                    <BiHomeHeart className="nav-icon" />
                    <span className="nav-text">Home</span>
                </Link>
                <Link to="/about" className='nav-link'>
                    <SiAboutdotme className="nav-icon" />
                    <span className="nav-text">About Me</span>
                </Link>
                <Link to="/skills" className='nav-link'>
                    <GiSkills className="nav-icon" />
                    <span className="nav-text">Skills</span>
                </Link>
                <Link to="/projects" className='nav-link'>
                    <GoProjectSymlink className="nav-icon" />
                    <span className="nav-text">Projects</span>
                </Link>
                <Link to="/contact" className='nav-link'>
                    <SiMinutemailer className="nav-icon" />
                    <span className="nav-text">Contact</span>
                </Link>
            </nav>
            <div className="wrapper">
                <div className="social">
                    <a href="https://github.com/PriyaBalaDharshini" target='_blank' rel="noopener noreferrer">
                        <img src="/github.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/priyadharshini-thirunavukkarasu-b1b615b4/" target='_blank' rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
