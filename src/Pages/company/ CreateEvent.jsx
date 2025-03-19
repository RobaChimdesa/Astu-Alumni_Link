// import React, { useState } from "react";
// import Navbar from "../../Components/Navbar";
// import Footer from "../../Components/Footer";

// const CreateEvent = () => {
//   const [eventData, setEventData] = useState({
//     title: "",
//     date: "",
//     location: "",
//     description: "",
//     registrationLink: "",
//   });

//   const handleChange = (e) => {
//     setEventData({ ...eventData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Event created successfully!");
//     console.log(eventData);
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />
//       <div className="max-w-4xl mx-auto px-6 py-12">
//         <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
//           Create an Event
//         </h1>

//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="title"
//               value={eventData.title}
//               onChange={handleChange}
//               placeholder="Event Title"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="date"
//               name="date"
//               value={eventData.date}
//               onChange={handleChange}
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="text"
//               name="location"
//               value={eventData.location}
//               onChange={handleChange}
//               placeholder="Location (e.g., Addis Ababa)"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <textarea
//               name="description"
//               value={eventData.description}
//               onChange={handleChange}
//               placeholder="Event Description"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <input
//               type="url"
//               name="registrationLink"
//               value={eventData.registrationLink}
//               onChange={handleChange}
//               placeholder="Registration Link (URL)"
//               required
//               className="w-full p-3 border border-gray-300 rounded-md"
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Create Event
//             </button>
//           </form>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CreateEvent;
import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
    registrationLink: "",
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Event created successfully!");
    console.log(eventData);
    setEventData({
      title: "",
      date: "",
      location: "",
      description: "",
      registrationLink: "",
    });
  };

  const handleCancel = () => {
    setEventData({
      title: "",
      date: "",
      location: "",
      description: "",
      registrationLink: "",
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-[90rem] mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          Create an Event
        </h1>

        {/* Event Creation Form Card */}
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg max-w-5xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
                >
                  Event Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={eventData.title}
                  onChange={handleChange}
                  placeholder="Enter event title"
                  required
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleChange}
                  required
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-600 text-sm sm:text-base shadow-sm"
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
                  value={eventData.location}
                  onChange={handleChange}
                  placeholder="e.g., Addis Ababa"
                  required
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="registrationLink"
                  className="block text-gray-700 font-medium mb-2 text-sm sm:text-base"
                >
                  Registration Link
                </label>
                <input
                  type="url"
                  name="registrationLink"
                  value={eventData.registrationLink}
                  onChange={handleChange}
                  placeholder="e.g., https://event.com/register"
                  required
                  className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm"
                />
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
                value={eventData.description}
                onChange={handleChange}
                placeholder="Describe the event details"
                required
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base shadow-sm h-40"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
              >
                Create Event
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

export default CreateEvent;