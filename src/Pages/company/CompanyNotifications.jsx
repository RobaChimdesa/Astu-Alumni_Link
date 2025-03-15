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
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Notifications
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {notifications.length === 0 ? (
            <p className="text-gray-600 text-center">No new notifications.</p>
          ) : (
            <ul className="space-y-4">
              {notifications.map((notif) => (
                <li
                  key={notif.id}
                  className={`p-4 border rounded-lg ${
                    notif.read ? "bg-gray-200" : "bg-blue-50"
                  }`}
                >
                  <p className="text-gray-800">{notif.message}</p>
                  <p className="text-gray-500 text-sm">{notif.timestamp}</p>
                  {!notif.read && (
                    <button
                      onClick={() => markAsRead(notif.id)}
                      className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
                    >
                      Mark as Read
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyNotifications;
