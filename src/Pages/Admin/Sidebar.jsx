// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaTachometerAlt, FaSignOutAlt, FaUsers, FaBriefcase, FaCalendarAlt, FaComment, FaFileAlt, FaTimes, FaUserCircle, FaGraduationCap, FaChartPie } from "react-icons/fa";

// import Footer from "../../Components/Footer";

// const Sidebar = ({ isOpen = false, toggleSidebar }) => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen); // Use prop or default to false

//     const handleToggle = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//         if (toggleSidebar) toggleSidebar(!isSidebarOpen); // Optional callback for parent
//     };

//     return (
//         <div
//             className={`bg-white text-black w-72 ml-2 space-y-12 px-4 py-6 fixed inset-y-0 left-0 z-50 transition-transform h-full ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"
//                 } md:translate-x-0`}
//         >
//             {/* Close Button (Mobile Only) */}
//             <button
//                 className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 md:hidden transition-colors duration-300"
//                 onClick={handleToggle}
//             >
//                 <FaTimes size={24} />
//             </button>

//             {/* Sidebar Title */}
//             <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4 animate-fade-in-down">
//                 Quick Links
//             </h2>

//             {/* Navigation Links */}
//             <nav className="mt-10 space-y-4">
//                 <Link
//                     to="/dashboard-admin"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                 >
//                     <FaTachometerAlt size={20} /> <span className="text-sm sm:text-base">Dashboard</span>
//                 </Link>
//                 <Link
//                     to="/admin/users"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                 >
//                     <FaUsers size={20} /> <span className="text-sm sm:text-base">Manage Users</span>
//                 </Link>
//                 <Link
//                     to="/admin/jobs"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                 >
//                     <FaBriefcase size={20} /> <span className="text-sm sm:text-base">Manage Jobs</span>
//                 </Link>
//                 <Link
//                     to="/admin/internships"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                 >
//                     <FaGraduationCap size={20} /> <span className="text-sm sm:text-base">Manage Internships</span>
//                 </Link>
//                 <Link
//                     to="/admin/events"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                 >
//                     <FaCalendarAlt size={20} /> <span className="text-sm sm:text-base">Manage Events</span>
//                 </Link>
//                 <Link
//                     to="/admin/discussions"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                 >
//                     <FaComment size={20} /> <span className="text-sm sm:text-base">Manage Discussions</span>
//                 </Link>
//                 <Link
//                     to="/admin/resources"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                 >
//                     <FaFileAlt size={20} /> <span className="text-sm sm:text-base">Manage Resources</span>
//                 </Link>
//                 <Link
//                     to="/admin/status"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                 >
//                     <FaChartPie size={20} /> <span className="text-sm sm:text-base">User Status</span>
//                 </Link>
//                 <Link
//                     to="/admin/profile"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                 >
//                     <FaUserCircle size={20} /> <span className="text-sm sm:text-base">Profile</span>
//                 </Link>
//                 <Link
//                     to="/"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                 >
//                     <FaSignOutAlt size={20} /> <span className="text-sm sm:text-base">Logout</span>
//                 </Link>
//             </nav>
//             {/* <Footer/> */}
//         </div>
//     );
// };

// export default Sidebar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaSignOutAlt, FaUsers, FaBriefcase, FaCalendarAlt, FaComment, FaFileAlt, FaTimes, FaUserCircle, FaGraduationCap, FaChartPie, FaBars } from "react-icons/fa";

const Sidebar = ({ isOpen = false, toggleSidebar }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);

    const handleToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
        if (toggleSidebar) toggleSidebar(!isSidebarOpen);
    };

    return (
        <div className="relative">
            {/* Hamburger Menu Icon for Mobile */}
            <button
                className={`md:hidden text-blue-600 p-2 transition-colors duration-300 ${isSidebarOpen ? "hidden" : "block"}`}
                onClick={handleToggle}
            >
                <FaBars size={24} />
            </button>

            {/* Sidebar */}
            <div
                className={`bg-white text-black w-64 md:w-72 lg:w-80 ml-2 space-y-12 px-4 py-6 fixed inset-y-0 left-0 z-50 transition-transform h-full ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 overflow-y-auto`}
            >
                {/* Close Button (Mobile Only) */}
                <button
                    className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 md:hidden transition-colors duration-300"
                    onClick={handleToggle}
                >
                    <FaTimes size={24} />
                </button>

                <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
                    Quick Links
                </h2>

                <nav className="mt-10 space-y-4">
                    <Link to="/dashboard-admin" className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105">
                        <FaTachometerAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Dashboard</span>
                    </Link>
                    <Link to="/admin/users" className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105">
                        <FaUsers size={20} /> <span className="ml-2 text-sm sm:text-base">Manage Users</span>
                    </Link>
                    <Link to="/admin/jobs" className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105">
                        <FaBriefcase size={20} /> <span className="ml-2 text-sm sm:text-base">Manage Jobs</span>
                    </Link>
                    <Link to="/admin/internships" className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105">
                        <FaGraduationCap size={20} /> <span className="ml-2 text-sm sm:text-base">Manage Internships</span>
                    </Link>
                    <Link to="/admin/events" className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105">
                        <FaCalendarAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Manage Events</span>
                    </Link>
                    <Link to="/admin/discussions" className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105">
                        <FaComment size={20} /> <span className="ml-2 text-sm sm:text-base">Manage Discussions</span>
                    </Link>
                    <Link to="/admin/resources" className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105">
                        <FaFileAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Manage Resources</span>
                    </Link>
                    <Link to="/admin/status" className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105">
                        <FaChartPie size={20} /> <span className="ml-2 text-sm sm:text-base">User Status</span>
                    </Link>
                    <Link to="/admin/profile" className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105">
                        <FaUserCircle size={20} /> <span className="ml-2 text-sm sm:text-base">Profile</span>
                    </Link>
                    <Link to="/" className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105">
                        <FaSignOutAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Logout</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
