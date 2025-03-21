import Sidebar from "./Sidebar";
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const ViewApplications = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      resume: "https://example.com/johndoe-resume.pdf",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      resume: "https://example.com/janesmith-resume.pdf",
      status: "Pending",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setApplications((prevApplications) =>
      prevApplications.map((app) =>
        app.id === id ? { ...app, status: newStatus } : app
      )
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Job Applications
        </h1>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
          Review and manage job applications from candidates.
        </p>

        {/* Applications Table Card */}
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
                        {app.name}
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700 text-sm sm:text-base">
                        {app.email}
                      </td>
                      <td className="p-3 sm:p-4">
                        <a
                          href={app.resume}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-sm sm:text-base"
                        >
                          View Resume
                        </a>
                      </td>
                      <td className="p-3 sm:p-4 text-gray-700 font-semibold text-sm sm:text-base">
                        {app.status}
                      </td>
                      <td className="p-3 sm:p-4 space-x-2 sm:space-x-3">
                        <button
                          className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md text-sm sm:text-base"
                          onClick={() => handleStatusChange(app.id, "Accepted")}
                        >
                          Accept
                        </button>
                        <button
                          className="bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold px-4 sm:px-5 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md text-sm sm:text-base"
                          onClick={() => handleStatusChange(app.id, "Rejected")}
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
      {/* <Footer /> */}
    </div>
  );
};

export default ViewApplications;