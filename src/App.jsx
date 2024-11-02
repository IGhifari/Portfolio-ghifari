  import React, { useEffect, useRef } from 'react';
  import './App.css'
  import './components/components.css'
  import Navbar from './components/navbar'
  import Home from './components/profile'
  import Project from './components/project'
  import AcademicBackground from './components/education'
  import Contact from './components/contact'
  import Skills from './components/skill'
  import Story from './components/story';
  const App = () => {
    return (
      <div className='bg-black tampilan '>
        <Navbar />
        <section id="profile" className="h-screen  text-white ">
          <Home/>
        </section>
        <section style={{height:"1500px"}} id="projects" className="h-screen  text-white  ">
          <Project/>
        </section>
        <section style={{height:'700px'}} className='text-white pb-48 '>
          <div className=' '>
            <div className='flex items-center pl-5 '>
              <div style={{border:'2px solid white'}} className='rounded-md w-12 h-0'>
              </div>
                <h3 style={{fontSize:'1.2rem'}} className='pl-3 '>Skills</h3>
            </div>
            <div>
              <Skills/>
            </div>
          </div>
        </section>
        <section className="h-screen  text-white flex text-center justify-center mt-44 ">
          <Story/>
        </section>
        <section id="AcademicBackground" className="h-screen  text-white flex items-center justify-center  ">
          <AcademicBackground/>
        </section>
        <section id="contact" className="h-screen  text-white  mt-64">
          <Contact/>
        </section>
        <footer style={{fontSize:'0.9rem'}} className='text-white h-20  '>
          <div className='text-center'>
            <h1 className='font-montserrat'>Ghifari</h1>
            <h1>Fullstack Developer</h1>
            <p className='text-sm'>Copyright &#169; {new Date().getFullYear()} Ghifari. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  };

  export default App;

