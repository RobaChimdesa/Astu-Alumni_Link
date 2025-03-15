import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const resourcesData = [
    { id: 1, title: "Machine Learning Basics", category: "Computer Science", uploader: "Dr. Sarah Johnson", link: "#" },
    { id: 2, title: "Marketing Strategies", category: "Business", uploader: "Mr. Alex Brown", link: "#" },
    { id: 3, title: "Mechanical Design Handbook", category: "Mechanical Engineering", uploader: "Prof. Emily Davis", link: "#" },
    { id: 4, title: "Renewable Energy Systems", category: "Electrical Engineering", uploader: "Dr. Daniel Mekonnen", link: "#" },
];

const Resources = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredResources, setFilteredResources] = useState(resourcesData);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        setFilteredResources(
            resourcesData.filter(
                (resource) =>
                    resource.title.toLowerCase().includes(value) ||
                    resource.category.toLowerCase().includes(value) ||
                    resource.uploader.toLowerCase().includes(value)
            )
        );
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
                    Resources
                </h1>

                {/* Search Bar */}
                <div className="mb-6 sm:mb-8 max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Search by title, category, or uploader..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
                    />
                </div>

                {/* Resource Listings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {filteredResources.length > 0 ? (
                        filteredResources.map((resource) => (
                            <div
                                key={resource.id}
                                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-blue-500"
                            >
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 truncate">{resource.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base"><span className="font-medium">Category:</span> {resource.category}</p>
                                <p className="text-gray-600 text-sm sm:text-base"><span className="font-medium">Uploaded by:</span> {resource.uploader}</p>
                                <a
                                    href={resource.link}
                                    className="mt-4 block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
                                >
                                    Download
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 text-center text-sm sm:text-base col-span-full py-6">No resources found matching your search.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Resources;