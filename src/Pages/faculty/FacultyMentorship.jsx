import Sidebar from "./Sidebar";
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
        req.id === id
          ? { ...req, status: action === "accept" ? "Accepted" : "Declined" }
          : req
      )
    );
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <Sidebar/>
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Mentorship Requests
        </h1>

        {/* Mentorship Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {requests.length > 0 ? (
            requests.map((req) => (
              <div
                key={req.id}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-blue-500"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 truncate">
                  {req.student}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-medium">Field:</span> {req.field}
                </p>
                <p className="text-gray-700 font-semibold text-sm sm:text-base mt-1">
                  <span className="font-medium">Status:</span>{" "}
                  <span
                    className={
                      req.status === "Accepted"
                        ? "text-green-600"
                        : req.status === "Declined"
                        ? "text-red-600"
                        : "text-blue-600"
                    }
                  >
                    {req.status}
                  </span>
                </p>
                {req.status === "Pending" && (
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <button
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
                      onClick={() => handleAction(req.id, "accept")}
                    >
                      Accept
                    </button>
                    <button
                      className="w-full bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-md"
                      onClick={() => handleAction(req.id, "decline")}
                    >
                      Decline
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center text-sm sm:text-base col-span-full py-6">
              No mentorship requests at this time.
            </p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default FacultyMentorship;