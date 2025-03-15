import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const FacultyDiscussions = () => {
  const [discussions, setDiscussions] = useState([
    { id: 1, title: "The Future of AI in Education", author: "Dr. Sarah Johnson", date: "2024-04-15" },
    { id: 2, title: "Best Practices for Online Learning", author: "Prof. Mark Smith", date: "2024-04-10" },
  ]);

  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    author: "Dr. John Doe", // Default faculty name (can be dynamically fetched)
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setNewDiscussion({ ...newDiscussion, [e.target.name]: e.target.value });
  };

  const addDiscussion = (e) => {
    e.preventDefault();
    if (newDiscussion.title) {
      setDiscussions([...discussions, { ...newDiscussion, id: discussions.length + 1 }]);
      setNewDiscussion({ title: "", author: "Dr. John Doe", date: new Date().toISOString().split("T")[0] });
      alert("Discussion created successfully!");
    } else {
      alert("Please enter a discussion topic.");
    }
  };

  const deleteDiscussion = (id) => {
    setDiscussions(discussions.filter((discussion) => discussion.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Faculty Discussion Forum
        </h1>

        {/* Create Discussion Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Start a New Discussion</h2>
          <form onSubmit={addDiscussion} className="space-y-4">
            <input
              type="text"
              name="title"
              value={newDiscussion.title}
              onChange={handleChange}
              placeholder="Discussion Topic"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Create Discussion
            </button>
          </form>
        </div>

        {/* Discussion List */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Discussions</h2>
          {discussions.length > 0 ? (
            <ul className="space-y-4">
              {discussions.map((discussion) => (
                <li
                  key={discussion.id}
                  className="flex justify-between items-center p-4 bg-blue-100 rounded-md"
                >
                  <span>
                    <strong>{discussion.title}</strong> - {discussion.author} - {discussion.date}
                  </span>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                    onClick={() => deleteDiscussion(discussion.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-center">No discussions available.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FacultyDiscussions;
