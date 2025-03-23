// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaTachometerAlt, FaUserCircle, FaBook, FaCalendarAlt, FaFileAlt, FaComments, FaBell, FaSignOutAlt, FaTimes } from "react-icons/fa";

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
//                     to="/dashboard-faculty"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                     onClick={() => setIsSidebarOpen(false)}
//                 >
//                     <FaTachometerAlt size={20} /> <span className="text-sm sm:text-base">Dashboard</span>
//                 </Link>
//                 <Link
//                     to="/faculty/profile"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                     onClick={() => setIsSidebarOpen(false)}
//                 >
//                     <FaUserCircle size={20} /> <span className="text-sm sm:text-base">Profile</span>
//                 </Link>
//                 <Link
//                     to="/faculty/mentorship"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                     onClick={() => setIsSidebarOpen(false)}
//                 >
//                     <FaBook size={20} /> <span className="text-sm sm:text-base">Mentorship Requests</span>
//                 </Link>
//                 <Link
//                     to="/faculty/events"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                     onClick={() => setIsSidebarOpen(false)}
//                 >
//                     <FaCalendarAlt size={20} /> <span className="text-sm sm:text-base">Manage Events</span>
//                 </Link>
//                 <Link
//                     to="/faculty/resources"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                     onClick={() => setIsSidebarOpen(false)}
//                 >
//                     <FaFileAlt size={20} /> <span className="text-sm sm:text-base">Upload Resources</span>
//                 </Link>
//                 <Link
//                     to="/faculty/discussions"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                     onClick={() => setIsSidebarOpen(false)}
//                 >
//                     <FaComments size={20} /> <span className="text-sm sm:text-base">Discussion Forum</span>
//                 </Link>
//                 <Link
//                     to="/faculty/notifications"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                     onClick={() => setIsSidebarOpen(false)}
//                 >
//                     <FaBell size={20} /> <span className="text-sm sm:text-base">Notifications</span>
//                 </Link>
//                 <Link
//                     to="/"
//                     className="block bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-between border-l-4 border-blue-500 transform hover:scale-[1.02]"
//                     onClick={() => setIsSidebarOpen(false)}
//                 >
//                     <FaSignOutAlt size={20} /> <span className="text-sm sm:text-base">Logout</span>
//                 </Link>
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaUserCircle, FaBook, FaCalendarAlt, FaFileAlt, FaComments, FaBell, FaSignOutAlt, FaTimes, FaBars } from "react-icons/fa";

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
                className={`bg-white text-black w-72 ml-2 space-y-12 px-4 py-6 fixed inset-y-0 left-0 z-50 transition-transform h-full ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                {/* Close Button (Mobile Only) */}
                <button
                    className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 md:hidden transition-colors duration-300"
                    onClick={handleToggle}
                >
                    <FaTimes size={24} />
                </button>

                {/* Sidebar Title */}
                <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
                    Quick Links
                </h2>

                {/* Navigation Links */}
                <nav className="mt-10 space-y-4">
                    <Link
                        to="/dashboard-faculty"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaTachometerAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Dashboard</span>
                    </Link>
                    <Link
                        to="/faculty/profile"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaUserCircle size={20} /> <span className="ml-2 text-sm sm:text-base">Profile</span>
                    </Link>
                    <Link
                        to="/faculty/mentorship"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaBook size={20} /> <span className="ml-2 text-sm sm:text-base">Mentorship Requests</span>
                    </Link>
                    <Link
                        to="/faculty/events"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaCalendarAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Manage Events</span>
                    </Link>
                    <Link
                        to="/faculty/resources"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaFileAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Upload Resources</span>
                    </Link>
                    <Link
                        to="/faculty/discussions"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaComments size={20} /> <span className="ml-2 text-sm sm:text-base">Discussion Forum</span>
                    </Link>
                    <Link
                        to="/faculty/notifications"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaBell size={20} /> <span className="ml-2 text-sm sm:text-base">Notifications</span>
                    </Link>
                    <Link
                        to="/"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaSignOutAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Logout</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;