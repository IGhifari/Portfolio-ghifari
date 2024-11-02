import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll'; // Import Link dari react-scroll
import './components.css';
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 flex justify-between items-center bg-black text-white pt-5 shadow-lg z-50 bg-transparent pb-5 backdrop-blur-sm">
      <div className="flex gap-5">
        <div style={{ fontSize: '0.9rem' }} className="pr-5 pl-5 flex logo ">
          <div className="size-10 img">
            <img src="src/assets/logo1.png" alt="Logo" />
          </div>
          <div className="pl-3">
            <div className='img1'>
              <h1 style={{ fontSize: '1.1rem' }} className='hidden '>
                Ghifari
              </h1>
                <img src="src\assets\gh2.png" alt="" className='h-8'/>
            </div>
            <div>
              <h1>Fullstack Developer</h1>
            </div>
          </div>
        </div>
        <div
          style={{ borderLeft: '3px solid white', fontSize: '0.7rem' }}
          className="gap-5 flex items-center font-montserrat navbar"
        >
          <Link to="profile" smooth={true} duration={700} className="hover:text-cyan-400 pl-5 transition-all ease-in-out duration-75 cursor-pointer">PROFILE</Link>
          <Link to="projects" smooth={true} duration={700} className="hover:text-cyan-400 cursor-pointer">PROJECTS</Link>
          <Link to="AcademicBackground" smooth={true} duration={700} className="hover:text-cyan-400 cursor-pointer">ACADEMIC BACKGROUND</Link>
          <Link to="contact" smooth={true} duration={700} className="hover:text-cyan-400 cursor-pointer">CONTACT</Link>
        </div>
      </div>
      <div className="flex gap-5 pr-5 social">
        <a href="https://www.instagram.com/ghfrriii/">
          <FaInstagram size={22} />
        </a>
        <a href="https://github.com/IGhifari">
          <IoLogoGithub size={22} />
        </a>
        <a href="">
          <FaLinkedin size={22} />
        </a>
      </div>
      <div className='hidden menu pr-5 '>
        <IoMenu size={33} />
      </div>
    </nav>
  );
};

export default Navbar;
