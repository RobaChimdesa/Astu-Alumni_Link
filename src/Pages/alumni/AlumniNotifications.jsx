// import React, { useState, useEffect, createContext, useMemo } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import { FaCheckCircle, FaTimesCircle, FaBell, FaComment, FaBars } from "react-icons/fa";

// // Context for sharing unread notification count
// export const NotificationContext = createContext();

// const AlumniNotifications = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [filter, setFilter] = useState("all");
//   const [error, setError] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   // Compute unread count
//   const unreadCount = useMemo(() => {
//     return notifications.filter((notif) => !notif.read).length;
//   }, [notifications]);

//   useEffect(() => {
//     fetchNotifications();
//   }, []);

//   const fetchNotifications = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       if (!token) {
//         setError("Please log in to view notifications.");
//         navigate("/signin", { state: { error: "Please log in to view notifications." } });
//         return;
//       }
//       const response = await axios.get("http://localhost:8000/api/notifications/", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNotifications(response.data);
//       setError("");
//     } catch (err) {
//       console.error("Failed to fetch notifications:", err);
//       setError(err.response?.data?.error || "Failed to fetch notifications.");
//       if (err.response?.status === 401) {
//         localStorage.removeItem("accessToken");
//         navigate("/signin", { state: { error: "Please log in to view notifications." } });
//       }
//     }
//   };

//   const markAsRead = async (id) => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       await axios.put(
//         `http://localhost:8000/api/notifications/${id}/`,
//         { read: true },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setNotifications(
//         notifications.map((notif) =>
//           notif.id === id ? { ...notif, read: true } : notif
//         )
//       );
//     } catch (err) {
//       console.error("Failed to mark as read:", err);
//       setError("Failed to mark notification as read.");
//     }
//   };

//   const deleteNotification = async (id) => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       await axios.delete(`http://localhost:8000/api/notifications/${id}/`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setNotifications(notifications.filter((notif) => notif.id !== id));
//     } catch (err) {
//       console.error("Failed to delete notification:", err);
//       setError("Failed to delete notification.");
//     }
//   };

//   const filteredNotifications = notifications.filter((notif) => {
//     if (filter === "all") return true;
//     if (filter === "unread") return !notif.read;
//     if (filter === "job_application") return notif.type === "job_application";
//     if (filter === "event") return notif.type === "event";
//     if (filter === "discussion") return notif.type === "discussion";
//     return true;
//   });

//   const getNotificationIcon = (message, type) => {
//     if (type === "job_application") {
//       if (message.includes("Accepted")) return <FaCheckCircle className="text-green-500 mr-1 sm:mr-2 text-base sm:text-lg" />;
//       if (message.includes("Rejected")) return <FaTimesCircle className="text-red-500 mr-1 sm:mr-2 text-base sm:text-lg" />;
//     }
//     if (type === "event") return <FaBell className="text-blue-500 mr-1 sm:mr-2 text-base sm:text-lg" />;
//     if (type === "discussion") return <FaComment className="text-purple-500 mr-1 sm:mr-2 text-base sm:text-lg" />;
//     return null;
//   };

//   return (
//     <NotificationContext.Provider value={{ unreadCount }}>
//       <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
//         <div className="flex flex-1 flex-col w-full">
//           {/* Mobile Sidebar Toggle */}
//           <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-sm">
//             <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//               Notifications
//             </h1>
//             <button
//               onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//               className="text-gray-600 hover:text-blue-600 focus:outline-none"
//             >
//               <FaBars className="text-xl" />
//             </button>
//           </div>
//           {/* Sidebar */}
//           <div
//             className={`md:flex md:w-64 md:min-w-[16rem] md:flex-col bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//               isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//             } md:translate-x-0 fixed md:static top-0 left-0 h-full z-20 w-64`}
//           >
//             <Sidebar isOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />
//           </div>
//           {/* Overlay for Mobile Sidebar */}
//           {isSidebarOpen && (
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
//               onClick={() => setIsSidebarOpen(false)}
//             ></div>
//           )}
//           {/* Main Content */}
//           <div className="flex-1 w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
//             <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
//               <h1 className="hidden md:block text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
//                 Notifications
//               </h1>
//               {error && (
//                 <p className="text-red-500 text-center text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
//                   {error}
//                 </p>
//               )}
//               {/* Filter Form */}
//               <div className="mb-4 sm:mb-6 bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-sm">
//                 <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
//                   Filter Notifications
//                 </h2>
//                 <select
//                   value={filter}
//                   onChange={(e) => setFilter(e.target.value)}
//                   className="w-full p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm md:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//                 >
//                   <option value="all">All Notifications</option>
//                   <option value="unread">Unread Only</option>
//                   <option value="job_application">Job Applications</option>
//                   <option value="event">Events</option>
//                   <option value="discussion">Discussions</option>
//                 </select>
//               </div>
//               {/* Notification Listings */}
//               <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm">
//                 {filteredNotifications.length > 0 ? (
//                   <div className="space-y-3 sm:space-y-4 md:space-y-5">
//                     {filteredNotifications.map((notif) => (
//                       <div
//                         key={notif.id}
//                         className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 sm:p-3 md:p-4 rounded-md shadow-sm transition-all duration-300 hover:shadow-md ${
//                           notif.read ? "bg-gray-50" : "bg-blue-50"
//                         }`}
//                       >
//                         <div className="flex items-center flex-1 mb-2 sm:mb-0">
//                           {getNotificationIcon(notif.message, notif.type)}
//                           <span className="text-gray-800 text-xs sm:text-sm md:text-base font-medium break-words">
//                             {notif.message}
//                           </span>
//                         </div>
//                         <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-3 w-full sm:w-auto">
//                           {!notif.read && (
//                             <button
//                               className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-md hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-sm"
//                               onClick={() => markAsRead(notif.id)}
//                             >
//                               Mark as Read
//                             </button>
//                           )}
//                           <button
//                             className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 text-white text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-md hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-sm"
//                             onClick={() => deleteNotification(notif.id)}
//                           >
//                             Delete
//                           </button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <p className="text-gray-600 text-center text-xs sm:text-sm md:text-base py-3 sm:py-4 md:py-6">
//                     No notifications available.
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </NotificationContext.Provider>
//   );
// };

