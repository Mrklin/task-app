import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import {logo} from '../image';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    // const Menu = () =>(
    //     <>
                
    //             <li className='ml-3'><a href="#" onClick={setToggle(false)}>Home</a></li>
    //             <li className='ml-3'><a href="#" onClick={setToggle(false)}>About</a></li>
    //             <li className='ml-3'><a href="#" onClick={setToggle(false)}>Contact Us</a></li>
                
    //     </>
    // )
  return (
    <div className='w-screen'>

    <nav className='flex justify-between items-center flex-row w-scren h-[4rem] 
    pr-10 pl-4 relative bg-sky-700'>
    
        <div className='flex items-center justify-center text-[1.5rem] gap-2'>
            <img src={logo} className='w-[24px]'/>
            <h1>Task App</h1>
        </div>
        
        <div className='relative w-fit'>
        <div className='hidden sm:flex relative'>
         <ul className='list-none flex flex-row pr-5 text-[1.2rem]'>
            <li className='ml-3 hover:text-sky-300 '><a href="#">Home</a></li>
            <li className='ml-3 hover:text-sky-300 '><a href="#">About</a></li>
            <li className='ml-3 hover:text-sky-300 '><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div className='flex sm:hidden relative flex-col items-center '> 
        {toggle ? <IoClose  size={27}  onClick={()=>setToggle(false)} /> : <RxHamburgerMenu size={27} onClick={()=>setToggle(true)} />}
        
        {toggle && (
            <div className='flex flex-col mt-10 items-start absolute bg-blue-200
             p-4 w-28 rounded-[15%] z-10'>
             <ul className='list-none font-bold'>
                <li className='mb-2 '><a href="#">Home</a></li>
                <li className='mb-2 '><a href="#">About</a></li>
                <li className='mb-2 '><a href="#">Contact Us</a></li>
             </ul>
            </div>

        )}
        </div>
        
        </div>
        
    
    </nav>

    </div>
  )
}

export default Header