import React from 'react'

const Features = () => {
  const features = [
    {
      icon: 'bi-code-slash',
      title: 'Full Stack Development',
      description: 'Expert in React, TypeScript, Node.js, and modern web technologies',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: 'bi-palette',
      title: 'UI/UX Design',
      description: 'Creating beautiful, responsive interfaces with Tailwind CSS',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: 'bi-lightning-charge',
      title: 'Performance Optimization',
      description: 'Building fast, scalable applications with best practices',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: 'bi-shield-check',
      title: 'Enterprise Grade',
      description: 'Production-ready code with security and reliability in mind',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: 'bi-phone',
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect experience on all devices',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: 'bi-gear',
      title: 'Modern Tools',
      description: 'Using latest technologies like Vite, ESLint, and TypeScript',
      color: 'from-indigo-400 to-indigo-600'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Expertise & Capabilities
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Combining technical excellence with creative design to deliver outstanding results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start Your Project?</h3>
            <p className="text-neutral-400 mb-6">Let's build something amazing together with cutting-edge technology</p>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-3 rounded-full text-white font-semibold transition-all duration-200 transform hover:scale-105">
              <i className="bi bi-chat-dots mr-2"></i>
              Start Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
