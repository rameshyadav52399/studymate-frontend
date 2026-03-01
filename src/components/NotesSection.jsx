import React from "react";
import previousePapersImg from "../assets/previouse-Papers.png";
import notesImg from "../assets/notes.png";
import syllabusImg from "../assets/syllabus.png";
import booksImg from "../assets/book.png";
import { useNavigate } from "react-router-dom";
const courses = [
  {
    title: "Previous Papers",
    image: previousePapersImg,
  },
  {
    title: "Notes",
    image: notesImg,
  },
  {
    title: "Syllabus",
    image: syllabusImg,
  },
  {
    title: "E-Books",
    image: booksImg,
  },
];

export default function PopularNotes({
  headerPart1,
  headerPart2,
  discription,
}) {
  const navigate = useNavigate(); // ✅ allows route navigation

  // 👇 Function to handle button click
  const handleExplore = (title) => {
    if (title === "Syllabus") {
      // Example 1: Navigate to syllabus page
      navigate("/syllabus");

      // Example 2 (instead): Open a PDF link
      // window.open("https://example.com/mca-syllabus.pdf", "_blank");

      // Example 3 (instead): Show alert
      // alert("Opening MCA Syllabus...");
    } else if (title === "E-Books") {
      // Example 1: Navigate to syllabus page
      navigate("/e-books");
    } 
     else if (title === "Previous Papers") {
      // Example 1: Navigate to syllabus page
      navigate("/pyqs");
     }
     else if (title === "Notes") {
      // Example 1: Navigate to syllabus page
      navigate("/notes");
     }
  };

  return (
    <section className="px-6 py-12 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Resources for<span className="text-green-700"> MCA</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">{discription}</p>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition p-6 flex flex-col items-center text-center"
          >
            <div className="p-10 rounded-xl mb-4 bg-orange-50 flex justify-center items-center">
              <img
                src={course.image}
                alt={course.title}
                className="w-50 h-20 object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              {course.title}
            </h3>
            <button
              className="bg-green-700 text-white font-medium px-15 py-2 rounded-md hover:bg-green-800 transition cursor-pointer"
              onClick={() => handleExplore(course.title)}
            >
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
