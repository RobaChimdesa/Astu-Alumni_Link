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
       
        <Sidebar/>
        {/* Main Content - Centered */}
        <div className="flex-1 flex flex-col max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full mr-0">
          {/* Dashboard Header */}
          <div className="bg-white shadow-md p-4 sm:p-6 flex justify-between items-center max-w-5xl mx-auto w-full rounded-xl">
            {/* <button
              className="text-blue-900 md:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars size={24} />
            </button> */}
            <h1 className="text-2xl sm:text-xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 ">
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
