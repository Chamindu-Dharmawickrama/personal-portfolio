import React from 'react'
import { IoClose } from "react-icons/io5";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    console.log("in mobile menu ", menuOpen);
  return (
    
    <div
        className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.9)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out
            ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >       {/*if menuOpen true menu display */}

        <button onClick={()=> setMenuOpen(false)}
                className='absolute top-6 right-6 text-white text-4xl font-bold focus:outline-none cursor-pointer' aria-label='close button'
        >
            <IoClose/>
        </button>

        <a
            href="#home"
            onClick={()=>setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 tranform transition-transform duration-300
                ${menuOpen? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
        > Home </a>

        <a
            href="#about"
            onClick={()=>setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 tranform transition-transform duration-300
                ${menuOpen? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
        > About </a>

        <a
            href="#project"
            onClick={()=>setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 tranform transition-transform duration-300
                ${menuOpen? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
        > Projects </a>

        <a
            href="#contact"
            onClick={()=>setMenuOpen(false)}
            className={`text-2xl font-semibold text-white my-4 tranform transition-transform duration-300
                ${menuOpen? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
            `}
        > Contact </a>
        
    </div>
  )
}
