import React, { useState, useEffect, createContext, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "./Sidebar";

// Context for sharing notification data
export const NotificationContext = createContext();

const Layout = () => {
  const [notifications, setNotifications] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Compute unread count
  const unreadCount = useMemo(() => {
    return notifications.filter((notif) => !notif.read).length;
  }, [notifications]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) return;
        const response = await axios.get("http://localhost:8000/api/notifications/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setNotifications(response.data);
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
        if (err.response?.status === 401) {
          localStorage.removeItem("accessToken");
          navigate("/signin", { state: { error: "Please log in to view notifications." } });
        }
      }
    };
    fetchNotifications();
  }, [navigate]);

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, setNotifications }}>
      <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
        <div className="flex flex-1 flex-col md:flex-row w-full">
          {/* Sidebar */}
          <div
            className={`md:flex md:w-64 md:min-w-[16rem] md:flex-col bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 fixed md:static top-0 left-0 h-full z-20 w-72`}
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
            <Outlet />
          </div>
        </div>
      </div>
    </NotificationContext.Provider>
  );
};

export default Layout;