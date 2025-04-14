// import Sidebar from "./Sidebar";
// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";

// const PostJob = () => {
//   const [jobData, setJobData] = useState({
//     title: "",
//     company: "Tech Innovations Inc.",
//     location: "",
//     jobType: "",
//     description: "",
//     requirements: "",
//     applyLink: "",
//   });

//   const handleChange = (e) => {
//     setJobData({ ...jobData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Job posted successfully!");
//     console.log(jobData);
//     setJobData({
//       title: "",
//       company: "Tech Innovations Inc.",
//       location: "",
//       jobType: "",
//       description: "",
//       requirements: "",
//       applyLink: "",
//     });
//   };

//   const handleCancel = () => {
//     setJobData({
//       title: "",
//       company: "Tech Innovations Inc.",
//       location: "",
//       jobType: "",
//       description: "",
//       requirements: "",
//       applyLink: "",
//     });
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
//       {/* <Navbar /> */}
//       <Sidebar/>
//       <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
//           Post a Job
//         </h1>

//         {/* Job Posting Form Card */}
//         <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
//           <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
//               <div>
//                 <label
//                   htmlFor="title"
//                   className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//                 >
//                   Job Title
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={jobData.title}
//                   onChange={handleChange}
//                   placeholder="Enter job title"
//                   required
//                   className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="company"
//                   className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//                 >
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   name="company"
//                   value={jobData.company}
//                   disabled
//                   className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-100 text-gray-600 text-sm sm:text-base shadow-sm cursor-not-allowed"
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
//               <div>
//                 <label
//                   htmlFor="location"
//                   className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//                 >
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={jobData.location}
//                   onChange={handleChange}
//                   placeholder="e.g., Addis Ababa"
//                   required
//                   className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="jobType"
//                   className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//                 >
//                   Job Type
//                 </label>
//                 <select
//                   name="jobType"
//                   value={jobData.jobType}
//                   onChange={handleChange}
//                   required
//                   className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 text-sm sm:text-base shadow-sm"
//                 >
//                   <option value="">Select job type</option>
//                   <option value="Full-Time">Full-Time</option>
//                   <option value="Part-Time">Part-Time</option>
//                   <option value="Internship">Internship</option>
//                 </select>
//               </div>
//             </div>
//             <div>
//               <label
//                 htmlFor="description"
//                 className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//               >
//                 Description
//               </label>
//               <textarea
//                 name="description"
//                 value={jobData.description}
//                 onChange={handleChange}
//                 placeholder="Describe the job role and responsibilities"
//                 required
//                 className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm h-40"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="requirements"
//                 className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//               >
//                 Requirements
//               </label>
//               <textarea
//                 name="requirements"
//                 value={jobData.requirements}
//                 onChange={handleChange}
//                 placeholder="List the required skills and qualifications"
//                 required
//                 className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm h-40"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="applyLink"
//                 className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//               >
//                 Application Link
//               </label>
//               <input
//                 type="url"
//                 name="applyLink"
//                 value={jobData.applyLink}
//                 onChange={handleChange}
//                 placeholder="e.g., https://company.com/apply"
//                 required
//                 className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
//               />
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 type="submit"
//                 className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
//               >
//                 Post Job
//               </button>
//               <button
//                 type="button"
//                 className="w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default PostJob;


