import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const FacultyDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open by default on mobile for consistency

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Sidebar (Left Column) */}
        <aside
          className={`bg-white rounded-xl shadow-xl p-4 sm:p-6 transition-all duration-300 fixed md:static top-16 left-0 h-auto md:h-auto z-20 ${
            isSidebarOpen ? "w-64" : "w-16"
          } md:w-1/4 lg:w-1/5`}
        >
          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex justify-end text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-4"
            aria-label={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <span className="text-2xl">{isSidebarOpen ? "✖" : "☰"}</span>
          </button>

          {/* Sidebar Content */}
          {isSidebarOpen && (
            <div className="space-y-3 animate-fade-in">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4 animate-fade-in-down">
                Quick Links
              </h2>
              {[
                { to: "/faculty/profile", text: "Profile", emoji: "👤" },
                { to: "/faculty/mentorship", text: "Mentorship Requests", emoji: "📖" },
                { to: "/faculty/events", text: "Manage Events", emoji: "🎉" },
                { to: "/faculty/resources", text: "Upload Resources", emoji: "📚" },
                { to: "/faculty/discussions", text: "Discussion Forum", emoji: "💬" },
                { to: "/faculty/notifications", text: "Notifications", emoji: "🔔" },
              ].map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click (mobile)
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <span className="text-lg sm:text-xl">{link.emoji}</span>
                    <span className="text-sm sm:text-base font-semibold text-gray-800">
                      {link.text}
                    </span>
                  </div>
                  <span className="text-blue-600 font-bold text-md sm:text-lg">→</span>
                </Link>
              ))}
            </div>
          )}
        </aside>

        {/* Main Content Area (Right Side) */}
        <main className="flex-1 md:ml-0 lg:ml-6 space-y-6 w-full mt-16 md:mt-0">
          {/* Dashboard Header */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
            Faculty Dashboard
          </h1>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Mentorships Active", value: "6", color: "bg-blue-500" },
              { label: "Events Managed", value: "4", color: "bg-green-500" },
              { label: "Resources Uploaded", value: "10", color: "bg-purple-500" },
              { label: "Discussions Moderated", value: "15", color: "bg-indigo-500" },
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
                  "Approved mentorship request - 1 day ago",
                  "Uploaded resource: 'Teaching Guide' - 3 days ago",
                  "Created event: 'Faculty Workshop' - 5 days ago",
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
                  { name: "Faculty Workshop", date: "Mar 18, 2025" },
                  { name: "Curriculum Review Meeting", date: "Mar 22, 2025" },
                  { name: "Research Symposium", date: "Mar 28, 2025" },
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
                to="/faculty/events"
                className="block text-center text-blue-600 font-semibold mt-3 sm:mt-4 text-sm sm:text-base hover:text-blue-800 transition-colors duration-300"
              >
                View All Events
              </Link>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default FacultyDashboard;