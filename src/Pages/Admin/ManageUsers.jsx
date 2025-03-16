import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { FaTrash, FaCheck } from "react-icons/fa";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Student", email: "john@astu.edu", status: "Pending" },
    { id: 2, name: "Jane Smith", role: "Alumni", email: "jane@company.com", status: "Approved" },
    { id: 3, name: "Dr. Mark Lee", role: "Faculty", email: "mark@astu.edu", status: "Pending" },
    { id: 4, name: "TechCorp", role: "Company", email: "hr@techcorp.com", status: "Approved" },
  ]);

  const approveUser = (id) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: "Approved" } : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Manage Users
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border text-center">
                  <td className="p-3 border">{user.name}</td>
                  <td className="p-3 border">{user.role}</td>
                  <td className="p-3 border">{user.email}</td>
                  <td className={`p-3 border font-semibold ${user.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                    {user.status}
                  </td>
                  <td className="p-3 border flex justify-center space-x-4">
                    {user.status === "Pending" && (
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition duration-300"
                        onClick={() => approveUser(user.id)}
                      >
                        <FaCheck />
                      </button>
                    )}
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition duration-300"
                      onClick={() => deleteUser(user.id)}
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

export default ManageUsers;
