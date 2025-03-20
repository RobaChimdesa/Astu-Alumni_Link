import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBriefcase, FaBook, FaComments, FaCalendarAlt, FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <aside
            className={`bg-white rounded-r-xl shadow-xl p-4 sm:p-6 transition-all duration-300 fixed top-16 left-0 h-[calc(100vh-4rem)] z-20 ${isSidebarOpen ? "w-64" : "w-16"
                }`}
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
                    <Link
                        to="/alumni/dashboard"
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
                </div>
            )}
        </aside>
    );
};

export default Sidebar;