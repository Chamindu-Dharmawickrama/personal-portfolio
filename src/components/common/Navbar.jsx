import { useEffect } from "react"
import { TiThMenu } from "react-icons/ti";

// nav
const NavLink = ({ href, children }) => (
    <a
        href={href}
        className="relative px-5 py-2.5 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-500 group overflow-hidden rounded-full"
    >
        {/* Water drop expanding effect (Ripple) */}
        <span className="absolute inset-0 bg-white/10 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition duration-700 ease-out origin-center"></span>

        {/* Soft water reflection glow below */}
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-cyan-400/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>

        {/* Water reflection edge line */}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

        <span className="relative z-10">{children}</span>
    </a>
);

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed w-full z-50 top-2 px-4 sm:top-4 sm:px-6">
            <div className="mx-auto max-w-7xl bg-white/[0.05] backdrop-blur-md md:backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)] rounded-full py-3 px-6 transform-gpu will-change-transform">
                <div className="flex justify-between items-center">
                    <a href="#home" className="group relative text-2xl font-black tracking-tighter text-white transition-transform duration-500 hover:scale-105">
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">C</span>
                        <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">D</span>
                    </a>

                    {/*mobile navbar toggle*/}
                    <div
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-xl cursor-pointer z-50 md:hidden hover:bg-white/10 hover:scale-105 transition duration-500 ease-out relative overflow-hidden group"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        <span className="absolute inset-0 bg-white/10 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition duration-700 ease-out origin-center"></span>
                        <TiThMenu className="text-white relative z-10" />
                    </div>

                    {/*desktop navbar*/}
                    <div className="hidden md:flex items-center space-x-1 bg-white/[0.02] px-2 py-1 rounded-full border border-white/[0.05] shadow-[inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-3xl transform-gpu will-change-transform">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#project">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>

                </div>
            </div>
        </nav>
    )
}