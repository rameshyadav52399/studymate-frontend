import { useState } from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import NavbarNext from "../components/NavbarNext";

const tabs = [
  "Java",
  "C++",
  "Python",
  "DS",
  "CGIP",
];

const data = {
  "Java": [
    { name: "MCA 1st Sem Syllabus.pdf", url: "/pdfs/mca-sem1.pdf" },
  ],
  "C++": [
    { name: "MCA 2nd Sem Syllabus.pdf", url: "/pdfs/mca-sem2.pdf" },
  ],
  "Python": [
    { name: "MCA 3rd Sem Syllabus.pdf", url: "/pdfs/mca-sem3.pdf" },
  ],
  "DS": [
    { name: "MCA 4th Sem Syllabus.pdf", url: "/pdfs/mca-sem4.pdf" },
  ],
  "CGIP": [
    { name: "Complete MCA Scheme.pdf", url: "/pdfs/mca-scheme.pdf" },
  ],
};

export default function Notes() {
  const [activeTab, setActiveTab] = useState("Java");

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <NavbarNext />

      {/* Page Heading */}
      <div className="text-center py-25">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Subjectwise Notes & Schemes
        </h1>

        {/* Half Divider */}
        <div className="w-48 h-1 bg-gray-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Content Card */}
      <section className="max-w-6xl mx-auto bg-white shadow-sm rounded-md p-6 mb-16">
        
        {/* Tabs */}
        <div className="flex border-b border-gray-300 ">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-semibold border border-gray-200 border-b-0 relative whitespace-nowrap
                ${
                  activeTab === tab
                    ? "bg-red-600 text-white"
                    : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                }`}
            >
              {tab}

              {/* Arrow */}
              {activeTab === tab && (
                <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 
                  border-l-8 border-r-8 border-t-8 
                  border-l-transparent border-r-transparent border-t-red-600">
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="border border-gray-200 p-6">
          {data[activeTab].map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 border-b last:border-b-0"
            >
              {/* PDF Name */}
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-800 hover:underline font-medium"
              >
                <FaFilePdf className="text-red-600 text-lg" />
                {file.name}
              </a>

              {/* Download Button */}
              <a
                href={file.url}
                download
                className="flex items-center gap-2 px-4 py-2 text-sm 
                           bg-blue-600 text-white rounded 
                           hover:bg-blue-700 transition"
              >
                <FaDownload />
                Download
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
