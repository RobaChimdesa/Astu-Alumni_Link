import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoreStatus from "./moreStatus";
import { FaSignOutAlt } from "react-icons/fa"; // Ensure this is imported
import {
  FaUsers,
  FaBriefcase,
  FaCalendarAlt,
  FaComment,
  FaFileAlt,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaGraduationCap,
  FaChartPie,
} from "react-icons/fa";
import Sidebar from "./Sidebar";


const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default to false for mobile

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col gap-16">
      <div className="flex flex-1 ">
        {/* Sidebar - Fixed at Left End */}
        {/* <div
          className={`bg-white  text-black  w-72  ml-2   space-y-12 px-4 py-6 fixed inset-y-0 left-0 z-50 transition-transform h-full ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"
            } md:translate-x-0`}
        >
          <button
            className="absolute top-4 right-4 text-white md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes size={24} />
          </button>
          <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4 animate-fade-in-down">
            Quick Links
          </h2>
          <nav className="mt-10 space-y-4">
            <Link
              to="/admin/users"
              className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
            >
              <FaUsers size={20} /> <span className="text-sm sm:text-base">Manage Users</span>
            </Link>
            <Link
              to="/admin/jobs"
              className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
            >
              <FaBriefcase size={20} /> <span className="text-sm sm:text-base">Manage Jobs</span>
            </Link>
            <Link
              to="/admin/internships"
              className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
            >
              <FaGraduationCap size={20} /> <span className="text-sm sm:text-base">Manage Internships</span>
            </Link>
            <Link
              to="/admin/events"
              className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
            >
              <FaCalendarAlt size={20} /> <span className="text-sm sm:text-base">Manage Events</span>
            </Link>
            <Link
              to="/admin/discussions"
              className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
            >
              <FaComment size={20} /> <span className="text-sm sm:text-base">Manage Discussions</span>
            </Link>
            <Link
              to="/admin/resources"
              className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
            >
              <FaFileAlt size={20} /> <span className="text-sm sm:text-base">Manage Resources</span>
            </Link>
            <Link
              to="/admin/status"
              className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
            >
              <FaChartPie size={20} /> <span className="text-sm sm:text-base">User Status</span>
            </Link>
            <Link
              to="/admin/profile"
              className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
            >
              <FaUserCircle size={20} /> <span className="text-sm sm:text-base">Profile</span>
            </Link>
            <Link
              to="/logout"
              className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
            >
              <FaSignOutAlt size={20} /> <span className="text-sm sm:text-base">Logout</span>
            </Link>
          </nav>
        </div> */}
        <Sidebar/>
        {/* Main Content - Centered */}
        <div className="flex-1 flex flex-col max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full mr-0">
          {/* Dashboard Header */}
          <div className="bg-white shadow-md p-4 sm:p-6 flex justify-between items-center max-w-5xl mx-auto w-full rounded-xl">
            <button
              className="text-blue-900 md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars size={24} />
            </button>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Admin Dashboard
            </h1>
          </div>

          {/* Dashboard Content */}
          <div className="flex-1 max-w-5xl mx-auto w-full mt-6 sm:mt-8">
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6">
                Welcome, Admin!
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Use the sidebar to manage users, jobs, events, discussions, internships, and more.
              </p>
              <MoreStatus />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminDashboard;
