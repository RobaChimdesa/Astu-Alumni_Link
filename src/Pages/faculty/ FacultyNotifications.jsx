// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";

// const FacultyNotifications = () => {
//   const [notifications, setNotifications] = useState([
//     { id: 1, message: "New mentorship request from John Doe", type: "Mentorship", status: "Unread" },
//     { id: 2, message: "Upcoming event: AI in Education Workshop", type: "Event", status: "Unread" },
//     { id: 3, message: "Your discussion on Online Learning received a new comment", type: "Discussion", status: "Read" },
//   ]);

//   const markAsRead = (id) => {
//     setNotifications(
//       notifications.map((notification) =>
//         notification.id === id ? { ...notification, status: "Read" } : notification
//       )
//     );
//   };

//   const deleteNotification = (id) => {
//     setNotifications(notifications.filter((notification) => notification.id !== id));
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="max-w-4xl mx-auto px-6 py-12">
//         <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
//           Faculty Notifications
//         </h1>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           {notifications.length > 0 ? (
//             <ul className="space-y-4">
//               {notifications.map((notification) => (
//                 <li
//                   key={notification.id}
//                   className={`flex justify-between items-center p-4 rounded-md ${
//                     notification.status === "Unread" ? "bg-yellow-100" : "bg-gray-200"
//                   }`}
//                 >
//                   <span className="text-gray-800">
//                     {notification.message} - <strong>{notification.status}</strong>
//                   </span>
//                   <div className="space-x-2">
//                     {notification.status === "Unread" && (
//                       <button
//                         className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
//                         onClick={() => markAsRead(notification.id)}
//                       >
//                         Mark as Read
//                       </button>
//                     )}
//                     <button
//                       className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
//                       onClick={() => deleteNotification(notification.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600 text-center">No notifications available.</p>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default FacultyNotifications;

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
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Faculty Notifications
        </h1>

        {/* Notifications Card */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in">
          <div className="space-y-4 sm:space-y-6">
            {notifications.length > 0 ? (
              <div className="space-y-4 sm:space-y-6">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                      <div className="flex-1">
                        <span className="text-base sm:text-lg md:text-xl font-medium text-gray-700 truncate block">
                          {notification.message}
                        </span>
                        <span className="text-gray-600 text-sm sm:text-base md:text-lg">
                          {notification.type} -{" "}
                          <span
                            className={
                              notification.status === "Unread" ? "text-yellow-600" : "text-gray-600"
                            }
                          >
                            {notification.status}
                          </span>
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        {notification.status === "Unread" && (
                          <button
                            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                            onClick={() => markAsRead(notification.id)}
                          >
                            Mark as Read
                          </button>
                        )}
                        <button
                          className="w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center">
                No notifications available.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyNotifications;