import React, { useEffect, useRef } from 'react';

import TypeIt from "typeit-react";
import './components.css'
const Story = () =>{

    return(
        <div  className='mb-96 '>
            <h1 className="text-4xl font-bold text-center mb-3 hover:text-cyan-400 duration-500 transition-all ease-in-out ">
                        <TypeIt  
                        options={{ loop: true, loopDelay: 2000, speed: 100 }} // Loop dan pengaturan delay
                                                getBeforeInit={(instance) => {
                                                    instance
                                                        .type("Short Biography") // Warna biru hanya untuk teks ini
                                                        .pause(750)
                                                        .delete(19)
                                                        .pause(700)
                                                        .type("Biografi Singkat")
                                                        .pause(750)
                                                        .delete(23)
                                                        .pause(700)
                                                        .type("りゃくれき")
                                                    return instance;
                                                }}
                                /> 
            </h1>
            <h1 className='mb-3 text-sm'>STORY OF MY FILE</h1>
            <div  className='text-left text-sm story'>
            <p className='mb-6'><span className='text-blue-500'>M.Ghifari Bima khadafi </span>( born in Lampung on June 5 2007 ), is a <span className='text-blue-500'>Front-End Developer</span>
                who has a strong interest in developing user interfaces and user experiences (UI/UX).  
            My interest in the world of technology grew while studying at SMKN 1 Cibinong majoring in Software Engineering (RPL), where I studied various programming languages ​​and web technology.</p>
            <p className='mb-6'>I am the second child of two brothers. My basic education was completed in 2020, and at the age of 16, I started my educational journey at <span className='text-blue-500'>SMKN 1 Cibinong</span>, where I really delved into the world of technology and programming.</p>
            <p>
                In 2023, I decided to major in <span className='text-blue-500'>Software Engineering (RPL) at SMKN 1 Cibinong.</span> This is where I got a solid foundation in software development, especially in web programming. I started learning about HTML, CSS, JavaScript,  
                and PHP which then paved the way for me to understand more deeply about front-end development.
            </p>
            </div>
        </div>
    )
}

export default Story