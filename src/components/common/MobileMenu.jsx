import React from 'react'
import { IoClose } from "react-icons/io5";

const MobileNavLink = ({ href, onClick, children, menuOpen, delay }) => (
    <a
        href={href}
        onClick={onClick}
        className={`relative px-10 py-4 text-3xl font-semibold text-gray-200 hover:text-white transition-all duration-500 group overflow-hidden rounded-full my-3 transform
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        style={{ transitionDelay: `${delay}ms` }}
    >
        {/* Water drop expanding effect (Ripple) */}
        <span className="absolute inset-0 bg-white/10 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out origin-center"></span>
        
        {/* Soft water reflection glow below */}
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-12 bg-cyan-400/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
        
        {/* Water reflection edge line */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

        <span className="relative z-10">{children}</span>
    </a>
);

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
  return (
    <div
        className={`fixed top-0 left-0 w-full z-[60] bg-black/60 backdrop-blur-3xl flex flex-col items-center justify-center transition-all duration-700 ease-in-out border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)]
            ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
        <button 
            onClick={()=> setMenuOpen(false)}
            className={`absolute top-6 right-6 sm:top-8 sm:right-8 w-12 h-12 flex items-center justify-center text-white text-3xl focus:outline-none cursor-pointer rounded-full bg-white/5 border border-white/10 transition-all duration-500 group overflow-hidden hover:scale-105
                ${menuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}
            `}
            style={{ transitionDelay: '300ms' }}
            aria-label='close button'
        >
            <span className="absolute inset-0 bg-white/10 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out origin-center"></span>
            <IoClose className="relative z-10"/>
        </button>

        <MobileNavLink href="#home" onClick={()=>setMenuOpen(false)} menuOpen={menuOpen} delay={100}>Home</MobileNavLink>
        <MobileNavLink href="#about" onClick={()=>setMenuOpen(false)} menuOpen={menuOpen} delay={200}>About</MobileNavLink>
        <MobileNavLink href="#project" onClick={()=>setMenuOpen(false)} menuOpen={menuOpen} delay={300}>Projects</MobileNavLink>
        <MobileNavLink href="#contact" onClick={()=>setMenuOpen(false)} menuOpen={menuOpen} delay={400}>Contact</MobileNavLink>
        
    </div>
  )
}
