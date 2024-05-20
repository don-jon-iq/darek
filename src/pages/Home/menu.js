import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import imgitem from '@/assets/1.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Observer from 'gsap/Observer';
gsap.registerPlugin(useGSAP, ScrollTrigger, Observer);
function Menu(props) {
    useGSAP(() => {
        const tl1 = gsap.timeline({});
        const tl2 = gsap.timeline({});
        const sections = gsap.utils.toArray(".m");
        const slideImages = gsap.utils.toArray(".menu-item-img img");
        const outerWrappers = gsap.utils.toArray(".slide__outer");
        const innerWrappers = gsap.utils.toArray(".slide__inner");
        const wrap = gsap.utils.wrap(0, sections.length);
        let animating;
        let currentIndex = 0;
        gsap.set(outerWrappers, { xPercent: 100 });
        gsap.set(innerWrappers, { xPercent: -100 });
        gsap.set(".m:nth-of-type(1) .slide__outer", { xPercent: 0 });
        gsap.set(".m:nth-of-type(1) .slide__inner", { xPercent: 0 });
        function gotoSection(index, direction) {
            animating = true;
            index = wrap(index);
            let tl = gsap.timeline({
                defaults: { duration: 1, ease: "expo.inOut" },
                onComplete: () => {
                    animating = false;
                }
            });
            let currentSection = sections[currentIndex];
            let heading = currentSection.querySelector(".menu-item-title");
            let headingDes = currentSection.querySelector(".menu-center-des");
            let headingPrice = currentSection.querySelector(".menu-center-price");
            let nextSection = sections[index];
            let nextHeading = nextSection.querySelector(".menu-item-title");
            let nextHeadingDes = nextSection.querySelector(".menu-center-des");
            let nextHeadingPrice = nextSection.querySelector(".menu-center-price");
            gsap.set([sections], { zIndex: 0, autoAlpha: 0 });
            gsap.set([sections[currentIndex]], { zIndex: 1, autoAlpha: 1 });
            gsap.set([sections[index]], { zIndex: 2, autoAlpha: 1 });
            tl
                .fromTo(outerWrappers[index], {
                xPercent: 100 * direction
            }, { xPercent: 0 }, 0)
                .fromTo(innerWrappers[index], {
                xPercent: -100 * direction
            }, { xPercent: 0 }, 0)
                .to('#Layer_2', { rotate: 30 * index }, 0)
                .fromTo(heading, {
                xPercent: 0,
                scale: 1
            }, {
                xPercent: 700 * direction,
                scale: 0.1
            }, 0)
                .fromTo(nextHeading, {
                xPercent: -700 * direction,
                scale: 0.1,
                duration: 2
            }, {
                xPercent: 0,
                scale: 1
            }, 0)
                .fromTo(headingDes, {
                xPercent: 0,
                scale: 1
            }, {
                xPercent: 700 * direction,
                scale: 0.1
            }, 0)
                .fromTo(nextHeadingDes, {
                xPercent: -700 * direction,
                scale: 0.1,
                duration: 2
            }, {
                xPercent: 0,
                scale: 1
            }, 0)
                .fromTo(headingPrice, {
                xPercent: 0,
                scale: 1
            }, {
                xPercent: 700 * direction,
                scale: 0.1
            }, 0)
                .fromTo(nextHeadingPrice, {
                xPercent: -700 * direction,
                scale: 0.1,
                duration: 2
            }, {
                xPercent: 0,
                scale: 1
            }, 0)
                .fromTo(slideImages[currentIndex], {
                scale: 1, opacity: 1, rotate: 0
            }, { scale: .1, opacity: 0, rotate: 160 }, 0)
                .fromTo(slideImages[index], {
                scale: .1, opacity: 0, rotate: -160
            }, { scale: 1, opacity: 1, rotate: 0 }, 0)
                .timeScale(0.8);
            currentIndex = index;
        }
        Observer.create({
            type: "wheel,touch,pointer",
            preventDefault: true,
            wheelSpeed: -1,
            onUp: () => {
                console.log("down");
                if (animating)
                    return;
                gotoSection(currentIndex + 1, +1);
            },
            onDown: () => {
                console.log("up");
                if (animating)
                    return;
                gotoSection(currentIndex - 1, -1);
            },
            tolerance: 10
        });
    });
    return (_jsx("section", { className: "m", children: _jsx("div", { className: "slide__outer", children: _jsx("div", { className: "slide__inner", children: _jsx("div", { className: "slide__content", children: _jsx("div", { className: "slide__container", children: _jsxs("div", { className: props.pMenu, children: [_jsx("div", { className: 'menu-top', children: _jsx("h1", { children: "\u0627\u0644\u0633\u0644\u0637\u0627\u062A" }) }), _jsx("div", { className: 'menu-center', children: _jsxs("div", { className: 'menu-item', children: [_jsx("div", { className: 'menu-item-title', children: _jsx("h2", { children: "\u0628\u064A\u062A\u0632\u0627" }) }), _jsx("div", { className: 'menu-item-img', children: _jsx("img", { src: imgitem }) }), _jsx("div", { className: 'menu-center-des', children: _jsx("p", { children: "asfaddasd" }) }), _jsx("div", { className: 'menu-center-price', children: _jsx("h2", { children: "15,000" }) })] }) }), _jsx("div", { className: 'menu-bottom' })] }) }) }) }) }) }));
}
;
export default Menu;
