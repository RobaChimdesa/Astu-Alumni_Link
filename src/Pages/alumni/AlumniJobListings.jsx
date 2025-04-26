// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";

// const AlumniJobListings = () => {
//   const [jobs, setJobs] = useState([]);
//   const [applications, setApplications] = useState([]);
//   const [error, setError] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log("AlumniJobListings mounted, checking token:", localStorage.getItem("accessToken"));
//     fetchJobs();
//     fetchApplications();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       console.log("Fetching jobs, token:", token ? "Present" : "Missing");
//       if (!token) {
//         setError("Please log in to view jobs.");
//         console.log("No token, navigating to /signin");
//         navigate("/signin", { state: { error: "Please log in to view jobs." } });
//         return;
//       }
//       const response = await axios.get("http://localhost:8000/api/jobs/", {
//         headers: { Authorization: `Bearer ${token}` },
//         params: { t: new Date().getTime() },
//       });
//       console.log("Jobs fetched:", response.data);
//       setJobs(response.data);
//       setError("");
//     } catch (err) {
//       console.error("Failed to fetch jobs:", err.message, err.response?.data, err.response?.status);
//       const errorMsg = err.response?.data?.detail || "Failed to fetch jobs.";
//       setError(errorMsg);
//       if (err.response?.status === 401 && errorMsg !== "User is inactive") {
//         console.log("Unauthorized (non-inactive), clearing token and navigating to /signin");
//         localStorage.removeItem("accessToken");
//         navigate("/signin", { state: { error: errorMsg } });
//       }
//     }
//   };

//   const fetchApplications = async () => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       console.log("Fetching applications, token:", token ? "Present" : "Missing");
//       if (!token) {
//         setError("Please log in to view applications.");
//         console.log("No token, navigating to /signin");
//         navigate("/signin", { state: { error: "Please log in to view applications." } });
//         return;
//       }
//       const response = await axios.get("http://localhost:8000/api/job-applications/", {
//         headers: { Authorization: `Bearer ${token}` },
//         params: { t: new Date().getTime() },
//       });
//       console.log("Applications fetched:", response.data);
//       setApplications(response.data);
//       setError("");
//     } catch (err) {
//       console.error("Failed to fetch applications:", err.message, err.response?.data, err.response?.status);
//       const errorMsg = err.response?.data?.detail || "Failed to fetch applications.";
//       setError(errorMsg);
//       if (err.response?.status === 401 && errorMsg !== "User is inactive") {
//         console.log("Unauthorized (non-inactive), clearing token and navigating to /signin");
//         localStorage.removeItem("accessToken");
//         navigate("/signin", { state: { error: errorMsg } });
//       }
//     }
//   };

