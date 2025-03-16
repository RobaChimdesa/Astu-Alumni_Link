import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { FaCheck, FaTrash } from "react-icons/fa";

const ManageDiscussions = () => {
  const [discussions, setDiscussions] = useState([
    { id: 1, title: "How to Succeed in the Tech Industry?", author: "John Doe", status: "Pending" },
    { id: 2, title: "Best Networking Tips for Graduates", author: "Jane Smith", status: "Approved" },
    { id: 3, title: "Building a Strong Resume", author: "Alex Brown", status: "Pending" },
  ]);

  const approveDiscussion = (id) => {
    setDiscussions(discussions.map(disc => disc.id === id ? { ...disc, status: "Approved" } : disc));
  };

  const deleteDiscussion = (id) => {
    setDiscussions(discussions.filter(disc => disc.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Manage Discussion Forum
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Discussion Title</th>
                <th className="p-3 border">Author</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {discussions.map(disc => (
                <tr key={disc.id} className="border text-center">
                  <td className="p-3 border">{disc.title}</td>
                  <td className="p-3 border">{disc.author}</td>
                  <td className={`p-3 border font-semibold ${disc.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                    {disc.status}
                  </td>
                  <td className="p-3 border flex justify-center space-x-4">
                    {disc.status === "Pending" && (
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition duration-300"
                        onClick={() => approveDiscussion(disc.id)}
                      >
                        <FaCheck />
                      </button>
                    )}
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition duration-300"
                      onClick={() => deleteDiscussion(disc.id)}
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

export default ManageDiscussions;
