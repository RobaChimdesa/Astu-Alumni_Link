import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { FaCheck, FaTrash } from "react-icons/fa";

const ManageResources = () => {
  const [resources, setResources] = useState([
    { id: 1, title: "Data Science Handbook", uploader: "Dr. Sarah Johnson", status: "Pending" },
    { id: 2, title: "Web Development Guide", uploader: "Alex Brown", status: "Approved" },
    { id: 3, title: "Machine Learning Basics", uploader: "Jane Smith", status: "Pending" },
  ]);

  const approveResource = (id) => {
    setResources(resources.map(res => res.id === id ? { ...res, status: "Approved" } : res));
  };

  const deleteResource = (id) => {
    setResources(resources.filter(res => res.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Manage Resources
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Resource Title</th>
                <th className="p-3 border">Uploader</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {resources.map(res => (
                <tr key={res.id} className="border text-center">
                  <td className="p-3 border">{res.title}</td>
                  <td className="p-3 border">{res.uploader}</td>
                  <td className={`p-3 border font-semibold ${res.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                    {res.status}
                  </td>
                  <td className="p-3 border flex justify-center space-x-4">
                    {res.status === "Pending" && (
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition duration-300"
                        onClick={() => approveResource(res.id)}
                      >
                        <FaCheck />
                      </button>
                    )}
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition duration-300"
                      onClick={() => deleteResource(res.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageResources;
