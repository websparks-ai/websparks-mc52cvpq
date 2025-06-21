import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className={`min-h-screen bg-neutral-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
