import { useState, useEffect } from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import NavbarNext from "./NavbarNext";
import { useLocation } from "react-router-dom";

export default function NotesDahbaord() {
  const location = useLocation();

  // Get data passed from SemesterCards
  const { semester, subjects } = location.state || {};

  // fallback (if user refreshes page)
  const tabs = subjects;
  const selectedSemester = semester;

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [data, setData] = useState([]);

  // -------- API CALL WHEN SUBJECT CHANGES ----------
  useEffect(() => {
    if (!activeTab || !selectedSemester) return;

    fetch(
      `http://localhost:5000/notes/${selectedSemester}/${encodeURIComponent(
        activeTab
      )}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error("API ERROR:", err));
  }, [activeTab, selectedSemester]);
  
return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <NavbarNext />

      {/* Page Heading */}
      <div className="text-center py-15 mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Subjectwise Notes 
        </h1>

        <div className="w-48 h-1 bg-gray-400 mx-auto mt-4 rounded-full"></div>
      </div>

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

              {activeTab === tab && (
                <span
                  className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 
                  border-l-8 border-r-8 border-t-8 
                  border-l-transparent border-r-transparent border-t-red-600"
                ></span>
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="border border-gray-200 p-6">
          {data.length === 0 ? (
            <p className="text-center text-gray-500">No notes found</p>
          ) : (
            data.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-4 border-b last:border-b-0"
              >
                <a
                  href={file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-800 hover:underline font-medium"
                >
                  <FaFilePdf className="text-red-600 text-lg" />
                  {file.name}
                </a>

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
            ))
          )}
        </div>
      </section>
    </div>
  );
}
