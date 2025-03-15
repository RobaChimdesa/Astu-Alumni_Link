import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const ViewDiscussion = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const discussion = location.state || { title: "Sample Discussion", content: "Discussion content here..." };

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-6 sm:mb-8 animate-fade-in-down">
          {discussion.title}
        </h1>

        {/* Discussion Content */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in mb-6 sm:mb-8">
          <p className="text-gray-800 text-sm sm:text-base md:text-lg">{discussion.content}</p>
        </div>

        {/* Comment Section */}
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl animate-fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Comments
          </h2>
          <form onSubmit={handleCommentSubmit} className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
            <div>
              <label
                htmlFor="newComment"
                className="block text-gray-700 font-medium mb-2 text-sm sm:text-base md:text-lg"
              >
                Write a Comment
              </label>
              <textarea
                id="newComment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 placeholder-gray-400 text-gray-600 text-sm sm:text-base md:text-lg h-24"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
            >
              Add Comment
            </button>
          </form>
          {comments.length > 0 && (
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <p className="text-gray-800 text-sm sm:text-base md:text-lg">{comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <button
            onClick={() => navigate("/alumni/discussions")}
            className="w-full sm:w-auto bg-gradient-to-r from-gray-600 to-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:scale-[1.02] shadow-md"
          >
            Back to Discussions
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ViewDiscussion;