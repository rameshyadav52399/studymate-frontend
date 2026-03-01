import React, { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import NavbarNext from "./NavbarNext";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Papers() {
  const location = useLocation();
  const { semester, subjects } = location.state || { semester: "", subjects: [] };

  const [papersData, setPapersData] = useState([]);

  useEffect(() => {
    if (!semester) return;

    const fetchPYQs = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/pyqs/${semester}`);
        setPapersData(res.data);
      } catch (error) {
        console.error("Error fetching PYQs:", error);
      }
    };

    fetchPYQs();
  }, [semester]);

  // group papers by subject
  const getPapersBySubject = (subjectName) => {
    return papersData.filter((p) => p.subject === subjectName);
  };

  return (
    <section className="py-25 bg-gray-50 min-h-screen">
      <NavbarNext />

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        MCA Semester {semester} – Previous Papers
        <div className="w-80 h-1 bg-green-400 mx-auto mt-4 rounded-full"></div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {subjects.map((subject, i) => {
          const subjectPapers = getPapersBySubject(subject);

          return (
            <div
              key={i}
              className="bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300 rounded-xl p-5"
            >
              <h3 className="text-xl font-semibold mb-4 text-center border-b pb-2 text-[#f7007b]">
                {subject}
              </h3>

              <ul className="space-y-3">
                {subjectPapers.length === 0 ? (
                  <li className="text-sm text-gray-500 text-center">
                    No papers available
                  </li>
                ) : (
                  subjectPapers.map((paper, index) => (
                    <li key={index} className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-green-600" />
                      <a
                        href={paper.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-900 font-medium hover:underline hover:opacity-80"
                      >
                        {subject} {paper.year}
                      </a>
                    </li>
                  ))
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
