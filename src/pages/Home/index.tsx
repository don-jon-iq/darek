
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Bg } from "@/assets/bg";
import { Logo } from "@/assets/logo";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react"
import './style.css'
import { Link } from 'react-router-dom';
import logo from '@/assets/SVG/logo_1.svg'
import Navbar from '../components/navbar';
import  Menu  from './menu';

gsap.registerPlugin(useGSAP, ScrollTrigger);
function Home() {

    const container = useRef();
    const logowelcom = useRef();
    const tl = gsap.timeline();


    useGSAP(
        () => {
            tl.set(container, { visibility: "visible" })
           .fromTo("#logo-main-svg", {opacity: 0, transformOrigin: 'center', scale: .2,ease: "power2.out", duration: 1.5,delay:.4}, {opacity: 1, scale: 1, ease: "power2.out", duration: 3.5},'Load')
           
           
           .fromTo(".logo-loading-2", {stagger:.1,opacity: 0, transformOrigin: 'center', scale: .2, rotate: -15,ease: "power2.out", duration:.5}, {stagger:.1,opacity: 1, scale: 1,rotate: 0,ease: "power2.out", duration: .5},'Load')

           .to("#logo-main-svg",{delay:.1,opacity: 0, scale: 2, ease:"power2.in", duration: 2})
           .to(".logo-loading-2",{stagger:.1,opacity: 0, scale: 2,rotate: -15,ease: "power2.in", duration: 1.2},'-=2.4')
           .to(".welcom-logo",{x:1000})


            .from('#Layer_2', { opacity: 0, transformOrigin: 'center', scale: .2, rotate: 160,ease: "sine.out", duration: 2.1 },'-=1.5')
           .fromTo('.linklogo', { opacity: 0, y:70,x:150,ease: "sine.out"},{opacity: 1,y:0,x:150,ease: "sine.out"}, '-=1.1')
           .to('.linklogo', { x:0,ease: "sine.out" },'=.1')
           .fromTo('.hum-menu', {opacity:0, x:-150,ease: "sine.out" },{opacity:1,ease: "sine.out"},'-=.5')
           .to('.hum-menu', { x:0,ease: "sine.out" },'-=.5')


           .from('.menu-top', { height:0,ease: "power2.in" },'-=2.5')
           .from('.menu-item-img', { scale: 0.1,rotate: 160, opacity:0,ease: "power2.in" },'-=.5')
           .from('.menu-item-title', { x:1000,ease: "power2.in" },'-=.5')
           .from('.menu-center-des', { x:1000,ease: "power2.in" },'-=.5')
           .from('.menu-center-price', { x:1000,ease: "power2.in" },'-=.5')
          
        }
    );

    return (
        <>

        
      <div className="welcom-logo" ref={logowelcom}>
                 
                 <Logo   /> 
      </div>
      <div className="container" ref={container}>
            <div className='contant'>
                <Bg />
                <Menu />
                <Menu />

            </div>
            <Navbar/>
        </div >
        </>
        
    );
}

export default Home;