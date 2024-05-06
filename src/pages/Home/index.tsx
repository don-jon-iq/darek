import { Bg } from '@/assets/bg';
import { useEffect, useRef } from 'react';
import {} from "@gsap/react"


function Home() {

    useEffect(() => {
        const tl = new TimelineLite();
        tl.from("bg", { opacity: 0, duration: 1, delay: 0.5 });

        return () => {
            tl.kill();
        };
    }, []);

    
    return (
        <div className="container">
           <Bg  className="bg"/>
            <nav className="navbar">
                {/* Add your navigation links here */}
            </nav>
        </div>
    );
}

export default Home;