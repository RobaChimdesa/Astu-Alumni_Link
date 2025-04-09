// import Sidebar from "./Sidebar";
// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";
// import { FaCheck, FaTrash } from "react-icons/fa";

// const ManageUsers = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", role: "Student", email: "john@astu.edu", status: "Pending" },
//     { id: 2, name: "Jane Smith", role: "Alumni", email: "jane@company.com", status: "Approved" },
//     { id: 3, name: "Dr. Mark Lee", role: "Faculty", email: "mark@astu.edu", status: "Pending" },
//     { id: 4, name: "TechCorp", role: "Company", email: "hr@techcorp.com", status: "Approved" },
//   ]);

//   const approveUser = (id) => {
//     setUsers(users.map(user => (user.id === id ? { ...user, status: "Approved" } : user)));
//   };

//   const deleteUser = (id) => {
//     setUsers(users.filter(user => user.id !== id));
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
//       <Sidebar />
//       <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
//           Manage Users
//         </h1>

//         {/* Users Table Card */}
//         <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto">
//           {users.length > 0 ? (
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border border-gray-200">
//                 <thead>
//                   <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md">
//                     <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tl-xl">
//                       Name
//                     </th>
//                     <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
//                       Role
//                     </th>
//                     <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
//                       Email
//                     </th>
//                     <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
//                       Status
//                     </th>
//                     <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tr-xl">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((user, index) => (
//                     <tr
//                       key={user.id}
//                       className={`transition-colors duration-200 border border-gray-200 ${
//                         index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                       } hover:bg-blue-100 hover:shadow-md`}
//                     >
//                       <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
//                         {user.name}
//                       </td>
//                       <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
//                         {user.role}
//                       </td>
//                       <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
//                         {user.email}
//                       </td>
//                       <td
//                         className={`p-3 sm:p-4 font-semibold text-sm sm:text-base border border-gray-200 ${
//                           user.status === "Approved"
//                             ? "text-green-600 animate-pulse-once"
//                             : "text-yellow-600 animate-pulse-once"
//                         }`}
//                       >
//                         {user.status}
//                       </td>
//                       <td className="p-3 sm:p-4 border border-gray-200">
//                         <div className="flex space-x-2 sm:space-x-3">
//                           {user.status === "Pending" && (
//                             <button
//                               className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
//                               onClick={() => approveUser(user.id)}
//                             >
//                               <FaCheck /> <span>Approve</span>
//                             </button>
//                           )}
//                           <button
//                             className="bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
//                             onClick={() => deleteUser(user.id)}
//                           >
//                             <FaTrash /> <span>Delete</span>
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <p className="text-center text-gray-600 text-sm sm:text-base font-medium animate-fade-in">
//               No users available to manage.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageUsers;

// src/components/ManageUsers.js
import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import { FaCheck, FaTrash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPendingCompanies = async () => {
      const token = localStorage.getItem("accessToken");
      console.log(token)
      if (!token) {
        setError("Please log in as an admin.");
        setLoading(false);
        setTimeout(() => navigate("/signin"), 2000);
        return;
      }

      try {
        const response = await axios.get("http://localhost:8000/api/admin/pending-companies/", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data.map(company => ({
          id: company.id,
          name: company.company_name,
          role: "Company",
          email: company.email,
          status: company.status
        })));
        setLoading(false);
      } catch (err) {
        setError("Failed to load: " + (err.response?.data?.message || err.message));
        setLoading(false);
        console.error("Fetch Error:", err.response?.data);
      }
    };
    fetchPendingCompanies();
  }, [navigate]);

  const approveUser = async (id) => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.post(
        "http://localhost:8000/api/admin/approve-company/",
        { company_id: id, action: "approve" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Approval Response:", response.data); // Debug
      setUsers(users.map(user => (user.id === id ? { ...user, status: "Approved" } : user)));
    } catch (err) {
      setError("Failed to approve: " + (err.response?.data?.message || err.message));
      console.error("Approval Error:", err.response?.data);
    }
  };

  const deleteUser = async (id) => {
    const token = localStorage.getItem("accessToken");
    try {
      await axios.post(
        "http://localhost:8000/api/admin/approve-company/",
        { company_id: id, action: "reject" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      setError("Failed to reject: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
      <Sidebar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
          Manage Users
        </h1>
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto">
          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : users.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md">
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tl-xl">Name</th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Role</th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Email</th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Status</th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tr-xl">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id} className={`transition-colors duration-200 border border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-100 hover:shadow-md`}>
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{user.name}</td>
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{user.role}</td>
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{user.email}</td>
                      <td className={`p-3 sm:p-4 font-semibold text-sm sm:text-base border border-gray-200 ${user.status === "Approved" ? "text-green-600 animate-pulse-once" : "text-yellow-600 animate-pulse-once"}`}>
                        {user.status}
                      </td>
                      <td className="p-3 sm:p-4 border border-gray-200">
                        <div className="flex space-x-2 sm:space-x-3">
                          {user.status === "Pending" && (
                            <button
                              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                              onClick={() => approveUser(user.id)}
                            >
                              <FaCheck /> <span>Approve</span>
                            </button>
                          )}
                          <button
                            className="bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                            onClick={() => deleteUser(user.id)}
                          >
                            <FaTrash /> <span>Reject</span>
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
              No pending companies to manage.
            </p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ManageUsers;