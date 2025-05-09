// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";
// import Sidebar from "./Sidebar"; // Adjust path based on your file structure
// import { FaPlus, FaEdit, FaTrash, FaCheck } from "react-icons/fa";

// const ManageInternships = () => {
//   const [internships, setInternships] = useState([
//     {
//       id: 1,
//       title: "Software Engineering Intern",
//       company: "Google",
//       location: "California, USA",
//       duration: "3 Months",
//       deadline: "2024-04-30",
//       status: "Pending",
//     },
//     {
//       id: 2,
//       title: "Data Science Intern",
//       company: "Microsoft",
//       location: "Remote",
//       duration: "6 Months",
//       deadline: "2024-05-15",
//       status: "Approved",
//     },
//   ]);

//   const [newInternship, setNewInternship] = useState({
//     title: "",
//     company: "",
//     location: "",
//     duration: "",
//     deadline: "",
//     status: "Pending", // Default status for new internships
//   });

//   const [editIndex, setEditIndex] = useState(null);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

//   const handleChange = (e) => {
//     setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
//   };

//   const handleAdd = () => {
//     if (newInternship.title && newInternship.company) {
//       setInternships([...internships, { ...newInternship, id: internships.length + 1 }]);
//       setNewInternship({ title: "", company: "", location: "", duration: "", deadline: "", status: "Pending" });
//     } else {
//       alert("Please fill in all required fields (Title and Company).");
//     }
//   };

//   const handleEdit = (index) => {
//     setNewInternship(internships[index]);
//     setEditIndex(index);
//   };

//   const handleSave = () => {
//     const updatedInternships = [...internships];
//     updatedInternships[editIndex] = newInternship;
//     setInternships(updatedInternships);
//     setNewInternship({ title: "", company: "", location: "", duration: "", deadline: "", status: "Pending" });
//     setEditIndex(null);
//   };

//   const handleDelete = (id) => {
//     setInternships(internships.filter((internship) => internship.id !== id));
//   };

//   const handleApprove = (id) => {
//     setInternships(
//       internships.map((internship) =>
//         internship.id === id ? { ...internship, status: "Approved" } : internship
//       )
//     );
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
//       {/* <Navbar /> */}
//       <div className="flex flex-1">
//         <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//         <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full ml-0 md:ml-16 lg:ml-64">
//           {/* Title */}
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
//             Manage Internships
//           </h1>

//           {/* Add/Edit Internship Form Card */}
//           <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto mb-6 sm:mb-8">
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
//               {editIndex !== null ? "Edit Internship" : "Add Internship"}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Internship Title *"
//                 value={newInternship.title}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
//               />
//               <input
//                 type="text"
//                 name="company"
//                 placeholder="Company *"
//                 value={newInternship.company}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
//               />
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location"
//                 value={newInternship.location}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
//               />
//               <input
//                 type="text"
//                 name="duration"
//                 placeholder="Duration"
//                 value={newInternship.duration}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
//               />
//               <input
//                 type="date"
//                 name="deadline"
//                 value={newInternship.deadline}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
//               />
//             </div>
//             <button
//               onClick={editIndex !== null ? handleSave : handleAdd}
//               className="mt-4 sm:mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-2"
//             >
//               {editIndex !== null ? (
//                 "Save Changes"
//               ) : (
//                 <>
//                   <FaPlus /> <span>Add Internship</span>
//                 </>
//               )}
//             </button>
//           </div>

