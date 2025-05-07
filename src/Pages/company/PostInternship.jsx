// import Sidebar from "./Sidebar";
// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";

// const PostInternship = () => {
//   const [internshipData, setInternshipData] = useState({
//     title: "",
//     company: "Tech Innovations Inc.",
//     location: "",
//     duration: "",
//     description: "",
//     requirements: "",
//     applyLink: "",
//   });

//   const handleChange = (e) => {
//     setInternshipData({ ...internshipData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Internship posted successfully!");
//     console.log(internshipData);
//     setInternshipData({
//       title: "",
//       company: "Tech Innovations Inc.",
//       location: "",
//       duration: "",
//       description: "",
//       requirements: "",
//       applyLink: "",
//     });
//   };

//   const handleCancel = () => {
//     setInternshipData({
//       title: "",
//       company: "Tech Innovations Inc.",
//       location: "",
//       duration: "",
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
//           Post an Internship
//         </h1>

//         {/* Internship Posting Form Card */}
//         <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
//           <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
//               <div>
//                 <label
//                   htmlFor="title"
//                   className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//                 >
//                   Internship Title
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={internshipData.title}
//                   onChange={handleChange}
//                   placeholder="Enter internship title"
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
//                   value={internshipData.company}
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
//                   value={internshipData.location}
//                   onChange={handleChange}
//                   placeholder="e.g., Addis Ababa"
//                   required
//                   className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="duration"
//                   className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
//                 >
//                   Duration
//                 </label>
//                 <input
//                   type="text"
//                   name="duration"
//                   value={internshipData.duration}
//                   onChange={handleChange}
//                   placeholder="e.g., 3 months"
//                   required
//                   className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
//                 />
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
//                 value={internshipData.description}
//                 onChange={handleChange}
//                 placeholder="Describe the internship role and responsibilities"
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
//                 value={internshipData.requirements}
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
//                 value={internshipData.applyLink}
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
//                 Post Internship
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

// export default PostInternship;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const PostInternship = () => {
  const [internshipData, setInternshipData] = useState({
    title: '',
    company: 'Tech Innovations Inc.', // Pre-filled, fetched from user profile ideally
    location: '',
    duration: '',
    description: '',
    requirements: '',
    apply_link: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInternshipData({ ...internshipData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token');
      const response = await axios.post(
        'http://localhost:8000/api/internships/',
        internshipData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('Internship posted successfully!');
      setInternshipData({
        title: '',
        company: 'Tech Innovations Inc.',
        location: '',
        duration: '',
        description: '',
        requirements: '',
        apply_link: '',
      });
    } catch (err) {
      console.error('Post internship error:', err);
      if (err.response?.status === 401) {
        try {
          const refresh = localStorage.getItem('refreshToken');
          const refreshResponse = await axios.post('http://localhost:8000/api/token/refresh/', { refresh });
          localStorage.setItem('accessToken', refreshResponse.data.access);
          const retryResponse = await axios.post(
            'http://localhost:8000/api/internships/',
            internshipData,
            { headers: { Authorization: `Bearer ${refreshResponse.data.access}` } }
          );
          setSuccess('Internship posted successfully!');
          setInternshipData({
            title: '',
            company: 'Tech Innovations Inc.',
            location: '',
            duration: '',
            description: '',
            requirements: '',
            apply_link: '',
          });
        } catch (refreshErr) {
          console.error('Token refresh failed:', refreshErr);
          setError('Session expired. Please sign in again.');
          navigate('/signin');
        }
      } else {
        setError(err.response?.data?.error || 'Failed to post internship.');
      }
    }
  };

  const handleCancel = () => {
    setInternshipData({
      title: '',
      company: 'Tech Innovations Inc.',
      location: '',
      duration: '',
      description: '',
      requirements: '',
      apply_link: '',
    });
    setError('');
    setSuccess('');
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Sidebar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Post an Internship
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Internship Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={internshipData.title}
                  onChange={handleChange}
                  placeholder="Enter internship title"
                  required
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={internshipData.company}
                  disabled
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg bg-gray-100 text-gray-600 text-sm sm:text-base shadow-sm cursor-not-allowed"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label htmlFor="location" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={internshipData.location}
                  onChange={handleChange}
                  placeholder="e.g., Addis Ababa"
                  required
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="duration" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  value={internshipData.duration}
                  onChange={handleChange}
                  placeholder="e.g., 3 months"
                  required
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Description
              </label>
              <textarea
                name="description"
                value={internshipData.description}
                onChange={handleChange}
                placeholder="Describe the internship role and responsibilities"
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
                value={internshipData.requirements}
                onChange={handleChange}
                placeholder="List the required skills and qualifications"
                required
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm h-40"
              />
            </div>
            <div>
              <label htmlFor="apply_link" className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                Application Link (Google Form)
              </label>
              <input
                type="url"
                name="apply_link"
                value={internshipData.apply_link}
                onChange={handleChange}
                placeholder="e.g., https://forms.gle/apply"
                required
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
              >
                Post Internship
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostInternship;