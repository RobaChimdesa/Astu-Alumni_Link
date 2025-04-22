// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import { FaPlus, FaEdit, FaTrash, FaCheck } from "react-icons/fa";

// const ManageJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [companies, setCompanies] = useState([]); // New state for companies
//   const [newJob, setNewJob] = useState({
//     title: "",
//     company_id: "",
//     location: "",
//     job_type: "",
//     deadline: "",
//     description: "",
//     requirements: "",
//     apply_link: "",
//   });
//   const [editId, setEditId] = useState(null);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchJobs();
//     fetchCompanies(); // Fetch companies on mount
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       if (!token) throw new Error("No access token found. Please log in.");
//       const response = await axios.get("http://localhost:8000/api/jobs/", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setJobs(response.data);
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to fetch jobs.");
//       if (err.response?.status === 401) navigate("/signin");
//     }
//   };

//   const fetchCompanies = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       if (!token) throw new Error("No access token found. Please log in.");
//       const response = await axios.get("http://localhost:8000/api/companies/", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCompanies(response.data.filter(company => company.status === "approved"));
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to fetch companies.");
//     }
//   };

//   const handleChange = (e) => {
//     setNewJob({ ...newJob, [e.target.name]: e.target.value });
//   };

//   const handleAdd = async () => {
//     if (newJob.title && newJob.company_id) {
//       try {
//         const token = localStorage.getItem("accessToken");
//         if (!token) throw new Error("No access token found. Please log in.");
//         await axios.post("http://localhost:8000/api/jobs/", newJob, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setSuccess("Job added successfully!");
//         setNewJob({ title: "", company_id: "", location: "", job_type: "", deadline: "", description: "", requirements: "", apply_link: "" });
//         fetchJobs();
//       } catch (err) {
//         setError(err.response?.data?.message || "Failed to add job.");
//       }
//     } else {
//       setError("Please fill in Title and Company.");
//     }
//   };

//   const handleEdit = (job) => {
//     setNewJob({
//       title: job.title,
//       company_id: job.company_id,
//       location: job.location,
//       job_type: job.job_type,
//       deadline: job.deadline,
//       description: job.description,
//       requirements: job.requirements,
//       apply_link: job.apply_link,
//     });
//     setEditId(job.id);
//   };

//   const handleSave = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       if (!token) throw new Error("No access token found. Please log in.");
//       await axios.put(`http://localhost:8000/api/jobs/${editId}/`, newJob, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setSuccess("Job updated successfully!");
//       setNewJob({ title: "", company_id: "", location: "", job_type: "", deadline: "", description: "", requirements: "", apply_link: "" });
//       setEditId(null);
//       fetchJobs();
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to update job.");
//     }
//   };

//   const handleApprove = async (jobId) => {
//     try {
//       console.log(`Approving job ${jobId} with payload: { status: 'approved' }`);
//       const token = localStorage.getItem("accessToken"); // Fixed token key
//       if (!token) {
//         throw new Error("No access token found. Please log in.");
//       }
//       const response = await axios.put(
//         `http://localhost:8000/api/jobs/${jobId}/`,
//         { status: "approved" },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log("Job approved:", response.data);
//       setSuccess("Job approved successfully!");
//       fetchJobs(); // Refresh job list
//     } catch (error) {
//       console.error("Failed to approve job:", error.message, error.response?.data, error.response?.status);
//       setError(error.response?.data?.error || error.message); // Display error in UI
//       throw error;
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this job?")) return;
//     try {
//       const token = localStorage.getItem("accessToken");
//       if (!token) throw new Error("No access token found. Please log in.");
//       await axios.delete(`http://localhost:8000/api/jobs/${id}/`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setSuccess("Job deleted successfully!");
//       fetchJobs();
//     } catch (err) {
//       setError(err.response?.data?.message || "Failed to delete job.");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
//       <div className="flex flex-1">
//         <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//         <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full ml-0 md:ml-16 lg:ml-64">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
//             Manage Job Listings
//           </h1>

//           <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto mb-6 sm:mb-8">
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
//               {editId ? "Edit Job" : "Add Job"}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//               <input
//                 type="text"
//                 name="title"
//                 placeholder="Job Title *"
//                 value={newJob.title}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
//               />
//               <select
//                 name="company_id"
//                 value={newJob.company_id}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
//               >
//                 <option value="">Select Company *</option>
//                 {companies.map((company) => (
//                   <option key={company.id} value={company.id}>
//                     {company.company_name}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="text"
//                 name="location"
//                 placeholder="Location"
//                 value={newJob.location}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
//               />
//               <select
//                 name="job_type"
//                 value={newJob.job_type}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
//               >
//                 <option value="">Select Job Type</option>
//                 <option value="Full-Time">Full-Time</option>
//                 <option value="Part-Time">Part-Time</option>
//                 <option value="Internship">Internship</option>
//               </select>
//               <input
//                 type="date"
//                 name="deadline"
//                 value={newJob.deadline}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
//               />
//               <textarea
//                 name="description"
//                 placeholder="Description"
//                 value={newJob.description}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base md:col-span-2"
//               />
//               <textarea
//                 name="requirements"
//                 placeholder="Requirements"
//                 value={newJob.requirements}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base md:col-span-2"
//               />
//               <input
//                 type="url"
//                 name="apply_link"
//                 placeholder="Application Link"
//                 value={newJob.apply_link}
//                 onChange={handleChange}
//                 className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base md:col-span-2"
//               />
//             </div>
//             {error && <p className="text-red-500 mt-4">{error}</p>}
//             {success && <p className="text-green-500 mt-4">{success}</p>}
//             <button
//               onClick={editId ? handleSave : handleAdd}
//               className="mt-4 sm:mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-2"
//             >
//               {editId ? "Save Changes" : <><FaPlus /> <span>Add Job</span></>}
//             </button>
//           </div>

