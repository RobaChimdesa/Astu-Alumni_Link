
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";

// const ViewApplications = () => {
//   const [applications, setApplications] = useState([]);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     console.log("ViewApplications mounted, checking token:", localStorage.getItem("accessToken"));
//     fetchApplications();
//   }, []);

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
//       const response = await axios.get("http://localhost:8000/api/company-applications/", {
//         headers: { Authorization: `Bearer ${token}` },
//         params: { t: new Date().getTime() },
//       });
//       console.log("Applications fetched:", response.data);
//       setApplications(response.data);
//       setError("");
//     } catch (err) {
//       console.error("Failed to fetch applications:", err.message, err.response?.data, err.response?.status);
//       const errorMsg = err.response?.data?.error || "Failed to fetch applications.";
//       setError(errorMsg);
//       if (err.response?.status === 401) {
//         console.log("Unauthorized, clearing token and navigating to /signin");
//         localStorage.removeItem("accessToken");
//         navigate("/signin", { state: { error: errorMsg } });
//       }
//     }
//   };

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       const token = localStorage.getItem("accessToken");
//       console.log("Updating application status, id:", id, "newStatus:", newStatus, "token:", token ? "Present" : "Missing");
//       if (!token) {
//         setError("Please log in to update application status.");
//         console.log("No token, navigating to /signin");
//         navigate("/signin", { state: { error: "Please log in to update application status." } });
//         return;
//       }
//       const response = await axios.put(
//         `http://localhost:8000/api/company-applications/${id}/`,
//         { status: newStatus },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log("Application status updated:", response.data);
//       setApplications((prevApplications) =>
//         prevApplications.map((app) =>
//           app.id === id ? { ...app, status: newStatus } : app
//         )
//       );
//       setError("");
//     } catch (err) {
//       console.error("Failed to update status:", err.message, err.response?.data, err.response?.status);
//       setError(err.response?.data?.error || "Failed to update application status.");
//     }
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
//       <div className="flex flex-1">
//         <Sidebar />
//         <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
//             Job Applications
//           </h1>
//           <p className="text-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
//             Review and manage job applications from candidates.
//           </p>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
//             {applications.length > 0 ? (
//               <div className="overflow-x-auto">
//                 <table className="w-full border-collapse">
//                   <thead>
//                     <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold rounded-tl-xl">
//                         Applicant Name
//                       </th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold">
//                         Email
//                       </th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold">
//                         Job Title
//                       </th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold">
//                         Resume
//                       </th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold">
//                         Status
//                       </th>
//                       <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold rounded-tr-xl">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {applications.map((app, index) => (
//                       <tr
//                         key={app.id}
//                         className={`border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${
//                           index === applications.length - 1 ? "rounded-b-xl" : ""
//                         }`}
//                       >
//                         <td className="p-3 sm:p-4 text-gray-700 text-sm sm:text-base">
//                           {app.applicant_name}
//                         </td>
//                         <td className="p-3 sm:p-4 text-gray-700 text-sm sm:text-base">
//                           {app.applicant_email}
//                         </td>
//                         <td className="p-3 sm:p-4 text-gray-700 text-sm sm:text-base">
//                           {app.job_title}
//                         </td>
//                         <td className="p-3 sm:p-4">
//                           {app.resume_link ? (
//                             <a
//                               href={app.resume_link}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-blue-600 hover:underline text-sm sm:text-base"
//                             >
//                               View Resume
//                             </a>
//                           ) : (
//                             <span className="text-gray-500 text-sm sm:text-base">No Resume</span>
//                           )}
//                         </td>
//                         <td className="p-3 sm:p-4 text-gray-700 font-semibold text-sm sm:text-base">
//                           {app.status}
//                         </td>
//                         <td className="p-3 sm:p-4 space-x-2 sm:space-x-3">
//                           <button
//                             className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md text-sm sm:text-base"
//                             onClick={() => handleStatusChange(app.id, "Accepted")}
//                             disabled={app.status === "Accepted"}
//                           >
//                             Accept
//                           </button>
//                           <button
//                             className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md text-sm sm:text-base"
//                             onClick={() => handleStatusChange(app.id, "Rejected")}
//                             disabled={app.status === "Rejected"}
//                           >
//                             Reject
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             ) : (
//               <p className="text-center text-gray-600 text-sm sm:text-base">
//                 No applications available.
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewApplications;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const ViewApplications = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Added for feedback
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ViewApplications mounted, checking token:", localStorage.getItem("accessToken"));
    fetchApplications();
  }, []);

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
      const response = await axios.get("http://localhost:8000/api/company-applications/", {
        headers: { Authorization: `Bearer ${token}` },
        params: { t: new Date().getTime() },
      });
      console.log("Applications fetched:", response.data);
      setApplications(response.data);
      setError("");
    } catch (err) {
      console.error("Failed to fetch applications:", err.message, err.response?.data, err.response?.status);
      const errorMsg = err.response?.data?.error || "Failed to fetch applications.";
      setError(errorMsg);
      if (err.response?.status === 401) {
        console.log("Unauthorized, clearing token and navigating to /signin");
        localStorage.removeItem("accessToken");
        navigate("/signin", { state: { error: errorMsg } });
      }
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("accessToken");
      console.log("Updating application status, id:", id, "newStatus:", newStatus, "token:", token ? "Present" : "Missing");
      if (!token) {
        setError("Please log in to update application status.");
        console.log("No token, navigating to /signin");
        navigate("/signin", { state: { error: "Please log in to update application status." } });
        return;
      }
      const response = await axios.put(
        `http://localhost:8000/api/company-applications/${id}/`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("Application status updated:", response.data);
      setApplications((prevApplications) =>
        prevApplications.map((app) =>
          app.id === id ? { ...app, status: newStatus } : app
        )
      );
      setSuccess(`Application ${newStatus.toLowerCase()} successfully! Notification sent to applicant.`);
      setError("");
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);
    } catch (err) {
      console.error("Failed to update status:", err.message, err.response?.data, err.response?.status);
      setError(err.response?.data?.error || "Failed to update application status.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
            Job Applications
          </h1>
          <p className="text-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
            Review and manage job applications from candidates.
          </p>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && <p className="text-green-500 text-center mb-4">{success}</p>}
          <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
            {applications.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold rounded-tl-xl">
                        Applicant Name
                      </th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold">
                        Email
                      </th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold">
                        Job Title
                      </th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold">
                        Resume
                      </th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold">
                        Status
                      </th>
                      <th className="p-3 sm:p-4 text-left text-sm sm:text-base font-semibold rounded-tr-xl">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app, index) => (
                      <tr
                        key={app.id}
                        className={`border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${
                          index === applications.length - 1 ? "rounded-b-xl" : ""
                        }`}
                      >
                        <td className="p-3 sm:p-4 text-gray-700 text-sm sm:text-base">
                          {app.applicant_name}
                        </td>
                        <td className="p-3 sm:p-4 text-gray-700 text-sm sm:text-base">
                          {app.applicant_email}
                        </td>
                        <td className="p-3 sm:p-4 text-gray-700 text-sm sm:text-base">
                          {app.job_title}
                        </td>
                        <td className="p-3 sm:p-4">
                          {app.resume_link ? (
                            <a
                              href={app.resume_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline text-sm sm:text-base"
                            >
                              View Resume
                            </a>
                          ) : (
                            <span className="text-gray-500 text-sm sm:text-base">No Resume</span>
                          )}
                        </td>
                        <td className="p-3 sm:p-4 text-gray-700 font-semibold text-sm sm:text-base">
                          {app.status}
                        </td>
                        <td className="p-3 sm:p-4 space-x-2 sm:space-x-3">
                          <button
                            className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md text-sm sm:text-base"
                            onClick={() => handleStatusChange(app.id, "Accepted")}
                            disabled={app.status === "Accepted"}
                          >
                            Accept
                          </button>
                          <button
                            className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md text-sm sm:text-base"
                            onClick={() => handleStatusChange(app.id, "Rejected")}
                            disabled={app.status === "Rejected"}
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-center text-gray-600 text-sm sm:text-base">
                No applications available.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewApplications;