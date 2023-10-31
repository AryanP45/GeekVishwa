"use client"
import React,{ useEffect,useState } from 'react';
import Typewriter from "typewriter-effect";
import Countdown from './Countdown';
import CountdownTimer from './Counter';
const Hero = () => {
    const [isExpired, setisExpired] = useState(false)
    let endDate = new Date("November 4, 2023 23:59:59").getTime()-new Date().getTime();
    let NOW_IN_MS=new Date().getTime();
    let dateTimeAfterThreeDays= NOW_IN_MS  + endDate;
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);


    return (
        <div className='hero-section flex justify-center items-center flex-col '>
            <div className='h-[61%] w-[87%] flex justify-center hero-image-container'>
                <img src="../assets/loader.gif" alt="" />
            </div>

            <div className='flex flex-col items-center'>
                {/* <Countdown/> */}
                {/* Removed for lagging on mobile devices */}
                {/* <div className="App flex mb-[2rem] text-[34px] font-black">
                    <Typewriter

                        options={{
                            autoStart: true,
                            delay: 75,
                            loop: true,
                        }}

                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Let geekvishwa be passport to your Geekdom!")
                                .pauseFor(100)
                                .deleteAll()
                                .start()
                        }}
                    />
                </div> */}
                <CountdownTimer targetDate={dateTimeAfterThreeDays} isExpired={isExpired} setisExpired={setisExpired} />
                
                <div className='mb-[3rem] flex-center justify-center '>
                    <span className='text-[60px] text-6xl font-black  register'>{isExpired?"":"Register Now !!!"}</span>
                </div>

                <div
                    className="apply-button"
                    data-hackathon-slug="geekvishwa"
                    data-button-theme="light"
                    style={{ height: "44px", width: "312px" }}
                ></div>

            </div>
        </div>
    )
}

export default Hero