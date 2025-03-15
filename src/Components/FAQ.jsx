import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const faqs = [
  { question: "How do I sign up?", answer: "Go to the sign-up page and choose your role to register." },
  { question: "Who can use this platform?", answer: "Students, alumni, faculty, and companies can use ASTUALUMNILINK." },
  { question: "How do I find a mentor?", answer: "Use the mentorship section to search for mentors and send requests." },
  { question: "How can I post job opportunities?", answer: "Companies can post jobs by accessing their dashboard." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-blue-50 min-h-screen">
      {/* <Navbar /> */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Title with Animation */}
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-12 animate-fade-in-down">
          Frequently Asked Questions
        </h1>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transform hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500"
            >
              <button
                className="w-full text-left font-semibold text-lg text-blue-600 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-600 leading-relaxed animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default FAQ;