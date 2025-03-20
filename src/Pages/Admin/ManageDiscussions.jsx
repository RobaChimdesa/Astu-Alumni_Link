import Sidebar from "./Sidebar";
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { FaCheck, FaTrash } from "react-icons/fa";

const ManageDiscussions = () => {
  const [discussions, setDiscussions] = useState([
    { id: 1, title: "How to Succeed in the Tech Industry?", author: "John Doe", status: "Pending" },
    { id: 2, title: "Best Networking Tips for Graduates", author: "Jane Smith", status: "Approved" },
    { id: 3, title: "Building a Strong Resume", author: "Alex Brown", status: "Pending" },
    { id: 1, title: "How to Succeed in the Tech Industry?", author: "John Doe", status: "Pending" },
    { id: 2, title: "Best Networking Tips for Graduates", author: "Jane Smith", status: "Approved" },
    { id: 3, title: "Building a Strong Resume", author: "Alex Brown", status: "Pending" },

    { id: 1, title: "How to Succeed in the Tech Industry?", author: "John Doe", status: "Pending" },
    { id: 2, title: "Best Networking Tips for Graduates", author: "Jane Smith", status: "Approved" },
    { id: 3, title: "Building a Strong Resume", author: "Alex Brown", status: "Pending" },

  ]);

  const approveDiscussion = (id) => {
    setDiscussions(discussions.map(disc => (disc.id === id ? { ...disc, status: "Approved" } : disc)));
  };

  const deleteDiscussion = (id) => {
    setDiscussions(discussions.filter(disc => disc.id !== id));
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
      <Sidebar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
          Manage Discussion Forum
        </h1>

        {/* Discussions Table Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
            Discussion Listings
          </h2>
          {discussions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md">
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tl-xl">
                      Discussion Title
                    </th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
                      Author
                    </th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
                      Status
                    </th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tr-xl">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {discussions.map((disc, index) => (
                    <tr
                      key={disc.id}
                      className={`transition-colors duration-200 border border-gray-200 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-blue-100 hover:shadow-md`}
                    >
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
                        {disc.title}
                      </td>
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
                        {disc.author}
                      </td>
                      <td
                        className={`p-3 sm:p-4 font-semibold text-sm sm:text-base border border-gray-200 ${
                          disc.status === "Approved"
                            ? "text-green-600 animate-pulse-once"
                            : "text-yellow-600 animate-pulse-once"
                        }`}
                      >
                        {disc.status}
                      </td>
                      <td className="p-3 sm:p-4 border border-gray-200">
                        <div className="flex space-x-2 sm:space-x-3">
                          {disc.status === "Pending" && (
                            <button
                              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                              onClick={() => approveDiscussion(disc.id)}
                            >
                              <FaCheck /> <span>Approve</span>
                            </button>
                          )}
                          <button
                            className="bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                            onClick={() => deleteDiscussion(disc.id)}
                          >
                            <FaTrash /> <span>Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-600 text-sm sm:text-base font-medium animate-fade-in">
              No discussions available to manage.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageDiscussions;