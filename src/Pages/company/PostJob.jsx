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
//       <Navbar />
//       <div className="flex-1 max-w-[90rem] sm:max-w-[100rem] md:max-w-[110rem] lg:max-w-[120rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
//           Post a Job
//         </h1>

//         {/* Job Posting Form Card */}
//         <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg">
//           <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
//             <div>
//               <label
//                 htmlFor="title"
//                 className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//               >
//                 Job Title
//               </label>
//               <input
//                 type="text"
//                 name="title"
//                 value={jobData.title}
//                 onChange={handleChange}
//                 placeholder="Enter job title"
//                 required
//                 className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="company"
//                 className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//               >
//                 Company
//               </label>
//               <input
//                 type="text"
//                 name="company"
//                 value={jobData.company}
//                 disabled
//                 className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-100 text-gray-600 text-sm sm:text-base shadow-sm cursor-not-allowed"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="location"
//                 className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//               >
//                 Location
//               </label>
//               <input
//                 type="text"
//                 name="location"
//                 value={jobData.location}
//                 onChange={handleChange}
//                 placeholder="e.g., Addis Ababa"
//                 required
//                 className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="jobType"
//                 className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//               >
//                 Job Type
//               </label>
//               <select
//                 name="jobType"
//                 value={jobData.jobType}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 text-sm sm:text-base shadow-sm"
//               >
//                 <option value="">Select job type</option>
//                 <option value="Full-Time">Full-Time</option>
//                 <option value="Part-Time">Part-Time</option>
//                 <option value="Internship">Internship</option>
//               </select>
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
//                 className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm h-32"
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
//                 className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm h-32"
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
//       <Footer />
//     </div>
//   );
// };

// export default PostJob;
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "Tech Innovations Inc.",
    location: "",
    jobType: "",
    description: "",
    requirements: "",
    applyLink: "",
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job posted successfully!");
    console.log(jobData);
    setJobData({
      title: "",
      company: "Tech Innovations Inc.",
      location: "",
      jobType: "",
      description: "",
      requirements: "",
      applyLink: "",
    });
  };

  const handleCancel = () => {
    setJobData({
      title: "",
      company: "Tech Innovations Inc.",
      location: "",
      jobType: "",
      description: "",
      requirements: "",
      applyLink: "",
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Post a Job
        </h1>

        {/* Job Posting Form Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
                >
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
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
                >
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={jobData.company}
                  disabled
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-100 text-gray-600 text-sm sm:text-base shadow-sm cursor-not-allowed"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="location"
                  className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
                >
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
              <div>
                <label
                  htmlFor="jobType"
                  className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
                >
                  Job Type
                </label>
                <select
                  name="jobType"
                  value={jobData.jobType}
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
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
              >
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
              <label
                htmlFor="requirements"
                className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
              >
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
              <label
                htmlFor="applyLink"
                className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
              >
                Application Link
              </label>
              <input
                type="url"
                name="applyLink"
                value={jobData.applyLink}
                onChange={handleChange}
                placeholder="e.g., https://company.com/apply"
                required
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
              />
            </div>
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
      </div>
      <Footer />
    </div>
  );
};

export default PostJob;