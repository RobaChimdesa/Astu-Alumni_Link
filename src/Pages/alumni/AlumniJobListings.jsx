// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";

// const jobListings = [
//   { id: 1, title: "Software Engineer", company: "TechCorp", location: "Addis Ababa", deadline: "March 30, 2024" },
//   { id: 2, title: "Marketing Manager", company: "Adama Marketing Ltd", location: "Adama", deadline: "April 10, 2024" },
//   { id: 3, title: "Mechanical Engineer", company: "Hawassa Engineering", location: "Hawassa", deadline: "April 20, 2024" },
// ];

// const AlumniJobListings = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [appliedJobs, setAppliedJobs] = useState([]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const handleApply = (jobId) => {
//     if (!appliedJobs.includes(jobId)) {
//       setAppliedJobs([...appliedJobs, jobId]);
//       alert("You have successfully applied for this job!");
//     } else {
//       alert("You have already applied for this job.");
//     }
//   };

//   const filteredJobs = jobListings.filter(
//     (job) =>
//       job.title.toLowerCase().includes(searchTerm) ||
//       job.company.toLowerCase().includes(searchTerm) ||
//       job.location.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="max-w-6xl mx-auto px-6 py-12">
//         <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">Job Listings</h1>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="Search by title, company, or location..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Job Listings */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredJobs.length > 0 ? (
//             filteredJobs.map((job) => (
//               <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
//                 <p className="text-gray-600">Company: {job.company}</p>
//                 <p className="text-gray-600">Location: {job.location}</p>
//                 <p className="text-gray-700 font-semibold">Deadline: {job.deadline}</p>
//                 <button
//                   className={`mt-4 px-4 py-2 rounded-lg text-white transition duration-300 ${
//                     appliedJobs.includes(job.id)
//                       ? "bg-gray-500 cursor-not-allowed"
//                       : "bg-blue-600 hover:bg-blue-700"
//                   }`}
//                   onClick={() => handleApply(job.id)}
//                   disabled={appliedJobs.includes(job.id)}
//                 >
//                   {appliedJobs.includes(job.id) ? "Applied" : "Apply Now"}
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600 text-center col-span-full">No jobs found.</p>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default AlumniJobListings;
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const jobListings = [
  { id: 1, title: "Software Engineer", company: "TechCorp", location: "Addis Ababa", deadline: "2024-03-30" },
  { id: 2, title: "Marketing Manager", company: "Adama Marketing Ltd", location: "Adama", deadline: "2024-04-10" },
  { id: 3, title: "Mechanical Engineer", company: "Hawassa Engineering", location: "Hawassa", deadline: "2024-04-20" },
];

const AlumniJobListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobListings);
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredJobs(
      jobListings.filter(
        (job) =>
          job.title.toLowerCase().includes(value) ||
          job.company.toLowerCase().includes(value) ||
          job.location.toLowerCase().includes(value)
      )
    );
  };

  // Handle job application
  const handleApply = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
      alert("You have successfully applied for this job!");
    } else {
      alert("You have already applied for this job.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Alumni Job Listings
        </h1>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search by title, company, or location..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
          />
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-blue-500"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 truncate">
                  {job.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-medium">Company:</span> {job.company}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-medium">Location:</span> {job.location}
                </p>
                <p className="text-gray-700 text-sm sm:text-base font-semibold mt-1">
                  <span className="font-medium">Deadline:</span>{" "}
                  {new Date(job.deadline).toLocaleDateString()}
                </p>
                <button
                  className={`mt-4 w-full bg-gradient-to-r ${
                    appliedJobs.includes(job.id)
                      ? "from-gray-500 to-gray-600 cursor-not-allowed"
                      : "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  } text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 shadow-md`}
                  onClick={() => handleApply(job.id)}
                  disabled={appliedJobs.includes(job.id)}
                >
                  {appliedJobs.includes(job.id) ? "Applied" : "Apply Now"}
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center text-sm sm:text-base col-span-full py-6">
              No jobs found matching your search.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AlumniJobListings;