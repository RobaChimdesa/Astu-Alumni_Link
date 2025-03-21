import Sidebar from "./Sidebar";
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const CompanyNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New job application received from John Doe.",
      timestamp: "March 14, 2025 - 10:30 AM",
      read: false,
    },
    {
      id: 2,
      message: "Your job posting 'Software Engineer' has been approved.",
      timestamp: "March 13, 2025 - 3:15 PM",
      read: true,
    },
    {
      id: 3,
      message: "Reminder: Networking Event scheduled for March 20, 2025.",
      timestamp: "March 12, 2025 - 9:45 AM",
      read: false,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Notifications
        </h1>

        {/* Notifications Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
          {notifications.length === 0 ? (
            <p className="text-center text-gray-600 text-sm sm:text-base">
              No new notifications.
            </p>
          ) : (
            <ul className="space-y-4 sm:space-y-6">
              {notifications.map((notif) => (
                <li
                  key={notif.id}
                  className={`p-4 sm:p-5 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 ${
                    notif.read
                      ? "bg-gray-100 text-gray-600"
                      : "bg-blue-50 text-gray-800"
                  } hover:bg-gray-50`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="text-sm sm:text-base font-medium">
                        {notif.message}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {notif.timestamp}
                      </p>
                    </div>
                    {!notif.read && (
                      <button
                        onClick={() => markAsRead(notif.id)}
                        className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md text-sm sm:text-base"
                      >
                        Mark as Read
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CompanyNotifications;