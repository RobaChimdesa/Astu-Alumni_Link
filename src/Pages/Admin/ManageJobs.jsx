import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import { FaCheck, FaTrash } from "react-icons/fa";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Software Engineer", company: "TechCorp", status: "Pending" },
    { id: 2, title: "Marketing Manager", company: "BizSolutions", status: "Approved" },
    { id: 3, title: "Data Analyst", company: "DataWorks", status: "Pending" },
  ]);

  const approveJob = (id) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, status: "Approved" } : job));
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Manage Job Listings
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Job Title</th>
                <th className="p-3 border">Company</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id} className="border text-center">
                  <td className="p-3 border">{job.title}</td>
                  <td className="p-3 border">{job.company}</td>
                  <td className={`p-3 border font-semibold ${job.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                    {job.status}
                  </td>
                  <td className="p-3 border flex justify-center space-x-4">
                    {job.status === "Pending" && (
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition duration-300"
                        onClick={() => approveJob(job.id)}
                      >
                        <FaCheck />
                      </button>
                    )}
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition duration-300"
                      onClick={() => deleteJob(job.id)}
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

export default ManageJobs;
