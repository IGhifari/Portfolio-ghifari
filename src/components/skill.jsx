import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { IoLogoGithub } from "react-icons/io";
import './skill.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
const Skills = () =>{
    return(
        <div className='mt-10'>
            <div className='text-sm font-montserrat text-center'>
                <h1>LIST OF MY SKILL SET</h1>
            </div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper mt-7"
                >
                <SwiperSlide className=' '>
                    <div className='w-full'>
                        <div className='mt-7 mb-7'>
                            <div className=' w-full flex justify-center items-center '>
                                <h1 className='font-bold text-3xl'>Frontend</h1>
                            </div>
                            <div style={{fontSize:'0.5rem'}} className='w-full flex justify-center text-sm font-montserrat text-yellow-400'>
                                <h1>SCROLL LIST TO SEE MORE</h1>
                            </div>
                        </div>
                        <div className=' m-2 h-60 overflow-y-auto text-sm'>
                            <div className=" h-56 overflow-y-auto  border-yellow-300 text-sm ">
                            <ul className="space-y-4 border-t-2 border-b-2 border-yellow-300 scroll-smooth duration-200">
                                <li  className="flex items-center space-x-2 mt-5  justify-center">
                                    <FaHtml5 size={27}/>
                                    <h1 className='text-1xl'>HTML</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <FaCss3Alt size={27}/>
                                    <h1 className='text-1xl'>CSS</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <FaJs size={27}/>
                                    <h1 className='text-1xl'>Java Script</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <FaReact size={27}/>
                                    <h1 className='text-1xl'>React JS</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <RiTailwindCssFill size={27}/>
                                    <h1 className='text-1xl'>Tailwind CSS</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 pb-5 justify-center">
                                    <RiNextjsFill size={27}/>
                                    <h1 className='text-1xl'>Next</h1>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div style={{fontSize:'0.7rem'}} className='text-start pl-5 pr-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime adipisci quisquam. Cupiditate deserunt quisquam consequuntur accusamus.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full'>
                        <div className='mt-7 mb-7'>
                            <div className=' w-full flex justify-center items-center '>
                                <h1 className='font-bold text-3xl'>Backend</h1>
                            </div>
                            <div style={{fontSize:'0.5rem'}} className='w-full flex justify-center text-sm font-montserrat text-yellow-400'>
                                <h1>SCROLL LIST TO SEE MORE</h1>
                            </div>
                        </div>
                        <div className=' m-2 h-60 overflow-y-auto text-sm'>
                            <div className=" h-56 overflow-y-auto  border-yellow-300 text-sm ">
                            <ul className="space-y-4  border-t-2 border-b-2 border-yellow-300 scroll-smooth duration-500">
                            
                            <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 pb-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                                
                            </ul>
                            </div>
                        </div>
                        <div style={{fontSize:'0.7rem'}} className='text-start pl-5 pr-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime adipisci quisquam. Cupiditate deserunt quisquam consequuntur accusamus.
                        </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='w-full'>
                        <div className='mt-7 mb-7'>
                            <div className=' w-full flex justify-center items-center '>
                                <h1 className='font-bold text-3xl'>Utilities</h1>
                            </div>
                            <div style={{fontSize:'0.5rem'}} className='w-full flex justify-center text-sm font-montserrat text-yellow-400'>
                                <h1>SCROLL LIST TO SEE MORE</h1>
                            </div>
                        </div>
                        <div className=' m-2 h-64 overflow-y-auto text-sm'>
                            <div className=" h-60 overflow-y-auto  border-yellow-300 text-sm ">
                            <ul className="space-y-4  border-t-2 border-yellow-300 border-b-2 scroll-smooth duration-200">
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                                <li  className="flex items-center space-x-2 mt-5 pb-5 justify-center">
                                    <IoLogoGithub size={27}/>
                                    <h1 className='text-1xl'>Github</h1>
                                </li>
                            </ul>
                            </div>
                        </div>
                        <div style={{fontSize:'0.7rem'}} className='text-start pl-5 pr-1'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem maxime adipisci quisquam. Cupiditate deserunt quisquam consequuntur accusamus.
                        </div>
                </div>
                </SwiperSlide>
                </Swiper>
            </div>
    )
}

export default Skills