import React, { useEffect, useRef } from 'react';
import TypeIt from "typeit-react";
import { FaUserGraduate, FaCode, FaLaptopCode, FaStar } from 'react-icons/fa';
import './components.css';

const Story = () => {
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-timeline');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="container mx-auto px-4 py-16 story-container bg-gradient-to-b from-transparent to-black/30">
            <div className="max-w-4xl mx-auto">
                <div className="glowing-title mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 hover:text-cyan-400 duration-500 transition-all ease-in-out">
                        <TypeIt
                            options={{ loop: true, loopDelay: 2000, speed: 100 }}
                            getBeforeInit={(instance) => {
                                instance
                                    .type("My Journey")
                                    .pause(750)
                                    .delete(10)
                                    .pause(700)
                                    .type("私の道のり")
                                return instance;
                            }}
                        />
                    </h1>
                    <div className="text-center">
                        <FaStar className="inline-block text-cyan-400 animate-pulse" />
                    </div>
                </div>

                <div className="timeline-container" ref={timelineRef}>
                    {[
                        {
                            icon: <FaUserGraduate />,
                            title: "About Me",
                            content: (
                                <>
                                    <span className="text-cyan-400">M.Ghifari Bima khadafi</span> (born in Lampung on June 5, 2007), 
                                    is a <span className="text-cyan-400">Web Developer</span> passionate about creating 
                                    engaging user interfaces.
                                </>
                            )
                        },
                        {
                            icon: <FaCode />,
                            title: "Early Journey",
                            content: (
                                <>
                                    As the second child of two brothers, I completed my basic education in 2020. 
                                    At 16, I embarked on my tech journey at <span className="text-cyan-400">SMKN 1 Cibinong</span>, 
                                    where my passion for technology and programming flourished.
                                </>
                            )
                        },
                        {
                            icon: <FaLaptopCode />,
                            title: "Current Path",
                            content: (
                                <>
                                    In 2023, I specialized in <span className="text-cyan-400">Software Engineering (RPL)</span> at SMKN 1 Cibinong. 
                                    Here, I built a strong foundation in web development, mastering HTML, CSS, JavaScript, 
                                    and PHP, focusing particularly on front-end development.
                                </>
                            )
                        }
                    ].map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-icon group">
                                <div className="text-cyan-400 text-2xl group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="timeline-content backdrop-blur-sm">
                                <h3 className="text-xl font-semibold text-cyan-400 mb-2">{item.title}</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Story;