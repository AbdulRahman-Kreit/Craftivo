import React from 'react'

export default function Heading({ subTitle, title, description }) {
  return (
    <div className="text-center py-16 px-4 max-w-4xl mx-auto">
      <div className="relative inline-block mb-3">
          <p className="text-red-500 text-sm 
          font-semibold tracking-widest uppercase relative z-10 mb-2">
              {subTitle}
          </p>
          <span className="absolute left-1/2 transform 
          -translate-x-1/2 bottom-0 h-0.5 w-1/2 bg-red-500"></span>
      </div>
      <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
          {title}
      </h2>
      <p className="text-gray-400 text-lg leading-relaxed">
          {description}
      </p>
    </div>
  )
}
