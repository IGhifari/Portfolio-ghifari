import React, { useState } from 'react';
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll'; // Import Link dari react-scroll
import './components.css';
import { IoMenu } from "react-icons/io5"; // Import IoMenu
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  // State untuk mengontrol menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk membuka dan menutup menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav  className="fixed top-0 text-sm left-0 w-full h-20 flex justify-between items-center bg-black bg-opacity-5 text-white pt-5 shadow-lg z-50 backdrop-blur-sm pb-5">
    <div className="flex gap-5">
      <div className="pr-5 pl-5 flex logo">
        <div className="pl-3">
          <div className='img1'>
            <h2>Ghifari</h2>
          </div>
          <div>
            <h1>Web Developer</h1>
          </div>
        </div>
      </div>
      <div className="gap-5 flex items-center  navbar text-sm hidden md:flex border-l-2 border-white pl-5 ">
        <Link to="profile" smooth={true} duration={700} className="hover:text-cyan-400 transition-all ease-in-out duration-75 cursor-pointer">PROFILE</Link>
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
      <a href="https://www.linkedin.com/in/ighifari/">
        <FaLinkedin size={22} />
      </a>
    </div>
  
    {/* Tombol Menu untuk mobile */}
    <div className='md:hidden pr-5'>
      <IoMenu size={33} onClick={toggleMenu} />
    </div>
  
    <div className={`fixed top-0 right-0 w-64 h-full bg-black bg-opacity-80  text-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out w-full h-screen flex flex-col`}>
      <div className='p-5 flex justify-between'>
        <div className="pl-3">
          <h1>Ghifari</h1>
          <h1>Web Developer</h1>
        </div>
        <IoClose size={35} onClick={toggleMenu} className="cursor-pointer" />
      </div>
  
      <ul className="flex flex-col items-center gap-6 mt-20">
        <li>
          <Link to="profile" smooth={true} duration={700} onClick={toggleMenu} className="hover:text-cyan-400 cursor-pointer">PROFILE</Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={700} onClick={toggleMenu} className="hover:text-cyan-400 cursor-pointer">PROJECTS</Link>
        </li>
        <li>
          <Link to="AcademicBackground" smooth={true} duration={700} onClick={toggleMenu} className="hover:text-cyan-400 cursor-pointer">ACADEMIC BACKGROUND</Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={700} onClick={toggleMenu} className="hover:text-cyan-400 cursor-pointer">CONTACT</Link>
        </li>
      </ul>
  
      <div  className='flex justify-center gap-10  mb-5 mt-auto'>
        <a href="https://www.instagram.com/ghfrriii/">
          <FaInstagram size={30} />
        </a>
        <a href="https://github.com/IGhifari">
          <IoLogoGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/ighifari/">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
