import React, { useState } from "react";
import { Link } from "react-router-dom";
import MoreStatus from "./moreStatus";
import { 
  FaUsers, FaBriefcase, FaCalendarAlt, FaComment, FaFileAlt, FaBars, FaTimes, 
  FaUserCircle, FaGraduationCap, FaChartPie 
} from "react-icons/fa";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-blue-900 text-white w-64 space-y-6 px-4 py-6 transition-transform  mt-24 h-screen
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0 fixed md:relative h-full`}>
        <button
          className="absolute top-4 right-4 text-white md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-bold text-center">Admin Panel</h2>
        <nav className="mt-10 space-y-4">
          <Link to="/admin/users" className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-700">
            <FaUsers /> <span>Manage Users</span>
          </Link>
          <Link to="/admin/jobs" className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-700">
            <FaBriefcase /> <span>Manage Jobs</span>
          </Link>
          <Link to="/admin/internships" className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-700">
            <FaGraduationCap /> <span>Manage Internships</span>
          </Link>
          <Link to="/admin/events" className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-700">
            <FaCalendarAlt /> <span>Manage Events</span>
          </Link>
          <Link to="/admin/discussions" className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-700">
            <FaComment /> <span>Manage Discussions</span>
          </Link>
          <Link to="/admin/resources" className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-700">
            <FaFileAlt /> <span>Manage Resources</span>
          </Link>
         
         
          <Link to="/admin/status" className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-700">
            <FaChartPie /> <span>User Status</span>
          </Link>
          <Link to="/admin/profile" className="flex items-center space-x-2 p-3 rounded-md hover:bg-blue-700">
            <FaUserCircle /> <span>Profile</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
          <button className="text-blue-900 md:hidden" onClick={() => setIsSidebarOpen(true)}>
            <FaBars size={24} />
          </button>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Welcome, Admin!</h2>
          <p className="text-gray-600">Use the sidebar to manage users, jobs, events, discussions, internships, and more.</p>
          {/* {MoreStatus} */}
          <MoreStatus/>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
