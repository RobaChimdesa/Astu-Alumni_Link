// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";
// import Sidebar from "./Sidebar";
// const internshipsData = [
//   { id: 1, title: "Software Development Intern", company: "TechCorp", location: "Addis Ababa", deadline: "March 30, 2024" },
//   { id: 2, title: "Marketing Intern", company: "Adama Marketing Ltd", location: "Adama", deadline: "April 10, 2024" },
//   { id: 3, title: "Mechanical Engineering Intern", company: "Hawassa Engineering", location: "Hawassa", deadline: "April 20, 2024" },
//   { id: 4, title: "Electrical Engineering Intern", company: "Dire Dawa Electric", location: "Dire Dawa", deadline: "April 25, 2024" },
// ];

// const InternshipListings = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredInternships, setFilteredInternships] = useState(internshipsData);

//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearchTerm(value);
//     setFilteredInternships(
//       internshipsData.filter(
//         (internship) =>
//           internship.title.toLowerCase().includes(value) ||
//           internship.company.toLowerCase().includes(value) ||
//           internship.location.toLowerCase().includes(value)
//       )
//     );
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
//       {/* <Navbar /> */}
//       <Sidebar/>
//       <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
//           Internship Listings
//         </h1>

//         {/* Search Bar */}
//         <div className="mb-6 sm:mb-8 max-w-lg mx-auto ml-12">
//           <input
//             type="text"
//             placeholder="Search by title, company, or location..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
//           />
//         </div>

//         {/* Internship Listings */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ml-9 md:ml-24">
//           {filteredInternships.length > 0 ? (
//             filteredInternships.map((internship) => (
//               <div
//                 key={internship.id}
//                 className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-blue-500"
//               >
//                 <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 truncate">{internship.title}</h3>
//                 <p className="text-gray-600 text-sm sm:text-base"><span className="font-medium">Company:</span> {internship.company}</p>
//                 <p className="text-gray-600 text-sm sm:text-base"><span className="font-medium">Location:</span> {internship.location}</p>
//                 <p className="text-gray-700 font-semibold text-sm sm:text-base mt-1"><span className="font-medium">Deadline:</span> {internship.deadline}</p>
//                 <button
//                   className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
//                   onClick={() => alert(`Application submitted for ${internship.title}`)}
//                 >
//                   Apply Now
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600 text-center text-sm sm:text-base col-span-full py-6">No internships found matching your search.</p>
//           )}
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default InternshipListings;

