import React, { useRef } from 'react';
import imgitem from '@/assets/1.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Observer from 'gsap/Observer';


gsap.registerPlugin(useGSAP, ScrollTrigger, Observer);

function Menu(props: { pMenu: string , itemtitle:string,itemname:string,itemprice:string,itemdes:string,itemimg:string }) {
    useGSAP(
        () => {


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
                    .fromTo(
                        outerWrappers[index],
                        {
                            xPercent: 100 * direction
                        },
                        { xPercent: 0 },
                        0
                    )
                    .fromTo(
                        innerWrappers[index],
                        {
                            xPercent: -100 * direction
                        },
                        { xPercent: 0 },
                        0
                    )
                    .to('#Layer_2', { rotate: 30 * index },0)
                    .fromTo(
                        heading,
                        {
                            xPercent: 0,
                            scale: 1
                        },
                        {
                            xPercent: 700 * direction,
                            scale: 0.1
                        },
                        0
                    )
                    .fromTo(
                        nextHeading,
                        {
                            xPercent: -700 * direction,
                            scale: 0.1,
                            duration:2

                        },
                        {
                            xPercent: 0,
                            scale: 1

                        },
                        0
                    )
                    .fromTo(
                        headingDes,
                        {
                            xPercent: 0,
                            scale: 1
                        },
                        {
                            xPercent: 700 * direction,
                            scale: 0.1
                        },
                        0
                    )
                    .fromTo(
                        nextHeadingDes,
                        {
                            xPercent: -700 * direction,
                            scale: 0.1,
                            duration:2

                        },
                        {
                            xPercent: 0,
                            scale: 1

                        },
                        0
                    )
                    .fromTo(
                        headingPrice,
                        {
                            xPercent: 0,
                            scale: 1
                        },
                        {
                            xPercent: 700 * direction,
                            scale: 0.1
                        },
                        0
                    )
                    .fromTo(
                        nextHeadingPrice,
                        {
                            xPercent: -700 * direction,
                            scale: 0.1,
                            duration:2

                        },
                        {
                            xPercent: 0,
                            scale: 1

                        },
                        0
                    )
                    .fromTo(
                        slideImages[currentIndex],
                        {
                            scale: 1, opacity: 1,rotate: 0
                        },
                        { scale: .1, opacity: 0,rotate: 160},
                        0
                    )
                    .fromTo(
                        slideImages[index],
                        {
                            scale: .1, opacity: 0,rotate: -160
                        },
                        { scale: 1 , opacity: 1,rotate: 0},
                        0
                    )
                    .timeScale(0.8);

                currentIndex = index;
            }

            Observer.create({
                type: "wheel,touch,pointer",
                preventDefault: true,
                wheelSpeed: -1,
                onUp: () => {
                    console.log("down");
                    if (animating) return;
                    gotoSection(currentIndex + 1, +1);
                },
                onDown: () => {
                    console.log("up");
                    if (animating) return;
                    gotoSection(currentIndex - 1, -1);
                },
                tolerance: 1
            });




        }
    );
    return (
        <section className={"m "+props.pMenu}>
            <div className="slide__outer">
                <div className="slide__inner">
                    <div className="slide__content">
                        <div className="slide__container">
                            <div className={props.pMenu}>
                                <div className='menu-top'>
                                    <h1>{props.itemtitle}</h1>
                                </div>

                                <div className='menu-center'>
                                    <div className='menu-item'>

                                        <div className='menu-item-title'>
                                            <h2>{props.itemname}</h2>
                                        </div>
                                        <div className='menu-item-img'>
                                            <img src={imgitem} />
                                        </div>

                                        <div className='menu-center-des'>
                                            <p>{props.itemdes}</p>
                                        </div>
                                        <div className='menu-center-price'>
                                            <h2>{props.itemprice}</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className='menu-bottom'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
};

export default Menu;