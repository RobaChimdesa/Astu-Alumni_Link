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
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Job Applications
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Review and manage job applications from candidates.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Applicant Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Resume</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="text-center bg-white border">
                  <td className="p-3 border">{app.name}</td>
                  <td className="p-3 border">{app.email}</td>
                  <td className="p-3 border">
                    <a
                      href={app.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Resume
                    </a>
                  </td>
                  <td className="p-3 border font-semibold">{app.status}</td>
                  <td className="p-3 border space-x-2">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      onClick={() => handleStatusChange(app.id, "Accepted")}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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
      </div>
      <Footer />
    </div>
  );
};

export default ViewApplications;
