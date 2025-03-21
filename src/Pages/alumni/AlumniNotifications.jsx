import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sidebar from "./Sidebar";

const AlumniNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New event: Alumni Networking Night", read: false },
    { id: 2, message: "New comment on your discussion post", read: true },
    { id: 3, message: "Your job application has been viewed", read: false },
  ]);

  // Mark as Read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  // Delete Notification
  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Notifications
        </h1>

        {/* Notification Listings */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in">
          {notifications.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] ${
                    notif.read ? "bg-gray-100" : "bg-blue-100"
                  }`}
                >
                  <span className="text-gray-800 text-sm sm:text-base md:text-lg font-medium truncate">
                    {notif.message}
                  </span>
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
      {/* <Footer /> */}
    </div>
  );
};

export default AlumniNotifications;