// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import { FaCheck, FaTrash } from "react-icons/fa";

// const ManageJobs = () => {
//   const [jobs, setJobs] = useState([
//     { id: 1, title: "Software Engineer", company: "TechCorp", status: "Pending" },
//     { id: 2, title: "Marketing Manager", company: "BizSolutions", status: "Approved" },
//     { id: 3, title: "Data Analyst", company: "DataWorks", status: "Pending" },
//   ]);

//   const approveJob = (id) => {
//     setJobs(jobs.map(job => job.id === id ? { ...job, status: "Approved" } : job));
//   };

//   const deleteJob = (id) => {
//     setJobs(jobs.filter(job => job.id !== id));
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="max-w-6xl mx-auto px-6 py-12">
//         <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
//           Manage Job Listings
//         </h1>

//         <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
//           <table className="w-full table-auto border-collapse border border-gray-300">
//             <thead>
//               <tr className="bg-blue-600 text-white">
//                 <th className="p-3 border">Job Title</th>
//                 <th className="p-3 border">Company</th>
//                 <th className="p-3 border">Status</th>
//                 <th className="p-3 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {jobs.map(job => (
//                 <tr key={job.id} className="border text-center">
//                   <td className="p-3 border">{job.title}</td>
//                   <td className="p-3 border">{job.company}</td>
//                   <td className={`p-3 border font-semibold ${job.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
//                     {job.status}
//                   </td>
//                   <td className="p-3 border flex justify-center space-x-4">
//                     {job.status === "Pending" && (
//                       <button
//                         className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition duration-300"
//                         onClick={() => approveJob(job.id)}
//                       >
//                         <FaCheck />
//                       </button>
//                     )}
//                     <button
//                       className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition duration-300"
//                       onClick={() => deleteJob(job.id)}
//                     >
//                       <FaTrash />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageJobs;

import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { FaCheck, FaTrash } from "react-icons/fa";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Software Engineer", company: "TechCorp", status: "Pending" },
    { id: 2, title: "Marketing Manager", company: "BizSolutions", status: "Approved" },
    { id: 3, title: "Data Analyst", company: "DataWorks", status: "Pending" },
  ]);

  const approveJob = (id) => {
    setJobs(jobs.map(job => (job.id === id ? { ...job, status: "Approved" } : job)));
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
          Manage Job Listings
        </h1>

        {/* Jobs Table Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl bg-gradient-to-br from-white to-blue-50 border border-blue-100 animate-fade-in-up max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 sm:mb-6 tracking-wide">
            Job Listings
          </h2>
          {jobs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md">
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200 rounded-tl-xl">
                      Job Title
                    </th>
                    <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold border border-gray-200">
                      Company
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
                  {jobs.map((job, index) => (
                    <tr
                      key={job.id}
                      className={`transition-colors duration-200 border border-gray-200 ${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-blue-100 hover:shadow-md`}
                    >
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
                        {job.title}
                      </td>
                      <td className="p-3 sm:p-4 text-gray-800 text-sm sm:text-base font-medium border border-gray-200">
                        {job.company}
                      </td>
                      <td
                        className={`p-3 sm:p-4 font-semibold text-sm sm:text-base border border-gray-200 ${
                          job.status === "Approved"
                            ? "text-green-600 animate-pulse-once"
                            : "text-yellow-600 animate-pulse-once"
                        }`}
                      >
                        {job.status}
                      </td>
                      <td className="p-3 sm:p-4 border border-gray-200">
                        <div className="flex space-x-2 sm:space-x-3">
                          {job.status === "Pending" && (
                            <button
                              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                              onClick={() => approveJob(job.id)}
                            >
                              <FaCheck /> <span>Approve</span>
                            </button>
                          )}
                          <button
                            className="bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-red-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-[1.05] hover:shadow-lg text-sm sm:text-base flex items-center space-x-1"
                            onClick={() => deleteJob(job.id)}
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
      <Footer />
    </div>
  );
};

export default ManageJobs;