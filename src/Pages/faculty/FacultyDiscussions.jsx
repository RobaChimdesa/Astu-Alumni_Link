// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";

// const FacultyDiscussions = () => {
//   const [discussions, setDiscussions] = useState([
//     { id: 1, title: "The Future of AI in Education", author: "Dr. Sarah Johnson", date: "2024-04-15" },
//     { id: 2, title: "Best Practices for Online Learning", author: "Prof. Mark Smith", date: "2024-04-10" },
//   ]);

//   const [newDiscussion, setNewDiscussion] = useState({
//     title: "",
//     author: "Dr. John Doe", // Default faculty name (can be dynamically fetched)
//     date: new Date().toISOString().split("T")[0],
//   });

//   const handleChange = (e) => {
//     setNewDiscussion({ ...newDiscussion, [e.target.name]: e.target.value });
//   };

//   const addDiscussion = (e) => {
//     e.preventDefault();
//     if (newDiscussion.title) {
//       setDiscussions([...discussions, { ...newDiscussion, id: discussions.length + 1 }]);
//       setNewDiscussion({
//         title: "",
//         author: "Dr. John Doe",
//         date: new Date().toISOString().split("T")[0],
//       });
//       alert("Discussion created successfully!");
//     } else {
//       alert("Please enter a discussion topic.");
//     }
//   };

//   const deleteDiscussion = (id) => {
//     setDiscussions(discussions.filter((discussion) => discussion.id !== id));
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
//       <Navbar />
//       <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
//         {/* Title */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
//           Faculty Discussion Forum
//         </h1>

//         {/* Discussions Card */}
//         <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in">
//           <div className="space-y-4 sm:space-y-6">
//             {/* Create Discussion Form */}
//             <div>
//               <label
//                 htmlFor="title"
//                 className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
//               >
//                 Discussion Topic
//               </label>
//               <input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={newDiscussion.title}
//                 onChange={handleChange}
//                 placeholder="Enter discussion topic"
//                 required
//                 className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg"
//               />
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={addDiscussion}
//                 className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
//               >
//                 Post Discussion
//               </button>
//             </div>

//             {/* Discussion List */}
//             <div className="mt-6 sm:mt-8">
//               {discussions.length > 0 ? (
//                 <div className="space-y-4 sm:space-y-6">
//                   {discussions.map((discussion) => (
//                     <div
//                       key={discussion.id}
//                       className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02]"
//                     >
//                       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//                         <div className="flex-1">
//                           <span className="text-base sm:text-lg md:text-xl font-medium text-gray-700 truncate block">
//                             {discussion.title}
//                           </span>
//                           <span className="text-gray-600 text-sm sm:text-base md:text-lg">
//                             {discussion.author} - {discussion.date}
//                           </span>
//                         </div>
//                         <button
//                           className="w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
//                           onClick={() => deleteDiscussion(discussion.id)}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p className="text-gray-600 text-sm sm:text-base md:text-lg text-center">
//                   No discussions available.
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default FacultyDiscussions;

import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link, useNavigate } from "react-router-dom";

const initialDiscussions = [
  { id: 1, title: "Career Growth Tips", author: "John Doe", date: "March 15, 2024", comments: [] },
  { id: 2, title: "Best Tech Skills to Learn", author: "Jane Smith", date: "March 20, 2024", comments: [] },
];

const FacultyDiscussions = () => {
  const [discussions, setDiscussions] = useState(initialDiscussions);
  const [newDiscussion, setNewDiscussion] = useState({ title: "", author: "Alumni User" });
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredDiscussions = discussions.filter((discussion) =>
    discussion.title.toLowerCase().includes(searchTerm)
  );

  const handleInputChange = (e) => {
    setNewDiscussion({ ...newDiscussion, [e.target.name]: e.target.value });
  };

  const handleCreateDiscussion = (e) => {
    e.preventDefault();
    if (newDiscussion.title) {
      setDiscussions([
        ...discussions,
        { id: discussions.length + 1, ...newDiscussion, date: new Date().toDateString(), comments: [] },
      ]);
      setNewDiscussion({ title: "", author: "Alumni User" });
      alert("Discussion created successfully!");
    } else {
      alert("Please enter a discussion title.");
    }
  };

  const handleViewDiscussion = (discussion) => {
    navigate("/alumni/view-discussion", { state: discussion });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Discussion Forum
        </h1>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search discussions by title..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
          />
        </div>

        {/* Create Discussion Button */}
        <div className="text-right mb-6 sm:mb-8">
          <Link
            to="/faculty/create-discussion"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
          >
            Start New Discussion
          </Link>
        </div>

        {/* Discussions List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredDiscussions.length > 0 ? (
            filteredDiscussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-blue-500"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 truncate">
                  {discussion.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-medium">Author:</span> {discussion.author}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-medium">Date:</span> {discussion.date}
                </p>
                <button
                  className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
                  onClick={() => handleViewDiscussion(discussion)}
                >
                  View Discussion
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center text-sm sm:text-base col-span-full py-6">
              No discussions found matching your search.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyDiscussions;