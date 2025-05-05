import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBuilding, FaBullhorn, FaFileAlt, FaGraduationCap, FaBell, FaCalendarAlt, FaSignOutAlt, FaTimes, FaBars } from "react-icons/fa";

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

                <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
                    Quick Links
                </h2>

                <nav className="mt-10 space-y-4">
                    <Link
                        to="/dashboard-company"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaTachometerAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Dashboard</span>
                    </Link>
                    <Link
                        to="/company/profile"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaBuilding size={20} /> <span className="ml-2 text-sm sm:text-base">Company Profile</span>
                    </Link>
                    <Link
                        to="/company/post-job"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaBullhorn size={20} /> <span className="ml-2 text-sm sm:text-base">Post Job Listing</span>
                    </Link>
                    <Link
                        to="/company/view-applications"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaFileAlt size={20} /> <span className="ml-2 text-sm sm:text-base">View Applications</span>
                    </Link>
                    <Link
                        to="/company/internships"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaGraduationCap size={20} /> <span className="ml-2 text-sm sm:text-base">Post Internships</span>
                    </Link>
                    <Link
                        to="/company/notifications"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaBell size={20} /> <span className="ml-2 text-sm sm:text-base">Notifications</span>
                    </Link>
                    <Link
                        to="/company/event"
                        className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        <FaCalendarAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Event</span>
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




// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import { FaTachometerAlt, FaBuilding, FaBullhorn, FaFileAlt, FaGraduationCap, FaBell, FaCalendarAlt, FaSignOutAlt, FaTimes, FaBars } from "react-icons/fa";
// import { CompanyContext } from "./ViewApplications";

// const Sidebar = ({ isOpen = false, toggleSidebar }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);
//   const { pendingCount } = useContext(CompanyContext) || { pendingCount: 0 };

//   const handleToggle = () => {
//     const newState = !isSidebarOpen;
//     setIsSidebarOpen(newState);
//     if (toggleSidebar) toggleSidebar(newState);
//   };

//   return (
//     <div className="relative">
//       {/* Hamburger Menu Icon for Mobile */}
//       <button
//         className={`md:hidden text-blue-600 p-2 transition-colors duration-300 ${isSidebarOpen ? "hidden" : "block"}`}
//         onClick={handleToggle}
//       >
//         <FaBars size={24} />
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`bg-white text-black w-72 ml-2 space-y-12 px-4 py-6 fixed inset-y-0 left-0 z-50 transition-transform h-full ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
//       >
//         {/* Close Button (Mobile Only) */}
//         <button
//           className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 md:hidden transition-colors duration-300"
//           onClick={handleToggle}
//         >
//           <FaTimes size={24} />
//         </button>

//         <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">
//           Quick Links
//         </h2>

//         <nav className="mt-10 space-y-4">
//           <Link
//             to="/dashboard-company"
//             className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <FaTachometerAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Dashboard</span>
//           </Link>
//           <Link
//             to="/company/profile"
//             className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <FaBuilding size={20} /> <span className="ml-2 text-sm sm:text-base">Company Profile</span>
//           </Link>
//           <Link
//             to="/company/post-job"
//             className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <FaBullhorn size={20} /> <span className="ml-2 text-sm sm:text-base">Post Job Listing</span>
//           </Link>
//           <Link
//             to="/company/view-applications"
//             className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105 relative"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <FaFileAlt size={20} /> <span className="ml-2 text-sm sm:text-base">View Applications</span>
//             {pendingCount > 0 && (
//               <span className="absolute top-1 right-2 sm:right-3 bg-blue-600 text-white text-xs font-semibold rounded-full h-4 sm:h-5 w-4 sm:w-5 flex items-center justify-center">
//                 {pendingCount}
//               </span>
//             )}
//           </Link>
//           <Link
//             to="/company/internships"
//             className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <FaGraduationCap size={20} /> <span className="ml-2 text-sm sm:text-base">Post Internships</span>
//           </Link>
//           <Link
//             to="/company/notifications"
//             className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <FaBell size={20} /> <span className="ml-2 text-sm sm:text-base">Notifications</span>
//           </Link>
//           <Link
//             to="/company/event"
//             className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <FaCalendarAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Event</span>
//           </Link>
//           <Link
//             to="/"
//             className="flex items-center p-3 sm:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg border-l-4 border-blue-500 transform hover:scale-105"
//             onClick={() => setIsSidebarOpen(false)}
//           >
//             <FaSignOutAlt size={20} /> <span className="ml-2 text-sm sm:text-base">Logout</span>
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
