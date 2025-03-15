import React from 'react'

const About = () => {
  return (
    <div id="About" className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Title with Animation */}
      <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-12 animate-fade-in-down">
        About ASTUALUMNILINK
      </h1>
  
      {/* Grid Layout for Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Mission Section */}
        <section className="relative bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-blue-500">
          <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
            <span className="mr-2">🚀</span> Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to create a strong bridge between students, alumni, faculty,
            and industry professionals by fostering mentorship, networking, and career opportunities.
            ASTUALUMNILINK empowers the ASTU community by connecting people who share knowledge,
            support growth, and build lasting professional relationships.
          </p>
        </section>
  
        {/* Vision Section */}
        <section className="relative bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-indigo-500">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4 flex items-center">
            <span className="mr-2">🌟</span> Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a future where every ASTU graduate is connected with the right mentors,
            career opportunities, and professional networks. By leveraging technology,
            we aim to build an ecosystem where collaboration and knowledge-sharing drive success.
          </p>
        </section>
  
        {/* Goals Section */}
        <section className="relative bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 border-t-4 border-purple-500">
          <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
            <span className="mr-2">🎯</span> Our Goals
          </h2>
          <ul className="space-y-3 text-gray-600">
            {[
              "Provide students with mentorship opportunities from alumni and faculty.",
              "Facilitate job and internship opportunities for graduates.",
              "Enhance professional networking within the ASTU community.",
              "Support lifelong learning and industry collaboration.",
              "Encourage knowledge-sharing through discussions and events.",
            ].map((goal, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  </div>
  )
}

export default About
