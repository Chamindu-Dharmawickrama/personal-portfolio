import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="bg-[rgba(10,10,10,0.3)] backdrop-blur-lg border-b border-white/20 shadow-lg text-white pt-10 pb-5 border-t ">
      <div className="max-w-6xl mx-auto px-6 md:flex md:justify-between md:items-start">
       
        <div className="mb-8 md:mb-0">
          <h2 className="text-xl font-bold mb-2">CHAMINDU DHARMAWICKRAMA</h2>
          <p className="text-gray-400 mt-4">
            <a href="mailto:chamindudharmawickrema@gmail.com" className="hover:text-blue-500 transition">
                chamindudharmawickrema@gmail.com
            </a>
          </p>

          <div className="flex gap-4 mt-5">
            <a href="https://github.com/Chamindu-Dharmawickrema" target="_blank" rel="noopener noreferrer" className="p-2 rounded text-white hover:bg-blue-900 transition">
              <FaGithub size={23} />
            </a>
            <a href="https://www.linkedin.com/in/chamindu-dharmawickrema-066295312/" target="_blank" rel="noopener noreferrer" className="p-2 rounded text-white hover:bg-blue-900  transition">
              <FaLinkedin size={23} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-[15px]">
            <li><a href="#home" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#project" className="hover:text-blue-500 transition">Projects</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10">
        © Chamindu Dharmawickrama. All rights reserved.
      </div>
    </footer>
  )
}
