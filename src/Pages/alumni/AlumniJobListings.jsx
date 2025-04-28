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

//   const handleApply = async (jobId, applyLink) => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       console.log("Applying for job, jobId:", jobId, "applyLink:", applyLink, "token:", token ? "Present" : "Missing");
//       if (!token) {
//         setError("Please log in to apply for jobs.");
//         console.log("No token, navigating to /signin");
//         navigate("/signin", { state: { error: "Please log in to apply for jobs." } });
//         return;
//       }
//       // Record the application in the backend
//       await axios.post(
//         "http://localhost:8000/api/job-applications/",
//         { job_id: jobId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log("Application recorded for jobId:", jobId);
//       // Redirect to the Google Form
//       window.open(applyLink, "_blank");
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
//                     onClick={() => handleApply(job.id, job.apply_link)}
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const AlumniJobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [applyLink, setApplyLink] = useState(null);
  const [applicationId, setApplicationId] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formOpened, setFormOpened] = useState(false); // Track if Google Form was opened
  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      const refresh = localStorage.getItem('refreshToken');
      if (!refresh) throw new Error('No refresh token');
      const response = await axios.post('http://localhost:8000/api/token/refresh/', { refresh });
      localStorage.setItem('accessToken', response.data.access);
      return response.data.access;
    } catch (err) {
      console.error('Token refresh failed:', err);
      localStorage.clear();
      navigate('/signin');
      return null;
    }
  };

  const fetchJobs = async () => {
    try {
      let token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token');
      const response = await axios.get('http://localhost:8000/api/jobs/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(response.data.filter(job => job.status === 'approved'));
    } catch (err) {
      console.error('Fetch jobs error:', err.response || err);
      if (err.response?.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          try {
            const response = await axios.get('http://localhost:8000/api/jobs/', {
              headers: { Authorization: `Bearer ${newToken}` },
            });
            setJobs(response.data.filter(job => job.status === 'approved'));
          } catch (retryErr) {
            console.error('Retry failed:', retryErr);
            setError('Session expired. Please sign in again.');
            navigate('/signin');
          }
        }
      } else {
        setError(err.response?.data?.error || 'Failed to fetch jobs.');
      }
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
    setError('');
    setSuccess('');
    setApplyLink(null);
    setApplicationId(null);
    setFormSubmitted(false);
    setFormOpened(false);
    console.log(`handleApply: Reset state - applyLink: ${applyLink}, formSubmitted: ${formSubmitted}, applicationId: ${applicationId}, formOpened: ${formOpened}`);
    try {
      let token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token');
      console.log(`Applying to job: ${jobId}`);
      const response = await axios.post(
        'http://localhost:8000/api/job-applications/',
        { job: jobId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Application response:', JSON.stringify(response.data, null, 2));
      if (!response.data.application || !response.data.message || !response.data.apply_link) {
        console.error('Incomplete response:', response.data);
        throw new Error('Incomplete application response: missing application, message, or apply_link');
      }
      setSuccess(response.data.message);
      setApplyLink(response.data.apply_link);
      setFormSubmitted(response.data.application.form_submitted);
      setApplicationId(response.data.application.id);
      console.log(`handleApply: Updated state - applyLink: ${response.data.apply_link}, formSubmitted: ${response.data.application.form_submitted}, applicationId: ${response.data.application.id}, formOpened: ${formOpened}`);
    } catch (err) {
      console.error('Failed to apply:', err);
      if (err.response?.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          try {
            const response = await axios.post(
              'http://localhost:8000/api/job-applications/',
              { job: jobId },
              { headers: { Authorization: `Bearer ${newToken}` } }
            );
            console.log('Application response:', JSON.stringify(response.data, null, 2));
            if (!response.data.application || !response.data.message || !response.data.apply_link) {
              console.error('Incomplete response:', response.data);
              throw new Error('Incomplete application response: missing application, message, or apply_link');
            }
            setSuccess(response.data.message);
            setApplyLink(response.data.apply_link);
            setFormSubmitted(response.data.application.form_submitted);
            setApplicationId(response.data.application.id);
            console.log(`handleApply: Updated state (retry) - applyLink: ${response.data.apply_link}, formSubmitted: ${response.data.application.form_submitted}, applicationId: ${response.data.application.id}, formOpened: ${formOpened}`);
          } catch (retryErr) {
            console.error('Retry failed:', retryErr);
            setError('Session expired. Please sign in again.');
            navigate('/signin');
          }
        }
      } else {
        setError(err.response?.data?.error || `Failed to apply for job: ${err.message}`);
      }
    }
  };

  const handleConfirmSubmission = async () => {
    if (!applicationId) {
      setError('No application ID available for confirmation.');
      return;
    }
    try {
      let token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token');
      console.log(`Confirming submission for application: ${applicationId}`);
      const response = await axios.post(
        `http://localhost:8000/api/job-applications/${applicationId}/confirm/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Confirmation successful:', response.data);
      setSuccess('You have already applied to this job.');
      setApplyLink(null);
      setApplicationId(null);
      setFormSubmitted(true);
      setFormOpened(false);
      console.log(`handleConfirmSubmission: Reset state - applyLink: ${applyLink}, formSubmitted: ${formSubmitted}, applicationId: ${applicationId}, formOpened: ${formOpened}`);
    } catch (err) {
      console.error('Failed to confirm submission:', err);
      if (err.response?.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          try {
            const response = await axios.post(
              `http://localhost:8000/api/job-applications/${applicationId}/confirm/`,
              {},
              { headers: { Authorization: `Bearer ${newToken}` } }
            );
            console.log('Confirmation successful:', response.data);
            setSuccess('You have already applied to this job.');
            setApplyLink(null);
            setApplicationId(null);
            setFormSubmitted(true);
            setFormOpened(false);
            console.log(`handleConfirmSubmission: Reset state (retry) - applyLink: ${applyLink}, formSubmitted: ${formSubmitted}, applicationId: ${applicationId}, formOpened: ${formOpened}`);
          } catch (retryErr) {
            console.error('Retry failed:', retryErr);
            setError('Session expired. Please sign in again.');
            navigate('/signin');
          }
        }
      } else {
        setError(err.response?.data?.error || 'Failed to confirm form submission.');
      }
    }
  };

  const handleFormOpen = () => {
    setFormOpened(true);
    console.log(`handleFormOpen: Updated formOpened: ${formOpened}`);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Sidebar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8">
          Job Listings
        </h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 text-center">
            {success}
            {applyLink && !formSubmitted && (
              <span>
                {' '}
                <a
                  href={applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                  onClick={handleFormOpen}
                >
                  Continue
                </a>
              </span>
            )}
            {applyLink && !formSubmitted && formOpened && (
              <div className="mt-2">
                <button
                  onClick={handleConfirmSubmission}
                  className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                  Confirm Form Submission
                </button>
              </div>
            )}
          </p>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600">Company: {job.company}</p>
                <p className="text-gray-600">Location: {job.location}</p>
                <p className="text-gray-600">Type: {job.job_type}</p>
                <p className="text-gray-600">Deadline: {job.deadline}</p>
                <button
                  onClick={() => handleApply(job.id)}
                  className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Apply
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No jobs available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniJobListings;