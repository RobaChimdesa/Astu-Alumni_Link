import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const FacultyMentorship = () => {
  const [requests, setRequests] = useState([
    { id: 1, student: "John Doe", field: "Computer Science", status: "Pending" },
    { id: 2, student: "Jane Smith", field: "Software Engineering", status: "Pending" },
  ]);

  const handleAction = (id, action) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: action === "accept" ? "Accepted" : "Declined" } : req
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Mentorship Requests
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {requests.length > 0 ? (
            <ul className="space-y-4">
              {requests.map((req) => (
                <li
                  key={req.id}
                  className={`flex justify-between items-center p-4 rounded-md ${
                    req.status === "Accepted" ? "bg-green-100" : req.status === "Declined" ? "bg-red-100" : "bg-blue-100"
                  }`}
                >
                  <span className="text-gray-800">
                    {req.student} - {req.field} - <strong>{req.status}</strong>
                  </span>
                  {req.status === "Pending" && (
                    <div className="space-x-2">
                      <button
                        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                        onClick={() => handleAction(req.id, "accept")}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                        onClick={() => handleAction(req.id, "decline")}
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">No mentorship requests.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyMentorship;