import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const InternshipListings = () => {
  const [internships, setInternships] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [applyLink, setApplyLink] = useState(null);
  const [applicationId, setApplicationId] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formOpened, setFormOpened] = useState(false);
  const navigate = useNavigate();

  // Filter and sort internships
  const filteredInternships = useMemo(() => {
    let result = [...internships];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((internship) =>
        [
          internship.title?.toLowerCase(),
          internship.company?.toLowerCase(),
          internship.location?.toLowerCase(),
          internship.duration?.toLowerCase(),
          internship.description?.toLowerCase(),
        ].some((field) => field?.includes(query))
      );
    }

    // Sort internships
    if (sortOption === 'newest') {
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortOption === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [internships, searchQuery, sortOption]);

  // Check if internship is new (posted within 7 days)
  const isNewInternship = (createdAt) => {
    const internshipDate = new Date(createdAt);
    const now = new Date();
    const diffInDays = (now - internshipDate) / (1000 * 60 * 60 * 24);
    return diffInDays <= 7;
  };

  const refreshToken = async () => {
    try {
      const refresh = localStorage.getItem('refreshToken');
      if (!refresh) throw new Error('No refresh token');
      const response = await axios.post('http://localhost:8000/api/token/refresh/', { refresh });
      localStorage.setItem('accessToken', response.data.access);
      return response.data.access;
    } catch (err) {
      console.error('Token refresh failed:', err);
      localStorage.clear();
      navigate('/signin');
      return null;
    }
  };

  const fetchInternships = async () => {
    try {
      let token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token');
      const response = await axios.get('http://localhost:8000/api/internships/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInternships(response.data.filter((internship) => internship.status === 'approved'));
    } catch (err) {
      console.error('Fetch internships error:', err.response || err);
      if (err.response?.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          try {
            const response = await axios.get('http://localhost:8000/api/internships/', {
              headers: { Authorization: `Bearer ${newToken}` },
            });
            setInternships(response.data.filter((internship) => internship.status === 'approved'));
          } catch (retryErr) {
            console.error('Retry failed:', retryErr);
            setError('Session expired. Please sign in again.');
            navigate('/signin');
          }
        }
      } else {
        setError(err.response?.data?.error || 'Failed to fetch internships.');
      }
    }
  };

  useEffect(() => {
    fetchInternships();
  }, []);

  const handleApply = async (internshipId) => {
    setError('');
    setSuccess('');
    setApplyLink(null);
    setApplicationId(null);
    setFormSubmitted(false);
    setFormOpened(false);
    try {
      let token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token');
      const response = await axios.post(
        'http://localhost:8000/api/internship-applications/',
        { internship: internshipId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (!response.data.application || !response.data.message || !response.data.apply_link) {
        throw new Error('Incomplete application response');
      }
      setSuccess(response.data.message);
      setApplyLink(response.data.apply_link);
      setFormSubmitted(response.data.application.form_submitted);
      setApplicationId(response.data.application.id);
    } catch (err) {
      console.error('Failed to apply:', err);
      if (err.response?.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          try {
            const response = await axios.post(
              'http://localhost:8000/api/internship-applications/',
              { internship: internshipId },
              { headers: { Authorization: `Bearer ${newToken}` } }
            );
            if (!response.data.application || !response.data.message || !response.data.apply_link) {
              throw new Error('Incomplete application response');
            }
            setSuccess(response.data.message);
            setApplyLink(response.data.apply_link);
            setFormSubmitted(response.data.application.form_submitted);
            setApplicationId(response.data.application.id);
          } catch (retryErr) {
            console.error('Retry failed:', retryErr);
            setError('Session expired. Please sign in again.');
            navigate('/signin');
          }
        }
      } else {
        setError(err.response?.data?.error || `Failed to apply for internship: ${err.message}`);
      }
    }
  };

  const handleConfirmSubmission = async () => {
    if (!applicationId) {
      setError('No application ID available for confirmation.');
      return;
    }
    try {
      let token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token');
      const response = await axios.post(
        `http://localhost:8000/api/internship-applications/${applicationId}/confirm/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSuccess('You have already applied to this internship.');
      setApplyLink(null);
      setApplicationId(null);
      setFormSubmitted(true);
      setFormOpened(false);
    } catch (err) {
      console.error('Failed to confirm submission:', err);
      if (err.response?.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          try {
            const response = await axios.post(
              `http://localhost:8000/api/internship-applications/${applicationId}/confirm/`,
              {},
              { headers: { Authorization: `Bearer ${newToken}` } }
            );
            setSuccess('You have already applied to this internship.');
            setApplyLink(null);
            setApplicationId(null);
            setFormSubmitted(true);
            setFormOpened(false);
          } catch (retryErr) {
            console.error('Retry failed:', retryErr);
            setError('Session expired. Please sign in again.');
            navigate('/signin');
          }
        }
      } else {
        setError(err.response?.data?.error || 'Failed to confirm form submission.');
      }
    }
  };

  const handleFormOpen = () => {
    setFormOpened(true);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Sidebar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8">
          Internship Listings
        </h1>
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search internships by title, company, location, or duration..."
            className="flex-1 p-3 sm:p-4 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-3 sm:p-4 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
          >
            <option value="newest">Newest First</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-center mb-4">
            {success}
            {applyLink && !formSubmitted && (
              <span>
                {' '}
                <a
                  href={applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                  onClick={handleFormOpen}
                >
                  Continue
                </a>
              </span>
            )}
            {applyLink && !formSubmitted && formOpened && (
              <div className="mt-2">
                <button
                  onClick={handleConfirmSubmission}
                  className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
                >
                  Confirm Form Submission
                </button>
              </div>
            )}
          </p>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredInternships.length > 0 ? (
            filteredInternships.map((internship) => (
              <div key={internship.id} className="bg-white p-6 rounded-lg shadow-md relative">
                {isNewInternship(internship.created_at) && (
                  <span className="absolute top-2 right-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full">
                    New
                  </span>
                )}
                <h2 className="text-xl font-semibold">{internship.title}</h2>
                <p className="text-gray-600">Company: {internship.company}</p>
                <p className="text-gray-600">Location: {internship.location}</p>
                <p className="text-gray-600">Duration: {internship.duration}</p>
                <p className="text-gray-600">Deadline: {internship.deadline}</p>
                <button
                  onClick={() => handleApply(internship.id)}
                  className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Apply
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              {searchQuery ? 'No internships match your search.' : 'No internships available.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InternshipListings;