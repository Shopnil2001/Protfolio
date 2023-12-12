import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MdCastForEducation } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

import { Outlet } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
import Home from './Components/Home'
import Skills from './Components/Skills'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='' >
      <div className='text-xl rounded-xl hover:border-orange-300 lg:hidden hover:border-2 w-9 h-9 absolute left-20'>
    <button onClick={()=>setIsOpen(true)}><GiHamburgerMenu className='w-8 h-8 mx-auto' /></button>
    </div>
   <div className='flex gap-2 h-screen  ' >
   
  <div className='lg:w-96 md:w-72 w-0 h-screen  '>
  <div  className={`min-h-full  lg:block md:block top-0  md:left-0 lg:left-0 fixed bg-slate-800 z-10 border-2 duration-1000   border-stone-700 w-60 ${isOpen? 'left-0':'-left-96' }`}>
    <div className=' relative md:hidden lg:hidden'>
    <button onClick={()=>setIsOpen(false)} className='w-8 h-8 mr-0 absolute right-1 '><IoCloseSharp className='h-full w-full hover:w-7 text-slate-100 '></IoCloseSharp></button>
    </div>
            <div>
              <img className='rounded-full w-4/5 mx-auto mt-5' src="../src/assets/profile.jpg" alt="" />
              <h2 className='text-3xl font-bold text-orange-200 '>Abdullah Aiyash Shopnil</h2>
              <ul className='text-left w-1/2 mx-auto mt-6 text-[#39db94]'>
                <li><a className='flex gap-2 items-center text-lg font-medium' href="#home"><FaHome />Home</a></li>
                <li><a className='flex gap-2 items-center text-lg font-medium'href="#skills"><GiSkills />Skills</a></li>
                <li><a className='flex gap-2 items-center text-lg font-medium' href="#edu"><MdCastForEducation></MdCastForEducation>Edu/Exp</a></li>
                <li><a className='flex gap-2 items-center text-lg font-medium' href="#projects"><GrProjects></GrProjects>Projects</a></li>
                <li><a className='flex gap-2 items-center text-lg font-medium' href="#contact"><IoIosContact></IoIosContact>Contact</a></li>
              </ul>
              </div>
     </div>
  </div>
   
  
   <div className='w-full'>
     <Outlet></Outlet>
      <div id='home'><Home ></Home></div>
      <div id='skills'><Skills ></Skills></div>
      <div id='edu' className='bg-stone-700 rounded-lg mt-5'><Education></Education></div>
      <div id='projects' className='bg-black py-6 rounded-lg text-white'><Projects></Projects></div>
      <div id='contact' className='bg-black py-6 rounded-lg text-white'><Footer></Footer></div>
    </div>
   
    
   </div>
   
  
    </div>
      
    
  )
}

export default App
