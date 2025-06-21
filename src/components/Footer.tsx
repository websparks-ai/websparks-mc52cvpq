import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
                <i className="bi bi-lightning-charge-fill text-white text-sm"></i>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                WebSparks AI
              </span>
            </div>
            <p className="text-neutral-400 mb-4 max-w-md">
              Expert AI Software Engineer creating enterprise-grade applications with modern technologies and best practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors duration-200">
                <i className="bi bi-github text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-200">
                <i className="bi bi-linkedin text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors duration-200">
                <i className="bi bi-twitter text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Web Development</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Mobile Apps</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">UI/UX Design</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Technologies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">React & TypeScript</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Node.js</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Tailwind CSS</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors duration-200">Vite</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2025 WebSparks AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              <span className="text-neutral-500 text-sm">
                Powered by <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">Websparks AI</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
