// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";

// const FacultyMentorship = () => {
//   const [requests, setRequests] = useState([
//     { id: 1, student: "John Doe", field: "Computer Science", status: "Pending" },
//     { id: 2, student: "Jane Smith", field: "Software Engineering", status: "Pending" },
//   ]);

//   const handleAction = (id, action) => {
//     setRequests(
//       requests.map((req) =>
//         req.id === id ? { ...req, status: action === "accept" ? "Accepted" : "Declined" } : req
//       )
//     );
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="max-w-4xl mx-auto px-6 py-12">
//         <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
//           Mentorship Requests
//         </h1>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           {requests.length > 0 ? (
//             <ul className="space-y-4">
//               {requests.map((req) => (
//                 <li
//                   key={req.id}
//                   className={`flex justify-between items-center p-4 rounded-md ${
//                     req.status === "Accepted" ? "bg-green-100" : req.status === "Declined" ? "bg-red-100" : "bg-blue-100"
//                   }`}
//                 >
//                   <span className="text-gray-800">
//                     {req.student} - {req.field} - <strong>{req.status}</strong>
//                   </span>
//                   {req.status === "Pending" && (
//                     <div className="space-x-2">
//                       <button
//                         className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
//                         onClick={() => handleAction(req.id, "accept")}
//                       >
//                         Accept
//                       </button>
//                       <button
//                         className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
//                         onClick={() => handleAction(req.id, "decline")}
//                       >
//                         Decline
//                       </button>
//                     </div>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600 text-center">No mentorship requests.</p>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default FacultyMentorship;
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
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen font-sans">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2">
            Mentorship Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Manage your student mentorship requests</p>
        </header>

        <section className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {requests.length > 0 ? (
            <ul className="space-y-4">
              {requests.map((req) => (
                <li
                  key={req.id}
                  className={`flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 rounded-lg transition-all duration-300 ${
                    req.status === "Accepted"
                      ? "bg-green-50 border-l-4 border-green-500"
                      : req.status === "Declined"
                      ? "bg-red-50 border-l-4 border-red-500"
                      : "bg-blue-50 border-l-4 border-blue-500 hover:shadow-md"
                  }`}
                >
                  <div className="mb-3 sm:mb-0">
                    <span className="text-lg font-medium text-gray-800 block">
                      {req.student}
                    </span>
                    <span className="text-sm text-gray-600">
                      {req.field} •{" "}
                      <span
                        className={`font-semibold ${
                          req.status === "Accepted"
                            ? "text-green-600"
                            : req.status === "Declined"
                            ? "text-red-600"
                            : "text-blue-600"
                        }`}
                      >
                        {req.status}
                      </span>
                    </span>
                  </div>
                  {req.status === "Pending" && (
                    <div className="flex space-x-3">
                      <button
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105"
                        onClick={() => handleAction(req.id, "accept")}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 ease-in-out transform hover:scale-105"
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
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg italic">No mentorship requests at this time.</p>
              <p className="text-gray-400 text-sm mt-2">Check back later for new requests.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FacultyMentorship;