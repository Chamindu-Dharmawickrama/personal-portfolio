import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="relative inline-block px-5 py-1.5 text-[15px] font-semibold tracking-wide text-white/70 hover:text-cyan-300 transition-colors duration-500 group overflow-hidden rounded-full"
  >
    {/* Water drop expanding effect (Ripple) */}
    <span className="absolute inset-0 bg-white/10 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out origin-center"></span>

    {/* Soft water reflection glow below */}
    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-cyan-400/30 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>

    {/* Water reflection edge line */}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

    <span className="relative z-10">{children}</span>
  </a>
);

export const Footer = () => {
  return (
    <footer className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 shadow-[0_-8px_32px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.05)] pt-12 pb-6 overflow-hidden">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.1)_0%,transparent_60%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row md:justify-between items-center md:items-start gap-12">

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
          <a href="#home" className="group relative text-[1.4rem] sm:text-2xl font-black tracking-tighter text-white transition-transform duration-500 hover:scale-105 inline-block">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">CHAMINDU</span>
            <span className="drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"> DHARMAWICKRAMA</span>
          </a>

          <p className="text-gray-400 text-sm max-w-sm font-light md:text-left text-center leading-relaxed">
            Engineering scalable, high-performance web applications with a focus on clean architecture and exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/Chamindu-Dharmawickrema" target="_blank" rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all duration-500 group overflow-hidden hover:scale-105 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <span className="absolute inset-0 bg-white/10 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out origin-center"></span>
              <FaGithub size={20} className="relative z-10" />
            </a>
            <a href="https://www.linkedin.com/in/chamindu-dharmawickrema-066295312/" target="_blank" rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all duration-500 group overflow-hidden hover:scale-105 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <span className="absolute inset-0 bg-white/10 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out origin-center"></span>
              <FaLinkedin size={20} className="relative z-10" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all duration-500 group overflow-hidden hover:scale-105 hover:border-pink-500/40 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]">
              <span className="absolute inset-0 bg-white/10 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out origin-center"></span>
              <FaInstagram size={20} className="relative z-10" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all duration-500 group overflow-hidden hover:scale-105 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span className="absolute inset-0 bg-white/10 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out origin-center"></span>
              <FaXTwitter size={20} className="relative z-10" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
              className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all duration-500 group overflow-hidden hover:scale-105 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <span className="absolute inset-0 bg-white/10 rounded-full scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 ease-out origin-center"></span>
              <FaTiktok size={20} className="relative z-10" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-[11px] font-bold tracking-[4px] uppercase text-white/40 mb-5">Quick Links</h3>
          <div className="flex flex-col items-center md:items-end">
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#project">Projects</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/10 text-center relative z-10 px-4">
        <p className="text-gray-500 text-sm font-light">
          © {new Date().getFullYear()} <span className="text-gray-400 font-medium">Chamindu Dharmawickrama</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
