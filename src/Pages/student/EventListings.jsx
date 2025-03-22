import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Sidebar from "./Sidebar";

const eventsData = [
    { id: 1, name: "Tech Innovation Summit", organizer: "ASTU Tech Club", location: "Addis Ababa", date: "April 15, 2024" },
    { id: 2, name: "Career Networking Night", organizer: "ASTU Alumni Association", location: "Adama", date: "April 20, 2024" },
    { id: 3, name: "Entrepreneurship Workshop", organizer: "Business Incubation Center", location: "Hawassa", date: "May 5, 2024" },
    { id: 4, name: "AI & Machine Learning Conference", organizer: "ASTU AI Club", location: "Dire Dawa", date: "May 10, 2024" },
];

const EventListings = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredEvents, setFilteredEvents] = useState(eventsData);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        setFilteredEvents(
            eventsData.filter(
                (event) =>
                    event.name.toLowerCase().includes(value) ||
                    event.organizer.toLowerCase().includes(value) ||
                    event.location.toLowerCase().includes(value)
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
                    Upcoming Events
                </h1>

                {/* Search Bar */}
                <div className="mb-6 sm:mb-8 max-w-lg mx-auto ml-12">
                    <input
                        type="text"
                        placeholder="Search by event name, organizer, or location..."
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
                    />
                </div>

                {/* Event Listings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ml-16 ml-9 md:ml-24">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((event) => (
                            <div
                                key={event.id}
                                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-l-4 border-blue-500"
                            >
                                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 truncate">{event.name}</h3>
                                <p className="text-gray-600 text-sm sm:text-base"><span className="font-medium">Organizer:</span> {event.organizer}</p>
                                <p className="text-gray-600 text-sm sm:text-base"><span className="font-medium">Location:</span> {event.location}</p>
                                <p className="text-gray-700 font-semibold text-sm sm:text-base mt-1"><span className="font-medium">Date:</span> {event.date}</p>
                                <button
                                    className="mt-4 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md"
                                    onClick={() => alert(`Registered for ${event.name}`)}
                                >
                                    Register Now
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 text-center text-sm sm:text-base col-span-full py-6">No events found matching your search.</p>
                    )}
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default EventListings;