//           <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto">
//             <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
//               Job Listings
//             </h2>
//             {jobs.length > 0 ? (
//               <div className="overflow-x-auto">
//                 <table className="w-full border-collapse border border-gray-200">
//                   <thead>
//                     <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md">
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tl-xl">Title</th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Company</th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Location</th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Duration</th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Deadline</th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">Status</th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tr-xl">Actions</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {jobs.map((job, index) => (
//                       <tr
//                         key={job.id}
//                         className={`transition-colors duration-200 border border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-100 hover:shadow-md`}
//                       >
//                         <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{job.title}</td>
//                         <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{job.company}</td>
//                         <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{job.location}</td>
//                         <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{job.job_type}</td>
//                         <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{job.deadline}</td>
//                         <td className={`p-3 sm:p-4 font-semibold text-sm sm:text-base border border-gray-200 ${job.status === "approved" ? "text-green-600 animate-pulse-once" : "text-yellow-600 animate-pulse-once"}`}>
//                           {job.status}
//                         </td>
//                         <td className="p-3 sm:p-4 border border-gray-200">
//                           <div className="flex space-x-2 sm:space-x-3">
//                             {job.status === "pending" && (
//                               <button
//                                 onClick={() => handleApprove(job.id)}
//                                 className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
//                               >
//                                 <FaCheck /> <span>Approve</span>
//                               </button>
//                             )}
//                             <button
//                               onClick={() => handleEdit(job)}
//                               className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
//                             >
//                               <FaEdit /> <span>Edit</span>
//                             </button>
//                             <button
//                               onClick={() => handleDelete(job.id)}
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
//                 No jobs available to manage.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageJobs;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaPlus, FaEdit, FaTrash, FaCheck } from "react-icons/fa";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [newJob, setNewJob] = useState({
    title: "",
    company_id: "",
    location: "",
    job_type: "",
    deadline: "",
    description: "",
    requirements: "",
    apply_link: "",
  });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
    fetchCompanies();
  }, []);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) throw new Error("No access token found. Please log in.");
      const response = await axios.get("http://localhost:8000/api/jobs/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch jobs.");
      if (err.response?.status === 401) navigate("/signin");
    }
  };

  const fetchCompanies = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) throw new Error("No access token found. Please log in.");
      const response = await axios.get("http://localhost:8000/api/companies/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCompanies(response.data.filter(company => company.status === "approved"));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch companies.");
    }
  };

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (newJob.title && newJob.company_id) {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) throw new Error("No access token found. Please log in.");
        await axios.post("http://localhost:8000/api/jobs/", newJob, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSuccess("Job added successfully!");
        setNewJob({ title: "", company_id: "", location: "", job_type: "", deadline: "", description: "", requirements: "", apply_link: "" });
        fetchJobs();
      } catch (err) {
        setError(err.response?.data?.message || "Failed to add job.");
      }
    } else {
      setError("Please fill in Title and Company.");
    }
  };

  const handleEdit = (job) => {
    setNewJob({
      title: job.title,
      company_id: job.company_id,
      location: job.location,
      job_type: job.job_type,
      deadline: job.deadline,
      description: job.description,
      requirements: job.requirements,
      apply_link: job.apply_link,
    });
    setEditId(job.id);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) throw new Error("No access token found. Please log in.");
      await axios.put(`http://localhost:8000/api/jobs/${editId}/`, newJob, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess("Job updated successfully!");
      setNewJob({ title: "", company_id: "", location: "", job_type: "", deadline: "", description: "", requirements: "", apply_link: "" });
      setEditId(null);
      fetchJobs();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update job.");
    }
  };

  const handleApprove = async (jobId) => {
    try {
      console.log(`Approving job ${jobId} with payload: { status: 'approved' }`);
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No access token found. Please log in.");
      }
      const response = await axios.put(
        `http://localhost:8000/api/jobs/${jobId}/`,
        { status: "approved" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Job approved, response:", response.data);
      setSuccess("Job approved successfully!");
      fetchJobs();
    } catch (error) {
      console.error("Failed to approve job:", error.message, error.response?.data, error.response?.status);
      setError(error.response?.data?.error || error.message);
      throw error;
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) throw new Error("No access token found. Please log in.");
      await axios.delete(`http://localhost:8000/api/jobs/${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess("Job deleted successfully!");
      fetchJobs();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete job.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full ml-0 md:ml-16 lg:ml-64">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
            Manage Job Listings
          </h1>

          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
              {editId ? "Edit Job" : "Add Job"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                name="title"
                placeholder="Job Title *"
                value={newJob.title}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              />
              <select
                name="company_id"
                value={newJob.company_id}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              >
                <option value="">Select Company *</option>
                {companies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.company_name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={newJob.location}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              />
              <select
                name="job_type"
                value={newJob.job_type}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              >
                <option value="">Select Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
              </select>
              <input
                type="date"
                name="deadline"
                value={newJob.deadline}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={newJob.description}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base md:col-span-2"
              />
              <textarea
                name="requirements"
                placeholder="Requirements"
                value={newJob.requirements}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base md:col-span-2"
              />
              <input
                type="url"
                name="apply_link"
                placeholder="Application Link"
                value={newJob.apply_link}
                onChange={handleChange}
                className="p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 text-sm sm:text-base md:col-span-2"
              />
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {success && <p className="text-green-500 mt-4">{success}</p>}
            <button
              onClick={editId ? handleSave : handleAdd}
              className="mt-4 sm:mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-2"
            >
              {editId ? "Save Changes" : <><FaPlus /> <span>Add Job</span></>}
            </button>
          </div>

          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
              Job Listings
            </h2>
            {jobs.length > 0 ? (
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
                    {jobs.map((job, index) => (
                      <tr
                        key={job.id}
                        className={`transition-colors duration-200 border border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-100 hover:shadow-md`}
                      >
                        <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{job.title}</td>
                        <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{job.company}</td>
                        <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{job.location}</td>
                        <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{job.job_type}</td>
                        <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">{job.deadline}</td>
                        <td className={`p-3 sm:p-4 font-semibold text-sm sm:text-base border border-gray-200 ${job.status === "approved" ? "text-green-600 animate-pulse-once" : "text-yellow-600 animate-pulse-once"}`}>
                          {job.status}
                        </td>
                        <td className="p-3 sm:p-4 border border-gray-200">
                          <div className="flex space-x-2 sm:space-x-3">
                            {job.status === "pending" && (
                              <button
                                onClick={() => handleApprove(job.id)}
                                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                              >
                                <FaCheck /> <span>Approve</span>
                              </button>
                            )}
                            <button
                              onClick={() => handleEdit(job)}
                              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                            >
                              <FaEdit /> <span>Edit</span>
                            </button>
                            <button
                              onClick={() => handleDelete(job.id)}
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
                No jobs available to manage.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageJobs;