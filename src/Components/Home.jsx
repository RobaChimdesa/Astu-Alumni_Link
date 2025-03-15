import React from "react";
import AboutUs from "./About";
import Footer from "./Footer";
import logo from '../assets/logo.jpg'
import ll from '../assets/ll.jpg'
import mm from '../assets/mm.jpg'
import Contact from "./Contact";
import FAQ from "./FAQ";
const Home = () => {
  return (
    <div className="bg-gray-100 text-center">
      

{/* <section   id="Home"
  className="h-screen py-16 text-blue-200 bg-cover bg-center"  
  style={{   
    backgroundImage: `url(${mm})`,   
    backgroundBlendMode: 'overlay'
    
  }}  
>  
  <h1 className="text-3xl md:text-6xl font-bold text-center text-black p-4 inline-block text-shadow mt-56">  
    Welcome to <span className="text-white">ASTUALUMNILINK</span>  
  </h1>  
  <p className="text-lg md:text-xl mt-4 text-black font-bold">  
    Connect with alumni, students, faculty, and industry professionals.  
  </p>  
  <a   
    href="/signup"   
    className="mt-6 inline-block bg-blue-700 hover:bg-blue-800 font-semibold px-8 py-4 text-white font-bold rounded-lg transition duration-300"  
  >  
    Get Started  
  </a>  
</section>   */}

<section
  id="Home"
  className="h-screen py-16 text-blue-200 bg-cover bg-center flex items-center justify-center relative"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${mm})`, // Gradient overlay
  }}
>
  {/* Content Container */}
  <div className="text-center space-y-6 animate-fade-in-down">
    {/* Title */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg px-4">
      Welcome to <span className="text-blue-300">ASTUALUMNILINK</span>
    </h1>

    {/* Subtitle */}
    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium mx-auto max-w-xl px-4">
      Connect with alumni, students, faculty, and industry professionals.
    </p>

    {/* Call to Action Button */}
    <a
      href="/signup"
      className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
    >
      Get Started
    </a>
  </div>
</section>
      
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
      
<div id="contact"> <Contact/></div>     
   <FAQ/>
      <Footer />
    </div>
  );
};

export default Home;