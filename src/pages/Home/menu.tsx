import React, { useRef } from 'react';
import imgitem from '@/assets/1.png'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Menu: React.FC = () => {

    const main = useRef();

    useGSAP(
      () => {
        const boxes = gsap.utils.toArray('.box');
        boxes.forEach((box) => {
          gsap.to(box, {
            x: 150,
            scrollTrigger: {
              trigger: box,
              start: 'bottom bottom',
              end: 'top 20%',
              scrub: true,
              // markers: true,
            },
          });
        });
      },
      { scope: main }
    );
    return (
        <div className='menu-container' ref={main}>

            <div className='menu-top'>
                <h1>السلطات</h1>
            </div>

            <div className='menu-center'>
                <div className='menu-item'>

                <div className='menu-item-title'>
                    <h2>بيتزا</h2>
                </div>
                    <div className='menu-item-img'>
                        <img src={imgitem}   />
                    </div>
                    
                    <div className='menu-center-des'>
                        <p>asfaddasd</p>
                    </div>
                    <div className='menu-center-price'>
                        <h2>15,000</h2>
                    </div>
                </div>
            </div>

            <div className='menu-bottom'>bottom</div>
        </div>
    );
};

export default Menu;