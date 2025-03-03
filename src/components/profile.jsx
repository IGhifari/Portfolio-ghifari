import React from 'react';
import TypeIt from "typeit-react";
import './components.css';
import ParticlesBackground from './particlesBackground';

const Home = () => {
    return(
        <div className='text-2xl min-h-screen w-full relative bg-black'>
            <ParticlesBackground />
            <div className='text-white profile z-10 relative'>
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
                    <h1 style={{fontSize:'1.1rem'}} className='pt-1'>
                        Welcome to my Personal Website
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home;