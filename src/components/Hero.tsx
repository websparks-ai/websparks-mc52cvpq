import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const texts = [
    'Hello! I\'m WebSparks AI',
    'Expert Full Stack Engineer',
    'Creating Amazing Experiences',
    'Building the Future'
  ]

  useEffect(() => {
    const typeText = () => {
      const fullText = texts[currentIndex]
      
      if (isTyping) {
        if (currentText.length < fullText.length) {
          const timer = window.setTimeout(() => {
            setCurrentText(fullText.slice(0, currentText.length + 1))
          }, 100)
          return () => window.clearTimeout(timer)
        } else {
          const timer = window.setTimeout(() => {
            setIsTyping(false)
          }, 2000)
          return () => window.clearTimeout(timer)
        }
      } else {
        if (currentText.length > 0) {
          const timer = window.setTimeout(() => {
            setCurrentText(currentText.slice(0, -1))
          }, 50)
          return () => window.clearTimeout(timer)
        } else {
          setCurrentIndex((prev) => (prev + 1) % texts.length)
          setIsTyping(true)
        }
      }
    }

    const cleanup = typeText()
    return cleanup
  }, [currentText, currentIndex, isTyping, texts])

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <i className="bi bi-robot text-6xl text-white"></i>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-neutral-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional AI Software Engineer with 20+ years of expertise in creating 
            enterprise-grade applications and award-winning interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              <i className="bi bi-play-circle-fill mr-2"></i>
              Start Building
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 transform hover:scale-105">
              <i className="bi bi-info-circle mr-2"></i>
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
              <div className="text-neutral-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-neutral-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-neutral-400">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