//           {/* Internships Table Card */}
//           <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto">
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
//               Internship Listings
//             </h2>
//             {internships.length > 0 ? (
//               <div className="overflow-x-auto">
//                 <table className="w-full border-collapse border border-gray-200">
//                   <thead>
//                     <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md">
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tl-xl">
//                         Title
//                       </th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
//                         Company
//                       </th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
//                         Location
//                       </th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
//                         Duration
//                       </th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
//                         Deadline
//                       </th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
//                         Status
//                       </th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tr-xl">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {internships.map((internship, index) => (
//                       <tr
//                         key={internship.id}
//                         className={`transition-colors duration-200 border border-gray-200 ${
//                           index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                         } hover:bg-blue-100 hover:shadow-md`}
//                       >
//                         <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
//                           {internship.title}
//                         </td>
//                         <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
//                           {internship.company}
//                         </td>
//                         <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
//                           {internship.location}
//                         </td>
//                         <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
//                           {internship.duration}
//                         </td>
//                         <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
//                           {internship.deadline}
//                         </td>
//                         <td
//                           className={`p-3 sm:p-4 font-semibold text-sm sm:text-base border border-gray-200 ${
//                             internship.status === "Approved"
//                               ? "text-green-600 animate-pulse-once"
//                               : "text-yellow-600 animate-pulse-once"
//                           }`}
//                         >
//                           {internship.status}
//                         </td>
//                         <td className="p-3 sm:p-4 border border-gray-200">
//                           <div className="flex space-x-2 sm:space-x-3">
//                             {internship.status === "Pending" && (
//                               <button
//                                 onClick={() => handleApprove(internship.id)}
//                                 className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
//                               >
//                                 <FaCheck /> <span>Approve</span>
//                               </button>
//                             )}
//                             <button
//                               onClick={() => handleEdit(index)}
//                               className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
//                             >
//                               <FaEdit /> <span>Edit</span>
//                             </button>
//                             <button
//                               onClick={() => handleDelete(internship.id)}
//                               className="bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
//                             >
//                               <FaTrash /> <span>Delete</span>
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             ) : (
//               <p className="text-center text-gray-600 text-sm sm:text-base font-medium animate-fade-in">
//                 No internships available to manage.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageInternships;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { FaPlus, FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

const ManageInternships = () => {
  const [internships, setInternships] = useState([]);
  const [newInternship, setNewInternship] = useState({
    title: '',
    company: '',
    location: '',
    duration: '',
    deadline: '',
    description: '',
    requirements: '',
    apply_link: '',
    status: 'pending',
  });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const fetchInternships = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token');
      const response = await axios.get('http://localhost:8000/api/internships/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInternships(response.data);
    } catch (err) {
      console.error('Fetch internships error:', err);
      if (err.response?.status === 401) {
        try {
          const refresh = localStorage.getItem('refreshToken');
          const refreshResponse = await axios.post('http://localhost:8000/api/token/refresh/', { refresh });
          localStorage.setItem('accessToken', refreshResponse.data.access);
          const retryResponse = await axios.get('http://localhost:8000/api/internships/', {
            headers: { Authorization: `Bearer ${refreshResponse.data.access}` },
          });
          setInternships(retryResponse.data);
        } catch (refreshErr) {
          console.error('Token refresh failed:', refreshErr);
          setError('Session expired. Please sign in again.');
          navigate('/signin');
        }
      } else {
        setError(err.response?.data?.error || 'Failed to fetch internships.');
      }
    }
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  const handleChange = (e) => {
    setNewInternship({ ...newInternship, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (!newInternship.title || !newInternship.company) {
      setError('Please fill in all required fields (Title and Company).');
      return;
    }
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.post(
        'http://localhost:8000/api/internships/',
        newInternship,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setInternships([...internships, response.data]);
      setNewInternship({
        title: '',
        company: '',
        location: '',
        duration: '',
        deadline: '',
        description: '',
        requirements: '',
        apply_link: '',
        status: 'pending',
      });
      setSuccess('Internship added successfully!');
    } catch (err) {
      console.error('Add internship error:', err);
      setError(err.response?.data?.error || 'Failed to add internship.');
    }
  };

  const handleEdit = (internship) => {
    setNewInternship(internship);
    setEditId(internship.id);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.put(
        `http://localhost:8000/api/internships/${editId}/`,
        newInternship,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setInternships(internships.map((i) => (i.id === editId ? response.data : i)));
      setNewInternship({
        title: '',
        company: '',
        location: '',
        duration: '',
        deadline: '',
        description: '',
        requirements: '',
        apply_link: '',
        status: 'pending',
      });
      setEditId(null);
      setSuccess('Internship updated successfully!');
    } catch (err) {
      console.error('Update internship error:', err);
      setError(err.response?.data?.error || 'Failed to update internship.');
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.delete(`http://localhost:8000/api/internships/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInternships(internships.filter((internship) => internship.id !== id));
      setSuccess('Internship deleted successfully!');
    } catch (err) {
      console.error('Delete internship error:', err);
      setError(err.response?.data?.error || 'Failed to delete internship.');
    }
  };

  const handleApprove = async (id) => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.post(
        `http://localhost:8000/api/internships/${id}/approve/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setInternships(
        internships.map((internship) =>
          internship.id === id ? { ...internship, status: 'approved' } : internship
        )
      );
      setSuccess('Internship approved successfully!');
    } catch (err) {
      console.error('Approve internship error:', err);
      setError(err.response?.data?.error || 'Failed to approve internship.');
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full ml-0 md:ml-16 lg:ml-64">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
            Manage Internships
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
              {editId !== null ? 'Edit Internship' : 'Add Internship'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="title"
                placeholder="Internship Title *"
                value={newInternship.title}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              />
              <input
                type="text"
                name="company"
                placeholder="Company *"
                value={newInternship.company}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={newInternship.location}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              />
              <input
                type="text"
                name="duration"
                placeholder="Duration"
                value={newInternship.duration}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              />
              <input
                type="date"
                name="deadline"
                value={newInternship.deadline}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newInternship.description}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              />
              <textarea
                name="requirements"
                placeholder="Requirements"
                value={newInternship.requirements}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              />
              <input
                type="url"
                name="apply_link"
                placeholder="Application Link"
                value={newInternship.apply_link}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              />
            </div>
            <button
              onClick={editId !== null ? handleSave : handleAdd}
              className="mt-4 sm:mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-2"
            >
              {editId !== null ? 'Save Changes' : (
                <>
                  <FaPlus /> <span>Add Internship</span>
                </>
              )}
            </button>
          </div>
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
              Internship Listings
            </h2>
            {internships.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md">
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tl-xl">Title</th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Company</th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Location</th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Duration</th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Deadline</th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Status</th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tr-xl">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internships.map((internship) => (
                      <tr
                        key={internship.id}
                        className="transition-colors duration-200 border border-gray-200 hover:bg-blue-100 hover:shadow-md"
                      >
                        <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{internship.title}</td>
                        <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{internship.company}</td>
                        <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{internship.location}</td>
                        <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{internship.duration}</td>
                        <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{internship.deadline}</td>
                        <td className={`p-3 sm:p-4 font-semibold text-sm sm:text-base border border-gray-200 ${internship.status === 'approved' ? 'text-green-600' : 'text-yellow-600'}`}>
                          {internship.status}
                        </td>
                        <td className="p-3 sm:p-4 border border-gray-200">
                          <div className="flex space-x-2 sm:space-x-3">
                            {internship.status === 'pending' && (
                              <button
                                onClick={() => handleApprove(internship.id)}
                                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                              >
                                <FaCheck /> <span>Approve</span>
                              </button>
                            )}
                            <button
                              onClick={() => handleEdit(internship)}
                              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                            >
                              <FaEdit /> <span>Edit</span>
                            </button>
                            <button
                              onClick={() => handleDelete(internship.id)}
                              className="bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
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
                No internships available to manage.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageInternships;