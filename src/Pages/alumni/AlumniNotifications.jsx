// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";
// import Sidebar from "./Sidebar";

// const AlumniNotifications = () => {
//   const [notifications, setNotifications] = useState([
//     { id: 1, message: "New event: Alumni Networking Night", read: false },
//     { id: 2, message: "New comment on your discussion post", read: true },
//     { id: 3, message: "Your job application has been viewed", read: false },
//   ]);

//   // Mark as Read
//   const markAsRead = (id) => {
//     setNotifications(
//       notifications.map((notif) =>
//         notif.id === id ? { ...notif, read: true } : notif
//       )
//     );
//   };

//   // Delete Notification
//   const deleteNotification = (id) => {
//     setNotifications(notifications.filter((notif) => notif.id !== id));
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
//       {/* <Navbar /> */}
//       <Sidebar/>
//       <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
//           Notifications
//         </h1>

//         {/* Notification Listings */}
//         <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in">
//           {notifications.length > 0 ? (
//             <div className="grid grid-cols-1 gap-4 sm:gap-6">
//               {notifications.map((notif) => (
//                 <div
//                   key={notif.id}
//                   className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] ${
//                     notif.read ? "bg-gray-100" : "bg-blue-100"
//                   }`}
//                 >
//                   <span className="text-gray-800 text-sm sm:text-base md:text-lg font-medium truncate">
//                     {notif.message}
//                   </span>
//                   <div className="flex flex-col sm:flex-row gap-4 mt-3 sm:mt-0">
//                     {!notif.read && (
//                       <button
//                         className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
//                         onClick={() => markAsRead(notif.id)}
//                       >
//                         Mark as Read
//                       </button>
//                     )}
//                     <button
//                       className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
//                       onClick={() => deleteNotification(notif.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg py-6">
//               No notifications.
//             </p>
//           )}
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default AlumniNotifications;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaCheckCircle, FaTimesCircle, FaBell, FaComment } from "react-icons/fa";

const AlumniNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      if (message.includes("Accepted")) return <FaCheckCircle className="text-green-500 mr-2" />;
      if (message.includes("Rejected")) return <FaTimesCircle className="text-red-500 mr-2" />;
    }
    if (type === "event") return <FaBell className="text-blue-500 mr-2" />;
    if (type === "discussion") return <FaComment className="text-purple-500 mr-2" />;
    return null;
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
            Notifications
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {/* Filter Form */}
          <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Filter Notifications</h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="all">All Notifications</option>
              <option value="unread">Unread Only</option>
              <option value="job_application">Job Applications</option>
              <option value="event">Events</option>
              <option value="discussion">Discussions</option>
            </select>
          </div>
          {/* Notification Listings */}
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in">
            {filteredNotifications.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {filteredNotifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] ${
                      notif.read ? "bg-gray-100" : "bg-blue-100"
                    }`}
                  >
                    <div className="flex items-center">
                      {getNotificationIcon(notif.message, notif.type)}
                      <span className="text-gray-800 text-sm sm:text-base md:text-lg font-medium truncate">
                        {notif.message}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 mt-3 sm:mt-0">
                      {!notif.read && (
                        <button
                          className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                          onClick={() => markAsRead(notif.id)}
                        >
                          Mark as Read
                        </button>
                      )}
                      <button
                        className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                        onClick={() => deleteNotification(notif.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg py-6">
                No notifications.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniNotifications;