import React, { useEffect, useRef } from 'react';

import TypeIt from "typeit-react";

const Project = () =>{

    return(
        <div className='pt-20 mt-96'>
            <h1 className="text-4xl font-bold text-center mb-3 hover:text-cyan-400 duration-500 transition-all ease-in-out ">
                        <TypeIt  
                        options={{ loop: true, loopDelay: 2000, speed: 100 }} // Loop dan pengaturan delay
                                                getBeforeInit={(instance) => {
                                                    instance
                                                        .type("Project") // Warna biru hanya untuk teks ini
                                                        .pause(750)
                                                        .delete(10)
                                                        .pause(700)
                                                        .type("Proyek")
                                                        .pause(750)
                                                        .delete(23)
                                                        .pause(700)
                                                        .type("ぷろじぇくと")
                                                    return instance;
                                                }}
                                /> 
            </h1>
        </div>
    )
}

export default Project