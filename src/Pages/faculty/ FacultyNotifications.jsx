import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const FacultyNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New mentorship request from John Doe", type: "Mentorship", status: "Unread" },
    { id: 2, message: "Upcoming event: AI in Education Workshop", type: "Event", status: "Unread" },
    { id: 3, message: "Your discussion on Online Learning received a new comment", type: "Discussion", status: "Read" },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, status: "Read" } : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Faculty Notifications
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {notifications.length > 0 ? (
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`flex justify-between items-center p-4 rounded-md ${
                    notification.status === "Unread" ? "bg-yellow-100" : "bg-gray-200"
                  }`}
                >
                  <span className="text-gray-800">
                    {notification.message} - <strong>{notification.status}</strong>
                  </span>
                  <div className="space-x-2">
                    {notification.status === "Unread" && (
                      <button
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                        onClick={() => markAsRead(notification.id)}
                      >
                        Mark as Read
                      </button>
                    )}
                    <button
                      className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">No notifications available.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyNotifications;
