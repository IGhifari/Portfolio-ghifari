import React, { useEffect, useRef } from 'react';
import TypeIt from "typeit-react";
import './components.css'
const Timeline = () => {
    const events = [
        {
            date: "Juni 2010 - Juni 2011",
            title: "Preschool - Paud Al-Wusto",
            place : "Kaliwungu, Central Lampung Regency, South Sumatra, Indonesia",
            description: "I entered preschool at the age of 2 years, I was accustomed to fun learning methods through games, singing and drawing. This experience helps develop important social skills."
        },
        {
            date: "Juni 2012- Juni 2014",
            title: "kindergarten - TK Darrul Muslim",
            place : "Citeureup, Bogor Regency, West Java, Indonesia",
            description: "I entered kindergarten at the age of 4 years, I started learning about letters, numbers, drawing, coloring in an interactive way. "
        },
        {
            date: "Juli 2014 - Juni 2020",
            title: "Elementary School - SDN Citeureup 01",
            place : "Citeureup, Bogor Regency, West Java, Indonesia",
            description: "I entered kindergarten at the age of 7 years, I graduated at the age of 13 years. In elementary school, I took formal lessons covering a variety of subjects. Apart from academic studies, I actively participate in extracurricular activities, namely scouting which teaches organizational skills and builds friendships."
        },
        {
            date: "Juli 2020 - Juni 2023",
            title: "Junior high school - SMPN 03 Citeureup",
            place : "Citeureup, Bogor Regency, West Java, Indonesia",
            description: "I entered kindergarten at the age of 13 years, I graduated at the age of 16 years. During junior high school, I spent more time studying and studying formal lessons. Without getting involved in extracurriculars, I focused on academics and test preparation, which helped me build a foundation for the future."
        },
        {
            date: "Juli 2023 - Juni 2026",
            title: "Vocational School - SMKN 01 Cibinong",
            place : "Cibinong, Bogor Regency, West Java, Indonesia",
            description: "I entered kindergarten at the age of 16 years, I graduated at the age of 19 years. At Vocational High School, I chose the Software Engineering major which allowed me to study programming and information technology. In addition to practical skills, I also had the opportunity to do an internship, providing valuable hands-on experience in a field that interests me."
        }
        ];
    
    return (
        <div  className="container mx-auto my-10 pt-20 ">
            <h1 className="text-4xl font-bold text-center mb-10 hover:text-cyan-400 duration-500 transition-all ease-in-out ">
                        <TypeIt  
                        options={{ loop: true, loopDelay: 2000, speed: 100 }} // Loop dan pengaturan delay
                                                getBeforeInit={(instance) => {
                                                    instance
                                                        .type("Academic Background") // Warna biru hanya untuk teks ini
                                                        .pause(750)
                                                        .delete(19)
                                                        .pause(700)
                                                        .type("Latar Belakang Akademis")
                                                        .pause(750)
                                                        .delete(23)
                                                        .pause(700)
                                                        .type("がくれき")
                                                    return instance;
                                                }}
                                /> 
            </h1>
            <div className='flex items-center gap-64 pt-10 justify-center  timeline'>
                <div className="relative border-l-4 border-cyan-400">
                {events.map((event, index) => (
                    <div key={index} className="mb-8 pl-6 relative">
                    <div className="absolute -left-4 top-0 bg-cyan-400 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                    </div>

                    <h2 style={{fontSize:'1.4rem'}} className="font-semibold">{event.title}</h2>
                    <p  className='font-montserrat text-sm '>{event.place}</p>
                    <p className="text-sm text-gray-500">{event.date}</p>
                    <p className="mt-2 text-sm text-left ">{event.description}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
        );
    };
    
    export default Timeline;