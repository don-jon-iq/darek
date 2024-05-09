import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/SVG/logo_1.svg'
import { Turn as Hamburger } from 'hamburger-react';


const Navbar: React.FC = () => {
    const [isOpen, setOpen] = useState(false);
    const handleNavbarCollapse = () => {
        if (window.innerWidth < 650){
        setOpen();
      // close a menu
      
    
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
                             
                          } else {
                             
                                handleNavbarCollapse();
                              
                          }
                        }} />
            </div>
            <div className="navbar-nav">
                <div className="navgator">
                   
                   
                    <ul className="navbar-list" >
                        <li className="navbar-item">
                            <Link
                                to="/"
                                className="nav-link"
                                onClick={handleNavbarCollapse}>
                                  Home
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link
                                to="/Process"
                                className="nav-link"
                                onClick={handleNavbarCollapse}>
                                  Process
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link
                                to="/OurWork/LengSeaFood"
                                className="nav-link"
                                // Collapse the navbar once an item is clicked
                                onClick={handleNavbarCollapse}
                            >
                                Our Work
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link
                                to="/OurWork/Alreef"
                                className="nav-link"
                                // Collapse the navbar once an item is clicked
                                onClick={handleNavbarCollapse}
                            >
                                Our services
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link
                                to="/GetInTouch"
                                className="btn"
                                // Collapse the navbar once an item is clicked
                                onClick={handleNavbarCollapse}
                            >
                                Get In Touch
                            </Link>
                        </li>
                    </ul>
                </div>
               
            </div>
        </nav>
    );
};

export default Navbar;