// export default AlumniNotifications;

import React, { useState, useEffect, createContext, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaCheckCircle, FaTimesCircle, FaBell, FaComment, FaBars } from "react-icons/fa";

// Context for sharing unread notification count
export const NotificationContext = createContext();

const AlumniNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Compute unread count
  const unreadCount = useMemo(() => {
    return notifications.filter((notif) => !notif.read).length;
  }, [notifications]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("Please log in to view notifications.");
        navigate("/signin", { state: { error: "Please log in to view notifications." } });
        return;
      }
      const response = await axios.get("http://localhost:8000/api/notifications/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotifications(response.data);
      setError("");
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
      setError(err.response?.data?.error || "Failed to fetch notifications.");
      if (err.response?.status === 401) {
        localStorage.removeItem("accessToken");
        navigate("/signin", { state: { error: "Please log in to view notifications." } });
      }
    }
  };

  const markAsRead = async (id) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.put(
        `http://localhost:8000/api/notifications/${id}/`,
        { read: true },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNotifications(
        notifications.map((notif) =>
          notif.id === id ? { ...notif, read: true } : notif
        )
      );
    } catch (err) {
      console.error("Failed to mark as read:", err);
      setError("Failed to mark notification as read.");
    }
  };

  const deleteNotification = async (id) => {
    try {
      const token = localStorage.getItem("accessToken");
      await axios.delete(`http://localhost:8000/api/notifications/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotifications(notifications.filter((notif) => notif.id !== id));
    } catch (err) {
      console.error("Failed to delete notification:", err);
      setError("Failed to delete notification.");
    }
  };

  const filteredNotifications = notifications.filter((notif) => {
    if (filter === "all") return true;
    if (filter === "unread") return !notif.read;
    if (filter === "job_application") return notif.type === "job_application";
    if (filter === "event") return notif.type === "event";
    if (filter === "discussion") return notif.type === "discussion";
    return true;
  });

  const getNotificationIcon = (message, type) => {
    if (type === "job_application") {
      if (message.includes("Accepted")) return <FaCheckCircle className="text-green-500 mr-1 sm:mr-2 text-base sm:text-lg" />;
      if (message.includes("Rejected")) return <FaTimesCircle className="text-red-500 mr-1 sm:mr-2 text-base sm:text-lg" />;
    }
    if (type === "event") return <FaBell className="text-blue-500 mr-1 sm:mr-2 text-base sm:text-lg" />;
    if (type === "discussion") return <FaComment className="text-purple-500 mr-1 sm:mr-2 text-base sm:text-lg" />;
    return null;
  };

  return (
    <NotificationContext.Provider value={{ unreadCount }}>
      <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
        <div className="flex flex-1 flex-col w-full">
          {/* Mobile Sidebar Toggle */}
          <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-sm">
            <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Notifications
            </h1>
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <FaBars className="text-xl" />
            </button>
          </div>
          {/* Sidebar */}
          <div
            className={`md:flex md:w-64 md:min-w-[16rem] md:flex-col bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed md:static top-0 left-0 h-full z-20 w-64`}
          >
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />
          </div>
          {/* Overlay for Mobile Sidebar */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
          {/* Main Content */}
          <div className="flex-1 w-full px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
            <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto">
              <h1 className="hidden md:block text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 sm:mb-6">
                Notifications
              </h1>
              {error && (
                <p className="text-red-500 text-center text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                  {error}
                </p>
              )}
              {/* Filter Form */}
              <div className="mb-4 sm:mb-6 bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-sm">
                <h2 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                  Filter Notifications
                </h2>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full p-2 sm:p-2.5 md:p-3 text-xs sm:text-sm md:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="all">All Notifications</option>
                  <option value="unread">Unread Only</option>
                  <option value="job_application">Job Applications</option>
                  <option value="event">Events</option>
                  <option value="discussion">Discussions</option>
                </select>
              </div>
              {/* Notification Listings */}
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm">
                {filteredNotifications.length > 0 ? (
                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    {filteredNotifications.map((notif) => (
                      <div
                        key={notif.id}
                        className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-2 sm:p-3 md:p-4 rounded-md shadow-sm transition-all duration-300 hover:shadow-md ${
                          notif.read ? "bg-gray-50" : "bg-blue-50"
                        }`}
                      >
                        <div className="flex items-center flex-1 mb-2 sm:mb-0">
                          {getNotificationIcon(notif.message, notif.type)}
                          <span className="text-gray-800 text-xs sm:text-sm md:text-base font-medium break-words">
                            {notif.message}
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-3 w-full sm:w-auto">
                          {!notif.read && (
                            <button
                              className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-md hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-sm"
                              onClick={() => markAsRead(notif.id)}
                            >
                              Mark as Read
                            </button>
                          )}
                          <button
                            className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-600 text-white text-xs sm:text-sm md:text-base font-semibold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-md hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-sm"
                            onClick={() => deleteNotification(notif.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center text-xs sm:text-sm md:text-base py-3 sm:py-4 md:py-6">
                    No notifications available.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </NotificationContext.Provider>
  );
};

export default AlumniNotifications;