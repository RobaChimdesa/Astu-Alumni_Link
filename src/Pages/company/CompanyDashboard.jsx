import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sidebar from "./Sidebar";

const CompanyDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar closed by default on mobile

  

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="flex flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Sidebar (Left Column) */}
        
        {/* Main Content Area (Right Side) */}
        <main className="flex-1 md:ml-0 lg:ml-6 space-y-6 w-full mt-16 md:mt-0">
          {/* Dashboard Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
            Company Dashboard
          </h1>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Jobs Posted", value: "10", color: "bg-blue-500" },
              { label: "Applications Received", value: "25", color: "bg-green-500" },
              { label: "Internships Offered", value: "5", color: "bg-purple-500" },
              { label: "Events Hosted", value: "3", color: "bg-indigo-500" },
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Recent Activity */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3 sm:mb-4">
                Recent Activity
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Posted a job: Software Developer - 1 day ago",
                  "Received application from Jane Doe - 2 days ago",
                  "Hosted event: Tech Meetup - 1 week ago",
                ].map((activity, index) => (
                  <li key={index} className="text-gray-700 flex items-center space-x-2 text-sm sm:text-base">
                    <span className="text-blue-500">•</span>
                    <span className="truncate">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-3 sm:mb-4">
                Upcoming Events
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  { name: "Company Networking Night", date: "Mar 18, 2025" },
                  { name: "Job Fair 2025", date: "Mar 22, 2025" },
                  { name: "Tech Innovation Summit", date: "Mar 28, 2025" },
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
                to="/company/event"
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

export default CompanyDashboard;