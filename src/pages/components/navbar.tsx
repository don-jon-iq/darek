import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/SVG/logo_1.svg'
import { Turn as Hamburger } from 'hamburger-react';
import gsap from 'gsap';
import { Scale } from 'lucide-react';


const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const menuopen = gsap.timeline();

    const handleNavbarCollapse = () => {
        if (window.innerWidth < 650){
        setOpen();
      // close a menu
      menuopen
      .to('.linklogo', {  y: 0, x:0,scale:1, ease: "sine.out" },"ham-close")
    
      .fromTo('.navbar-list li', {opacity: 1, x:0,ease: "sine.out" },{opacity: 0,x:-100,stagger:.1,ease: "sine.out"},"ham-close")
      .to('.navbar-nav', {y:1000,ease: "sine.out"},"ham-close")
      .to('#Layer_2', { opacity: 1, transformOrigin: 'center', scale: 1, rotate: 0, ease: "sine.out", duration: .7 },"ham-close")
      .to('.menu-top', { height:40, ease: "power2.in" },"ham-close")
      .to('.menu-item-img', { scale: 1, rotate: 160, opacity: 1, ease: "power2.in" },"ham-close")
      .to('.menu-item-title', { x: 0, ease: "power2.in" },"ham-close")
      .to('.menu-center-des', { x: 0, ease: "power2.in" },"ham-close")
      .to('.menu-center-price', { x: 0, ease: "power2.in" },"ham-close")

      
        }   
    };

    return (
        
        <nav className="navbar">
            <Link  className="linklogo" to="/">
                <div className="logo-sec">
                 
                    <img src={logo} alt="Logo" id="logosvg"  height={65} /> 
                </div>
            </Link>
            <div className="hum-menu">
            <Hamburger  duration={.5} color="#2e5894"  toggled={isOpen} toggle={setOpen}  onToggle={toggled => {
                          if (toggled) {
                             // open a menu
                             menuopen 
                             
                             .to('.menu-top', { height: 0, ease: "sine.out" },"ham-open")
                             .to('.menu-item-img', { scale: 0.1, transformOrigin: 'center', rotate: 0, opacity: 0, ease: "sine.out" },"ham-open")
                             .to('.menu-item-title', { x: -1000, ease: "sine.out" },"ham-open")
                             .to('.menu-center-des', { x: -1000, ease: "sine.out" },"ham-open")
                             .to('.menu-center-price', { x: -1000, ease: "sine.out" },"ham-open")
                             
                             .to('#Layer_2', { opacity: 0, transformOrigin: 'center', scale: .2, rotate: 160, ease: "sine.out", duration: 0.8 },"ham-open")
                             .to('.navbar-nav', {y:0,ease: "sine.out",delay:.1},"ham-open")
                             .fromTo('.navbar-list li', {opacity: 0, x:-100,ease: "sine.out" },{opacity: 1,x:0,stagger:.1,ease: "sine.out"},"ham-open")
                             .to('.linklogo', {  y: -120, x:160,scale:1.1, ease: "sine.out" },"ham-open")
                          } else {
                             
                                handleNavbarCollapse();
                              
                          }
                        }} />
            </div>
            <div className="navbar-nav">
                <div className="lang-container">
                    <h1>
                    eng
                    </h1>
                </div>
                <div className="navgator">
                   
                   
                    <ul className="navbar-list" >
                        <li className="navbar-item">
                            <Link
                                to="/"
                                className="nav-link"
                                onClick={handleNavbarCollapse}>
                                  سماك
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link
                                to="/"
                                className="nav-link"
                                onClick={handleNavbarCollapse}>
                                  البیتزا
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link
                                to="/"
                                className="nav-link"
                                // Collapse the navbar once an item is clicked
                                onClick={handleNavbarCollapse}
                            >
                                الباستا
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link
                                to="/"
                                className="nav-link"
                                // Collapse the navbar once an item is clicked
                                onClick={handleNavbarCollapse}
                            >
                                الحلويات
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link
                                to="/"
                                className="nav-link"
                                // Collapse the navbar once an item is clicked
                                onClick={handleNavbarCollapse}
                            >
                                الاطباق الشرقية
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="social-container">

                </div>
               
            </div>
        </nav>
    );
};

export default Navbar;