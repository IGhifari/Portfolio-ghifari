import React, { useEffect, useRef } from 'react';
import TypeIt from "typeit-react";
import './components.css';
const Home = () => {

    return(
        <div style={{height:'700px'}} className='text-2xl'>
            <div className='text-white pt-80 profile'>
                <div className='p-4'>
                    <h3>Hello, I'm</h3>
                    <h3 className='text-2xl font-normal'>M.Ghifari Bima Khadafi</h3>
                    <h1 className='text-white text-3xl font-montserrat'>
                        <TypeIt  
                        options={{ loop: true, loopDelay: 2000, speed: 100 }} 
                                                getBeforeInit={(instance) => {
                                                    instance
                                                        .type("Web Developer") 
                                                        .pause(750)
                                                        .delete(19)
                                                        .pause(700)
                                                        .type("Student")
                                                    return instance;
                                                }}
                                /> 

                    </h1>
                    <h1 style={{fontSize:'1.1rem'}} className='pt-1'>Welcome to my Personal Website</h1>
                </div>
            </div>
        </div>
    )
}

export default Home