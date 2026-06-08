import { useEffect } from "react"
import { TiThMenu } from "react-icons/ti";


export const Navbar = ({menuOpen, setMenuOpen}) =>{

    useEffect(()=>{
        document.body.style.overflow = menuOpen? "hidden" : "";
    },[menuOpen]);


    return(
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-7">
                <div className="flex justify-between items-center h-18">
                    <a href="#home" className="text-[1.7rem] font-bold text-white mt-2 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent">
                        CD
                    </a>

                    {/*mobile navbar*/}
                    <div className="w-7 h-5 text-2xl relative cursor-pointer z-40 md:hidden" onClick={()=> setMenuOpen((prev)=>!prev)}>
                        <TiThMenu/>
                    </div>

                    {/*desktop navbar*/}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 font-semibold hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 font-semibold hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-colors">About</a>
                        <a href="#project" className="text-gray-300 font-semibold hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-colors">Projects</a>
                        <a href="#contact" className="text-gray-300 font-semibold hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-colors">Contact</a>
                    </div>

                </div>
            </div>
        </nav>
    )
}