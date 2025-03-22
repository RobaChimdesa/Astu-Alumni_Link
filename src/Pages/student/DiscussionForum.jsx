import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const discussionsData = [
    { id: 1, title: "How to Network Effectively?", author: "Dr. Sarah Johnson", date: "March 1, 2024" },
    { id: 2, title: "Career Tips for Recent Graduates", author: "Jane Smith", date: "March 5, 2024" },
    { id: 3, title: "Best Programming Languages for AI", author: "Alex Brown", date: "March 10, 2024" },
    { id: 4, title: "How to Prepare for Job Interviews?", author: "Prof. Emily Davis", date: "March 15, 2024" },
];

const DiscussionForum = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDiscussions, setFilteredDiscussions] = useState(discussionsData);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        setFilteredDiscussions(
            discussionsData.filter(
                (discussion) =>
                    discussion.title.toLowerCase().includes(value) ||
                    discussion.author.toLowerCase().includes(value)
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
                    Discussion Forum
                </h1>

                {/* Search Bar */}
                <div className="mb-6 sm:mb-8 max-w-lg mx-auto ml-16">
                    <input
                        type="text"
                        placeholder="Search by title or author..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
                    />
                </div>

                {/* Discussion Topics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6  ml-24 ">
                    {filteredDiscussions.length > 0 ? (
                        filteredDiscussions.map((discussion) => (
                            <div
                                key={discussion.id}
                                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-blue-500"
                            >
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 truncate">{discussion.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    <span className="font-medium">Author:</span> {discussion.author}
                                </p>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    <span className="font-medium">Date:</span> {discussion.date}
                                </p>
                                <Link
                                    to={`/student/discussion/${discussion.id}`}
                                    className="mt-4 block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
                                >
                                    View Discussion
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 text-center text-sm sm:text-base col-span-full py-6">
                            No discussions found matching your search.
                        </p>
                    )}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default DiscussionForum;