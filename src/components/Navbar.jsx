import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../assets/logo.png'
import { List } from 'react-bootstrap-icons';
import { NavLink } from 'react-router';
const Navbar = () => {
    const [navItem, setNavItem] = useState('Home');
    const [isOpen, setIsOpen] = useState(false);

    const handleNavClick = (navItem) => {
        setNavItem(navItem)
        setIsOpen(false)
    }
    
    return (
        <nav>
            <header>
                <img src={Logo} alt="" className="logo" />
                <h1 className="title">Celestial Dine</h1>

            </header>
            <section >
                <ul className={isOpen ? "top-nav mobile-nav" : "top-nav"}>
                    <li className={(navItem === 'Home') ? "nav-item clicked" : "nav-item"}>
                        <NavLink to="/celestial-dine" className={"nav-link"} onClick={() => handleNavClick("Home")}>Home
                        </NavLink>
                    </li>
                    <li className={(navItem === 'Menu') ? "nav-item clicked" : "nav-item"}>
                        <NavLink to="/celestial-dine/menu" className={ "nav-link"} onClick={() => handleNavClick("Menu")}>Menu
                         </NavLink>
                    </li>
                    <li className={(navItem === 'Contact') ? "nav-item clicked" : "nav-item"}>
                        <NavLink to="/celestial-dine/contact" className={"nav-link"} onClick={() => handleNavClick("Contact")}>Contact
                         </NavLink>
                    </li>
                    <li className={(navItem === 'About') ? "nav-item clicked" : "nav-item"}>
                        <NavLink to="/celestial-dine/about" className={"nav-link"} onClick={() => handleNavClick("About")}>About
                         </NavLink>
                    </li>
                </ul>
                <span className="nav-btn" onClick={() => setIsOpen(!isOpen)}><List color='#000'/></span>
                <button className="book-table" ><NavLink to="/celestial-dine/bookatable" className={"nav-link-btn"} >Book A Table
                </NavLink></button>
            </section>


        </nav>
    )
}

export default Navbar