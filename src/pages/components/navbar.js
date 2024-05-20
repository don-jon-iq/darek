import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/SVG/logo_1.svg';
import { Turn as Hamburger } from 'hamburger-react';
import gsap from 'gsap';
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const menuopen = gsap.timeline();
    const handleNavbarCollapse = () => {
        if (window.innerWidth < 650) {
            setOpen();
            // close a menu
            menuopen.fromTo('.navbar-list', { opacity: 1, y: 0, ease: "sine.out" }, { opacity: 0, y: -100, ease: "sine.out" }, '-=.5')
                .to('.navbar-nav', { x: -1000, ease: "sine.out", delay: .2 });
        }
    };
    return (_jsxs("nav", { className: "navbar", children: [_jsx(Link, { className: "linklogo", to: "/", children: _jsx("div", { className: "logo-sec", children: _jsx("img", { src: logo, alt: "Logo", id: "logosvg", height: 65 }) }) }), _jsx("div", { className: "hum-menu", children: _jsx(Hamburger, { duration: .5, color: "#2e5894", toggled: isOpen, toggle: setOpen, onToggle: toggled => {
                        if (toggled) {
                            // open a menu
                            menuopen.to('.navbar-nav', { x: 0, ease: "sine.out", delay: .2 })
                                .fromTo('.navbar-list', { opacity: 0, y: -100, ease: "sine.out" }, { opacity: 1, y: 0, ease: "sine.out" });
                        }
                        else {
                            handleNavbarCollapse();
                        }
                    } }) }), _jsx("div", { className: "navbar-nav", children: _jsx("div", { className: "navgator", children: _jsxs("ul", { className: "navbar-list", children: [_jsx("li", { className: "navbar-item", children: _jsx(Link, { to: "/", className: "nav-link", onClick: handleNavbarCollapse, children: "Home" }) }), _jsx("li", { className: "navbar-item", children: _jsx(Link, { to: "/Process", className: "nav-link", onClick: handleNavbarCollapse, children: "Process" }) }), _jsx("li", { className: "navbar-item", children: _jsx(Link, { to: "/OurWork/LengSeaFood", className: "nav-link", 
                                    // Collapse the navbar once an item is clicked
                                    onClick: handleNavbarCollapse, children: "Our Work" }) }), _jsx("li", { className: "navbar-item", children: _jsx(Link, { to: "/OurWork/Alreef", className: "nav-link", 
                                    // Collapse the navbar once an item is clicked
                                    onClick: handleNavbarCollapse, children: "Our services" }) }), _jsx("li", { className: "navbar-item", children: _jsx(Link, { to: "/GetInTouch", className: "btn", 
                                    // Collapse the navbar once an item is clicked
                                    onClick: handleNavbarCollapse, children: "Get In Touch" }) })] }) }) })] }));
};
export default Navbar;
