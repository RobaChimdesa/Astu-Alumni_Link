import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { FaCheck, FaTrash } from "react-icons/fa";
import Sidebar from "./Sidebar";
const ManageResources = () => {
  const [resources, setResources] = useState([
    { id: 1, title: "Data Science Handbook", uploader: "Dr. Sarah Johnson", status: "Pending" },
    { id: 2, title: "Web Development Guide", uploader: "Alex Brown", status: "Approved" },
    { id: 3, title: "Machine Learning Basics", uploader: "Jane Smith", status: "Pending" },
    { id: 4, title: "Data Science Handbook", uploader: "Dr. Sarah Johnson", status: "Pending" },
    { id: 5, title: "Web Development Guide", uploader: "Alex Brown", status: "Approved" },
    { id: 6, title: "Machine Learning Basics", uploader: "Jane Smith", status: "Pending" },
    { id: 7, title: "Data Science Handbook", uploader: "Dr. Sarah Johnson", status: "Pending" },
    { id: 8, title: "Web Development Guide", uploader: "Alex Brown", status: "Approved" },
    { id: 9, title: "Machine Learning Basics", uploader: "Jane Smith", status: "Pending" },
  ]);

  const approveResource = (id) => {
    setResources(resources.map(res => (res.id === id ? { ...res, status: "Approved" } : res)));
  };

  const deleteResource = (id) => {
    setResources(resources.filter(res => res.id !== id));
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
      <Sidebar/>
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
          Manage Resources
        </h1>

        {/* Resources Table Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
            Resource Listings
          </h2>
          {resources.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md">
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tl-xl">
                      Resource Title
                    </th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
                      Uploader
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
                  {resources.map((res, index) => (
                    <tr
                      key={res.id}
                      className={`transition-colors duration-200 border border-gray-200 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-blue-100 hover:shadow-md`}
                    >
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
                        {res.title}
                      </td>
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
                        {res.uploader}
                      </td>
                      <td
                        className={`p-3 sm:p-4 font-semibold text-sm sm:text-base border border-gray-200 ${
                          res.status === "Approved"
                            ? "text-green-600 animate-pulse-once"
                            : "text-yellow-600 animate-pulse-once"
                        }`}
                      >
                        {res.status}
                      </td>
                      <td className="p-3 sm:p-4 border border-gray-200">
                        <div className="flex space-x-2 sm:space-x-3">
                          {res.status === "Pending" && (
                            <button
                              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                              onClick={() => approveResource(res.id)}
                            >
                              <FaCheck /> <span>Approve</span>
                            </button>
                          )}
                          <button
                            className="bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                            onClick={() => deleteResource(res.id)}
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
              No resources available to manage.
            </p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ManageResources;