//   const handleApply = async (jobId) => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       console.log("Applying for job, token:", token ? "Present" : "Missing");
//       if (!token) {
//         setError("Please log in to apply for jobs.");
//         console.log("No token, navigating to /signin");
//         navigate("/signin", { state: { error: "Please log in to apply for jobs." } });
//         return;
//       }
//       const response = await axios.post(
//         "http://localhost:8000/api/job-applications/",
//         { job_id: jobId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log("Application submitted:", response.data);
//       setError("");
//       fetchApplications();
//     } catch (err) {
//       console.error("Failed to apply:", err.message, err.response?.data, err.response?.status);
//       setError(err.response?.data?.message || "Failed to apply for job.");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
//       <div className="flex flex-1">
//         <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
//         <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full ml-0 md:ml-16 lg:ml-64">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
//             Job Listings
//           </h1>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           {jobs.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {jobs.map((job) => (
//                 <div key={job.id} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
//                   <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
//                   <p className="text-gray-600">{job.company}</p>
//                   <p className="text-gray-600">{job.location}</p>
//                   <p className="text-gray-600">{job.job_type}</p>
//                   <p className="text-gray-600">Deadline: {job.deadline}</p>
//                   <button
//                     onClick={() => handleApply(job.id)}
//                     disabled={applications.some((app) => app.job_id === job.id)}
//                     className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:bg-gray-400"
//                   >
//                     {applications.some((app) => app.job_id === job.id) ? "Applied" : "Apply"}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-center text-gray-600">No jobs available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlumniJobListings;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const AlumniJobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("AlumniJobListings mounted, checking token:", localStorage.getItem("accessToken"));
    fetchJobs();
    fetchApplications();
  }, []);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      console.log("Fetching jobs, token:", token ? "Present" : "Missing");
      if (!token) {
        setError("Please log in to view jobs.");
        console.log("No token, navigating to /signin");
        navigate("/signin", { state: { error: "Please log in to view jobs." } });
        return;
      }
      const response = await axios.get("http://localhost:8000/api/jobs/", {
        headers: { Authorization: `Bearer ${token}` },
        params: { t: new Date().getTime() },
      });
      console.log("Jobs fetched:", response.data);
      setJobs(response.data);
      setError("");
    } catch (err) {
      console.error("Failed to fetch jobs:", err.message, err.response?.data, err.response?.status);
      const errorMsg = err.response?.data?.detail || "Failed to fetch jobs.";
      setError(errorMsg);
      if (err.response?.status === 401 && errorMsg !== "User is inactive") {
        console.log("Unauthorized (non-inactive), clearing token and navigating to /signin");
        localStorage.removeItem("accessToken");
        navigate("/signin", { state: { error: errorMsg } });
      }
    }
  };

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      console.log("Fetching applications, token:", token ? "Present" : "Missing");
      if (!token) {
        setError("Please log in to view applications.");
        console.log("No token, navigating to /signin");
        navigate("/signin", { state: { error: "Please log in to view applications." } });
        return;
      }
      const response = await axios.get("http://localhost:8000/api/job-applications/", {
        headers: { Authorization: `Bearer ${token}` },
        params: { t: new Date().getTime() },
      });
      console.log("Applications fetched:", response.data);
      setApplications(response.data);
      setError("");
    } catch (err) {
      console.error("Failed to fetch applications:", err.message, err.response?.data, err.response?.status);
      const errorMsg = err.response?.data?.detail || "Failed to fetch applications.";
      setError(errorMsg);
      if (err.response?.status === 401 && errorMsg !== "User is inactive") {
        console.log("Unauthorized (non-inactive), clearing token and navigating to /signin");
        localStorage.removeItem("accessToken");
        navigate("/signin", { state: { error: errorMsg } });
      }
    }
  };

  const handleApply = async (jobId, applyLink) => {
    try {
      const token = localStorage.getItem("accessToken");
      console.log("Applying for job, jobId:", jobId, "applyLink:", applyLink, "token:", token ? "Present" : "Missing");
      if (!token) {
        setError("Please log in to apply for jobs.");
        console.log("No token, navigating to /signin");
        navigate("/signin", { state: { error: "Please log in to apply for jobs." } });
        return;
      }
      // Record the application in the backend
      await axios.post(
        "http://localhost:8000/api/job-applications/",
        { job_id: jobId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Application recorded for jobId:", jobId);
      // Redirect to the Google Form
      window.open(applyLink, "_blank");
      setError("");
      fetchApplications();
    } catch (err) {
      console.error("Failed to apply:", err.message, err.response?.data, err.response?.status);
      setError(err.response?.data?.message || "Failed to apply for job.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full ml-0 md:ml-16 lg:ml-64">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 tracking-tight animate-fade-in-down">
            Job Listings
          </h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {jobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                  <p className="text-gray-600">{job.company}</p>
                  <p className="text-gray-600">{job.location}</p>
                  <p className="text-gray-600">{job.job_type}</p>
                  <p className="text-gray-600">Deadline: {job.deadline}</p>
                  <button
                    onClick={() => handleApply(job.id, job.apply_link)}
                    disabled={applications.some((app) => app.job_id === job.id)}
                    className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:bg-gray-400"
                  >
                    {applications.some((app) => app.job_id === job.id) ? "Applied" : "Apply"}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">No jobs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniJobListings;