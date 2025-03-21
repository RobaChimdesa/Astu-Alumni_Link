import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sidebar from "./Sidebar";

const AlumniDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open by default

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="flex flex-1 ml-20">
        {/* Sidebar (Fixed at Left End) */}
       
          

        {/* Main Content (Centered) */}
        <main className="flex-1 max-w-[80rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full ml-0 md:ml-16 lg:ml-64">
          {/* Dashboard Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
            Alumni Dashboard
          </h1>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Jobs Posted", value: "5", color: "bg-blue-500" },
              { label: "Students Mentored", value: "8", color: "bg-green-500" },
              { label: "Events Attended", value: "3", color: "bg-purple-500" },
              { label: "Resources Shared", value: "12", color: "bg-indigo-500" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`${stat.color} text-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <p className="text-xs sm:text-sm font-medium truncate">{stat.label}</p>
                <p className="text-2xl sm:text-3xl font-bold mt-1 sm:mt-2">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Main Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {/* Recent Activity */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3 sm:mb-4">
                Recent Activity
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Posted a job: Software Engineer - 2 days ago",
                  "Mentored student John Doe - 4 days ago",
                  "Shared resource: 'Career Guide' - 1 week ago",
                ].map((activity, index) => (
                  <li key={index} className="text-gray-700 flex items-center space-x-2 text-sm sm:text-base">
                    <span className="text-blue-500">•</span>
                    <span className="truncate">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3 sm:mb-4">
                Upcoming Events
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { name: "Alumni Networking Night", date: "Mar 15, 2025" },
                  { name: "Tech Talk: AI Trends", date: "Mar 20, 2025" },
                  { name: "Career Fair 2025", date: "Mar 25, 2025" },
                ].map((event, index) => (
                  <li
                    key={index}
                    className="text-gray-700 flex items-center justify-between text-sm sm:text-base"
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <span className="text-blue-500">•</span>
                      <span>{event.name}</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">{event.date}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/alumni/events"
                className="block text-center text-blue-600 font-semibold mt-3 sm:mt-4 text-sm sm:text-base hover:text-blue-800 transition-colors duration-300"
              >
                View All Events
              </Link>
            </div>
          </div>
        </main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AlumniDashboard;