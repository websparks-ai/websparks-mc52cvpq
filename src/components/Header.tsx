import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center">
              <i className="bi bi-lightning-charge-fill text-white text-sm"></i>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              WebSparks AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-neutral-300 hover:text-white transition-colors duration-200">Home</a>
            <a href="#features" className="text-neutral-300 hover:text-white transition-colors duration-200">Features</a>
            <a href="#about" className="text-neutral-300 hover:text-white transition-colors duration-200">About</a>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-2 rounded-full text-white font-medium transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`bi ${isMenuOpen ? 'bi-x' : 'bi-list'} text-2xl text-white`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-neutral-300 hover:text-white transition-colors duration-200">Home</a>
              <a href="#features" className="text-neutral-300 hover:text-white transition-colors duration-200">Features</a>
              <a href="#about" className="text-neutral-300 hover:text-white transition-colors duration-200">About</a>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-6 py-2 rounded-full text-white font-medium transition-all duration-200 w-fit">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