import Sidebar from "./Sidebar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    location: "",
    job_type: "",
    description: "",
    requirements: "",
    apply_link: "",
    deadline: "",
  });
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const refreshToken = async () => {
    try {
      const refresh = localStorage.getItem("refreshToken");
      if (!refresh) throw new Error("No refresh token");
      const response = await axios.post("http://localhost:8000/api/token/refresh/", {
        refresh,
      });
      localStorage.setItem("accessToken", response.data.access);
      return response.data.access;
    } catch (err) {
      console.error("Token refresh failed:", err);
      localStorage.clear();
      navigate("/signin");
      return null;
    }
  };

  const fetchJobs = async () => {
    try {
      let token = localStorage.getItem("accessToken");
      if (!token) throw new Error("No access token");

      const response = await axios.get("http://localhost:8000/api/jobs/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(response.data);
    } catch (err) {
      console.error("Fetch jobs error:", err.response || err);
      if (err.response?.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          try {
            const response = await axios.get("http://localhost:8000/api/jobs/", {
              headers: { Authorization: `Bearer ${newToken}` },
            });
            setJobs(response.data);
          } catch (retryErr) {
            console.error("Retry failed:", retryErr);
            setError("Session expired. Please sign in again.");
            navigate("/signin");
          }
        }
      } else {
        setError(err.response?.data?.message || "Failed to fetch jobs.");
      }
    }
  };

  useEffect(() => {
    console.log("PostJob useEffect: Checking localStorage");
    console.log("accessToken:", localStorage.getItem("accessToken"));
    console.log("userRole:", localStorage.getItem("userRole"));
    fetchJobs();
  }, []);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      let token = localStorage.getItem("accessToken");
      if (!token) throw new Error("No access token");

      await axios.post("http://localhost:8000/api/jobs/", jobData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess("Job posted successfully!");
      setJobData({
        title: "",
        location: "",
        job_type: "",
        description: "",
        requirements: "",
        apply_link: "",
        deadline: "",
      });
      fetchJobs();
    } catch (err) {
      console.error("Post job error:", err.response || err);
      if (err.response?.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          try {
            await axios.post("http://localhost:8000/api/jobs/", jobData, {
              headers: { Authorization: `Bearer ${newToken}` },
            });
            setSuccess("Job posted successfully!");
            setJobData({
              title: "",
              location: "",
              job_type: "",
              description: "",
              requirements: "",
              apply_link: "",
              deadline: "",
            });
            fetchJobs();
          } catch (retryErr) {
            setError("Session expired. Please sign in again.");
            navigate("/signin");
          }
        }
      } else {
        setError(err.response?.data?.message || "Failed to post job.");
      }
    }
  };

  const handleCancel = () => {
    setJobData({
      title: "",
      location: "",
      job_type: "",
      description: "",
      requirements: "",
      apply_link: "",
      deadline: "",
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Sidebar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Post a Job
        </h1>

        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={jobData.title}
                  onChange={handleChange}
                  placeholder="Enter job title"
                  required
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={jobData.location}
                  onChange={handleChange}
                  placeholder="e.g., Addis Ababa"
                  required
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label htmlFor="job_type" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Job Type
                </label>
                <select
                  name="job_type"
                  value={jobData.job_type}
                  onChange={handleChange}
                  required
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 text-sm sm:text-base shadow-sm"
                >
                  <option value="">Select job type</option>
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label htmlFor="deadline" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={jobData.deadline}
                  onChange={handleChange}
                  required
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 text-sm sm:text-base shadow-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Description
              </label>
              <textarea
                name="description"
                value={jobData.description}
                onChange={handleChange}
                placeholder="Describe the job role and responsibilities"
                required
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm h-40"
              />
            </div>
            <div>
              <label htmlFor="requirements" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Requirements
              </label>
              <textarea
                name="requirements"
                value={jobData.requirements}
                onChange={handleChange}
                placeholder="List the required skills and qualifications"
                required
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm h-40"
              />
            </div>
            <div>
              <label htmlFor="apply_link" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Application Link
              </label>
              <input
                type="url"
                name="apply_link"
                value={jobData.apply_link}
                onChange={handleChange}
                placeholder="e.g., https://company.com/apply"
                required
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
              >
                Post Job
              </button>
              <button
                type="button"
                className="w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Your Jobs</h2>
          {jobs.length > 0 ? (
            <div className="grid gap-4">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600">Location: {job.location}</p>
                  <p className="text-gray-600">Type: {job.job_type}</p>
                  <p className="text-gray-600">Deadline: {job.deadline}</p>
                  <p className="text-gray-600">Status: {job.status}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No jobs posted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostJob;
