import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
   <div >
    <div className='text-xl rounded-xl hover:border-orange-300 lg:hidden hover:border-2 w-9 h-9 absolute left-20'>
    <button onClick={()=>setIsOpen(true)}><GiHamburgerMenu className='w-8 h-8 mx-auto' /></button>
    </div>
   <div  className={`min-h-screen absolute top-0 lg:w-96 bg-slate-800 z-10 border-2 duration-1000   border-stone-700 w-60 ${isOpen? 'left-0':'-left-96' }`}>
    <div className=' relative lg:hidden'>
    <button onClick={()=>setIsOpen(false)} className='w-8 h-8 mr-0 absolute right-1 '><IoCloseSharp className='h-full w-full hover:w-7 text-slate-100 '></IoCloseSharp></button>
    </div>
            
     </div>
   </div>
      <Outlet></Outlet>
      <div className={`${isOpen? 'opacity-60':''}`}>

      </div>
    </>
  )
}

export default App
