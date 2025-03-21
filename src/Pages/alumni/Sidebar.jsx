import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBriefcase, FaBook, FaComments, FaCalendarAlt, FaBell, FaUserCircle, FaSignOutAlt, FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen = false, toggleSidebar }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen); // Use prop or default to false

    const handleToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
        if (toggleSidebar) toggleSidebar(!isSidebarOpen); // Optional callback for parent
    };

    return (
        <div
            className={`bg-white text-black w-72 ml-2 space-y-12 px-4 py-6 fixed inset-y-0 left-0 z-50 transition-transform h-full ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-64"
            } md:translate-x-0`}
        >
            {/* Close Button (Mobile Only) */}
            <button
                className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 md:hidden transition-colors duration-300"
                onClick={handleToggle}
            >
                <FaTimes size={24} />
            </button>

            {/* Sidebar Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4 animate-fade-in-down">
                Quick Links
            </h2>

            {/* Navigation Links */}
            <nav className="mt-10 space-y-4">
                <Link
                    to="/dashboard-alumni"
                    className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FaTachometerAlt size={20} /> <span className="text-sm sm:text-base">Dashboard</span>
                </Link>
                <Link
                    to="/alumni/jobs"
                    className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FaBriefcase size={20} /> <span className="text-sm sm:text-base">Job Listings</span>
                </Link>
                <Link
                    to="/alumni/resources"
                    className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FaBook size={20} /> <span className="text-sm sm:text-base">Upload Resources</span>
                </Link>
                <Link
                    to="/alumni/discussions"
                    className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FaComments size={20} /> <span className="text-sm sm:text-base">Discussion Forum</span>
                </Link>
                <Link
                    to="/alumni/events"
                    className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FaCalendarAlt size={20} /> <span className="text-sm sm:text-base">Events</span>
                </Link>
                <Link
                    to="/alumni/notifications"
                    className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FaBell size={20} /> <span className="text-sm sm:text-base">Notifications</span>
                </Link>
                <Link
                    to="/alumni/profile"
                    className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FaUserCircle size={20} /> <span className="text-sm sm:text-base">Profile</span>
                </Link>
                <Link
                    to="/"
                    className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <FaSignOutAlt size={20} /> <span className="text-sm sm:text-base">Logout</span>
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;