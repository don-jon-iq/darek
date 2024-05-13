import React from 'react';
import imgitem from '@/assets/1.png'

const Menu: React.FC = () => {
    return (
        <div className='menu-container'>

            <div className='menu-top'>top</div>

            <div className='menu-center'>
                <div className='menu-item'>

                    <div className='menu-item-img'>
                        <img src={imgitem}   />
                    </div>
                    <div className='menu-item-title'></div>
                    <div className='menu-center-price'></div>
                    <div className='menu-center-des'></div>
                </div>
            </div>

            <div className='menu-bottom'>bottom</div>
        </div>
    );
};

export default Menu;