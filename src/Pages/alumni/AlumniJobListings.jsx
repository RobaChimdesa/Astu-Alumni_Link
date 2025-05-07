// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';

// const AlumniJobListings = () => {
//   const [jobs, setJobs] = useState([]);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [applyLink, setApplyLink] = useState(null);
//   const [applicationId, setApplicationId] = useState(null);
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formOpened, setFormOpened] = useState(false); // Track if Google Form was opened
//   const navigate = useNavigate();

//   const refreshToken = async () => {
//     try {
//       const refresh = localStorage.getItem('refreshToken');
//       if (!refresh) throw new Error('No refresh token');
//       const response = await axios.post('http://localhost:8000/api/token/refresh/', { refresh });
//       localStorage.setItem('accessToken', response.data.access);
//       return response.data.access;
//     } catch (err) {
//       console.error('Token refresh failed:', err);
//       localStorage.clear();
//       navigate('/signin');
//       return null;
//     }
//   };

//   const fetchJobs = async () => {
//     try {
//       let token = localStorage.getItem('accessToken');
//       if (!token) throw new Error('No access token');
//       const response = await axios.get('http://localhost:8000/api/jobs/', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setJobs(response.data.filter(job => job.status === 'approved'));
//     } catch (err) {
//       console.error('Fetch jobs error:', err.response || err);
//       if (err.response?.status === 401) {
//         const newToken = await refreshToken();
//         if (newToken) {
//           try {
//             const response = await axios.get('http://localhost:8000/api/jobs/', {
//               headers: { Authorization: `Bearer ${newToken}` },
//             });
//             setJobs(response.data.filter(job => job.status === 'approved'));
//           } catch (retryErr) {
//             console.error('Retry failed:', retryErr);
//             setError('Session expired. Please sign in again.');
//             navigate('/signin');
//           }
//         }
//       } else {
//         setError(err.response?.data?.error || 'Failed to fetch jobs.');
//       }
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const handleApply = async (jobId) => {
//     setError('');
//     setSuccess('');
//     setApplyLink(null);
//     setApplicationId(null);
//     setFormSubmitted(false);
//     setFormOpened(false);
//     console.log(`handleApply: Reset state - applyLink: ${applyLink}, formSubmitted: ${formSubmitted}, applicationId: ${applicationId}, formOpened: ${formOpened}`);
//     try {
//       let token = localStorage.getItem('accessToken');
//       if (!token) throw new Error('No access token');
//       console.log(`Applying to job: ${jobId}`);
//       const response = await axios.post(
//         'http://localhost:8000/api/job-applications/',
//         { job: jobId },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log('Application response:', JSON.stringify(response.data, null, 2));
//       if (!response.data.application || !response.data.message || !response.data.apply_link) {
//         console.error('Incomplete response:', response.data);
//         throw new Error('Incomplete application response: missing application, message, or apply_link');
//       }
//       setSuccess(response.data.message);
//       setApplyLink(response.data.apply_link);
//       setFormSubmitted(response.data.application.form_submitted);
//       setApplicationId(response.data.application.id);
//       console.log(`handleApply: Updated state - applyLink: ${response.data.apply_link}, formSubmitted: ${response.data.application.form_submitted}, applicationId: ${response.data.application.id}, formOpened: ${formOpened}`);
//     } catch (err) {
//       console.error('Failed to apply:', err);
//       if (err.response?.status === 401) {
//         const newToken = await refreshToken();
//         if (newToken) {
//           try {
//             const response = await axios.post(
//               'http://localhost:8000/api/job-applications/',
//               { job: jobId },
//               { headers: { Authorization: `Bearer ${newToken}` } }
//             );
//             console.log('Application response:', JSON.stringify(response.data, null, 2));
//             if (!response.data.application || !response.data.message || !response.data.apply_link) {
//               console.error('Incomplete response:', response.data);
//               throw new Error('Incomplete application response: missing application, message, or apply_link');
//             }
//             setSuccess(response.data.message);
//             setApplyLink(response.data.apply_link);
//             setFormSubmitted(response.data.application.form_submitted);
//             setApplicationId(response.data.application.id);
//             console.log(`handleApply: Updated state (retry) - applyLink: ${response.data.apply_link}, formSubmitted: ${response.data.application.form_submitted}, applicationId: ${response.data.application.id}, formOpened: ${formOpened}`);
//           } catch (retryErr) {
//             console.error('Retry failed:', retryErr);
//             setError('Session expired. Please sign in again.');
//             navigate('/signin');
//           }
//         }
//       } else {
//         setError(err.response?.data?.error || `Failed to apply for job: ${err.message}`);
//       }
//     }
//   };

//   const handleConfirmSubmission = async () => {
//     if (!applicationId) {
//       setError('No application ID available for confirmation.');
//       return;
//     }
//     try {
//       let token = localStorage.getItem('accessToken');
//       if (!token) throw new Error('No access token');
//       console.log(`Confirming submission for application: ${applicationId}`);
//       const response = await axios.post(
//         `http://localhost:8000/api/job-applications/${applicationId}/confirm/`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       console.log('Confirmation successful:', response.data);
//       setSuccess('You have already applied to this job.');
//       setApplyLink(null);
//       setApplicationId(null);
//       setFormSubmitted(true);
//       setFormOpened(false);
//       console.log(`handleConfirmSubmission: Reset state - applyLink: ${applyLink}, formSubmitted: ${formSubmitted}, applicationId: ${applicationId}, formOpened: ${formOpened}`);
//     } catch (err) {
//       console.error('Failed to confirm submission:', err);
//       if (err.response?.status === 401) {
//         const newToken = await refreshToken();
//         if (newToken) {
//           try {
//             const response = await axios.post(
//               `http://localhost:8000/api/job-applications/${applicationId}/confirm/`,
//               {},
//               { headers: { Authorization: `Bearer ${newToken}` } }
//             );
//             console.log('Confirmation successful:', response.data);
//             setSuccess('You have already applied to this job.');
//             setApplyLink(null);
//             setApplicationId(null);
//             setFormSubmitted(true);
//             setFormOpened(false);
//             console.log(`handleConfirmSubmission: Reset state (retry) - applyLink: ${applyLink}, formSubmitted: ${formSubmitted}, applicationId: ${applicationId}, formOpened: ${formOpened}`);
//           } catch (retryErr) {
//             console.error('Retry failed:', retryErr);
//             setError('Session expired. Please sign in again.');
//             navigate('/signin');
//           }
//         }
//       } else {
//         setError(err.response?.data?.error || 'Failed to confirm form submission.');
//       }
//     }
//   };

//   const handleFormOpen = () => {
//     setFormOpened(true);
//     console.log(`handleFormOpen: Updated formOpened: ${formOpened}`);
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
//       <Sidebar />
//       <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8">
//           Job Listings
//         </h1>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {success && (
//           <p className="text-green-500 text-center">
//             {success}
//             {applyLink && !formSubmitted && (
//               <span>
//                 {' '}
//                 <a
//                   href={applyLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline font-semibold"
//                   onClick={handleFormOpen}
//                 >
//                   Continue
//                 </a>
//               </span>
//             )}
//             {applyLink && !formSubmitted && formOpened && (
//               <div className="mt-2">
//                 <button
//                   onClick={handleConfirmSubmission}
//                   className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
//                 >
//                   Confirm Form Submission
//                 </button>
//               </div>
//             )}
//           </p>
//         )}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {jobs.length > 0 ? (
//             jobs.map((job) => (
//               <div key={job.id} className="bg-white p-6 rounded-lg shadow-md">
//                 <h2 className="text-xl font-semibold">{job.title}</h2>
//                 <p className="text-gray-600">Company: {job.company}</p>
//                 <p className="text-gray-600">Location: {job.location}</p>
//                 <p className="text-gray-600">Type: {job.job_type}</p>
//                 <p className="text-gray-600">Deadline: {job.deadline}</p>
//                 <button
//                   onClick={() => handleApply(job.id)}
//                   className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
//                 >
//                   Apply
//                 </button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center col-span-full">No jobs available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AlumniJobListings;

import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const AlumniJobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [applyLink, setApplyLink] = useState(null);
  const [applicationId, setApplicationId] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formOpened, setFormOpened] = useState(false);
  const navigate = useNavigate();

  // Filter and sort jobs
  const filteredJobs = useMemo(() => {
    let result = [...jobs];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((job) =>
        [
          job.title?.toLowerCase(),
          job.company?.toLowerCase(),
          job.location?.toLowerCase(),
          job.job_type?.toLowerCase(),
          job.description?.toLowerCase(),
        ].some((field) => field?.includes(query))
      );
    }

    // Sort jobs
    if (sortOption === 'newest') {
      result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortOption === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [jobs, searchQuery, sortOption]);

  // Check if job is new (posted within 7 days)
  const isNewJob = (createdAt) => {
    const jobDate = new Date(createdAt);
    const now = new Date();
    const diffInDays = (now - jobDate) / (1000 * 60 * 60 * 24);
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

  const fetchJobs = async () => {
    try {
      let token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token');
      const response = await axios.get('http://localhost:8000/api/jobs/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(response.data.filter(job => job.status === 'approved'));
    } catch (err) {
      console.error('Fetch jobs error:', err.response || err);
      if (err.response?.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          try {
            const response = await axios.get('http://localhost:8000/api/jobs/', {
              headers: { Authorization: `Bearer ${newToken}` },
            });
            setJobs(response.data.filter(job => job.status === 'approved'));
          } catch (retryErr) {
            console.error('Retry failed:', retryErr);
            setError('Session expired. Please sign in again.');
            navigate('/signin');
          }
        }
      } else {
        setError(err.response?.data?.error || 'Failed to fetch jobs.');
      }
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleApply = async (jobId) => {
    setError('');
    setSuccess('');
    setApplyLink(null);
    setApplicationId(null);
    setFormSubmitted(false);
    setFormOpened(false);
    console.log(`handleApply: Reset state - applyLink: ${applyLink}, formSubmitted: ${formSubmitted}, applicationId: ${applicationId}, formOpened: ${formOpened}`);
    try {
      let token = localStorage.getItem('accessToken');
      if (!token) throw new Error('No access token');
      console.log(`Applying to job: ${jobId}`);
      const response = await axios.post(
        'http://localhost:8000/api/job-applications/',
        { job: jobId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Application response:', JSON.stringify(response.data, null, 2));
      if (!response.data.application || !response.data.message || !response.data.apply_link) {
        console.error('Incomplete response:', response.data);
        throw new Error('Incomplete application response: missing application, message, or apply_link');
      }
      setSuccess(response.data.message);
      setApplyLink(response.data.apply_link);
      setFormSubmitted(response.data.application.form_submitted);
      setApplicationId(response.data.application.id);
      console.log(`handleApply: Updated state - applyLink: ${response.data.apply_link}, formSubmitted: ${response.data.application.form_submitted}, applicationId: ${response.data.application.id}, formOpened: ${formOpened}`);
    } catch (err) {
      console.error('Failed to apply:', err);
      if (err.response?.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          try {
            const response = await axios.post(
              'http://localhost:8000/api/job-applications/',
              { job: jobId },
              { headers: { Authorization: `Bearer ${newToken}` } }
            );
            console.log('Application response:', JSON.stringify(response.data, null, 2));
            if (!response.data.application || !response.data.message || !response.data.apply_link) {
              console.error('Incomplete response:', response.data);
              throw new Error('Incomplete application response: missing application, message, or apply_link');
            }
            setSuccess(response.data.message);
            setApplyLink(response.data.apply_link);
            setFormSubmitted(response.data.application.form_submitted);
            setApplicationId(response.data.application.id);
            console.log(`handleApply: Updated state (retry) - applyLink: ${response.data.apply_link}, formSubmitted: ${response.data.application.form_submitted}, applicationId: ${response.data.application.id}, formOpened: ${formOpened}`);
          } catch (retryErr) {
            console.error('Retry failed:', retryErr);
            setError('Session expired. Please sign in again.');
            navigate('/signin');
          }
        }
      } else {
        setError(err.response?.data?.error || `Failed to apply for job: ${err.message}`);
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
      console.log(`Confirming submission for application: ${applicationId}`);
      const response = await axios.post(
        `http://localhost:8000/api/job-applications/${applicationId}/confirm/`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Confirmation successful:', response.data);
      setSuccess('You have already applied to this job.');
      setApplyLink(null);
      setApplicationId(null);
      setFormSubmitted(true);
      setFormOpened(false);
      console.log(`handleConfirmSubmission: Reset state - applyLink: ${applyLink}, formSubmitted: ${formSubmitted}, applicationId: ${applicationId}, formOpened: ${formOpened}`);
    } catch (err) {
      console.error('Failed to confirm submission:', err);
      if (err.response?.status === 401) {
        const newToken = await refreshToken();
        if (newToken) {
          try {
            const response = await axios.post(
              `http://localhost:8000/api/job-applications/${applicationId}/confirm/`,
              {},
              { headers: { Authorization: `Bearer ${newToken}` } }
            );
            console.log('Confirmation successful:', response.data);
            setSuccess('You have already applied to this job.');
            setApplyLink(null);
            setApplicationId(null);
            setFormSubmitted(true);
            setFormOpened(false);
            console.log(`handleConfirmSubmission: Reset state (retry) - applyLink: ${applyLink}, formSubmitted: ${formSubmitted}, applicationId: ${applicationId}, formOpened: ${formOpened}`);
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
    console.log(`handleFormOpen: Updated formOpened: ${formOpened}`);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Sidebar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8">
          Job Listings
        </h1>
        {/* Search and Sort Controls */}
        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jobs by title, company, location, or type..."
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
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-md relative">
                {isNewJob(job.created_at) && (
                  <span className="absolute top-2 right-2 bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 rounded-full">
                    New
                  </span>
                )}
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600">Company: {job.company}</p>
                <p className="text-gray-600">Location: {job.location}</p>
                <p className="text-gray-600">Type: {job.job_type}</p>
                <p className="text-gray-600">Deadline: {job.deadline}</p>
                <button
                  onClick={() => handleApply(job.id)}
                  className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                >
                  Apply
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              {searchQuery ? 'No jobs match your search.' : 'No jobs available.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniJobListings;