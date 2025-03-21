import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sidebar from "./Sidebar";

const mentorsData = [
  { id: 1, name: "Dr. Sarah Johnson", department: "Computer Science", location: "Addis Ababa", availability: "Available" },
  { id: 2, name: "Mr. Alex Brown", department: "Business Administration", location: "Adama", availability: "Busy" },
  { id: 3, name: "Prof. Emily Davis", department: "Mechanical Engineering", location: "Hawassa", availability: "Available" },
  { id: 4, name: "Dr. Daniel Mekonnen", department: "Electrical Engineering", location: "Dire Dawa", availability: "Available" },
];

const MentorshipListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMentors, setFilteredMentors] = useState(mentorsData);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredMentors(
      mentorsData.filter(
        (mentor) =>
          mentor.name.toLowerCase().includes(value) ||
          mentor.department.toLowerCase().includes(value) ||
          mentor.location.toLowerCase().includes(value)
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
          Mentorship Listings
        </h1>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search by name, department, or location..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
          />
        </div>

        {/* Mentor Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ml-24">
          {filteredMentors.length > 0 ? (
            filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className=" bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-blue-500"
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 truncate">{mentor.name}</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-medium">Department:</span> {mentor.department}
                </p>
                <p className="text-gray-600 text-sm sm:text-base">
                  <span className="font-medium">Location:</span> {mentor.location}
                </p>
                <p
                  className={`text-sm sm:text-base font-semibold mt-1 ${
                    mentor.availability === "Available" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <span className="font-medium">Availability:</span> {mentor.availability}
                </p>
                {mentor.availability === "Available" && (
                  <button
                    className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
                    onClick={() => alert(`Mentorship request sent to ${mentor.name}`)}
                  >
                    Request Mentorship
                  </button>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center text-sm sm:text-base col-span-full py-6">
              No mentors found matching your search.
            </p>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MentorshipListings;