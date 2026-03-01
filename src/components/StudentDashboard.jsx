import React, { useEffect, useState } from "react";
import { FiUpload, FiList, FiUser } from "react-icons/fi";
import { ClipboardList, FileText, BookOpen, LogOut, } from "lucide-react";
import { FaFilePdf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


import { FaPlus, FaLayerGroup, FaBook, FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("status");
    const navigate = useNavigate(); // Hook for navigation
    //go to home page
  
    const gotoHome = () => {
  navigate("/");
}

  // states for upload pyqs, notes and books
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [pyqYear, setPyqYear] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  //--------upload pyqs ----------------
  const [year, setYear] = useState("");

  const uploadCategories = [
    {
      title: "PYQs",
      icon: <ClipboardList size={32} />,
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      title: "Notes",
      icon: <FileText size={32} />,
      gradient: "from-emerald-500 to-green-600",
    },
    {
      title: "Books",
      icon: <BookOpen size={32} />,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  // ------------------ API CALLING FOR SHOW RESOURCE STATUS UPLOADED BY STUDENT ----------------
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get("http://localhost:5000/student-upload-status");

        // Backend already returns correct structure
        const formattedData = res.data.map((item, index) => ({
          id: item.id,
          sr_no: index + 1,
          type: item.type,
          name: item.name,
          status: item.status,
          url: item.url
        }));

        setResources(formattedData);
      } catch (error) {
        console.error("Error fetching resources:", error);
      }
    };

    fetchResources();
  }, []);



  // ------------------ API CALLING FOR UPLOAD PYQs ----------------
  const studentId = 1; // or from login/session
  const handleUploadPyq = async (e) => {
    e.preventDefault();

    if (!semester || !subject || !pyqYear || !selectedFile) {
      alert("Please select semester, subject, PYQ year and PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("student_id", studentId);
    formData.append("semester", semester);
    formData.append("subject", subject);
    formData.append("pyq_year", pyqYear);
    formData.append("pdf", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/student-upload-pyq", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message);

      // reset after upload
      setSemester("");
      setSubject("");
      setPyqYear("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Upload failed");
    }
  };


  // ------------------ API CALLING FOR UPLOAD NOTES ----------------
  const studentId1 = 1; // or from login/session

  const handleStdUploadNotes = async (e) => {
    e.preventDefault();

    if (!semester || !subject || !selectedFile) {
      alert("Please select semester, subject and PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("student_id", studentId1);
    formData.append("semester", semester);
    formData.append("subject", subject);
    formData.append("pdf", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/student-upload-notes", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message);

      // reset after upload
      setSemester("");
      setSubject("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Upload failed");
    }
  };

  // ------------------ API CALLING FOR UPLOAD BOOKS ----------------
  const studentId2 = 1; // or from login/session

  const handleStdUploadBooks = async (e) => {
    e.preventDefault();

    if (!semester || !bookTitle || !selectedFile) {
      alert("Please select semester, book title and PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("student_id", studentId2);
    formData.append("semester", semester);
    formData.append("book_title", bookTitle);
    formData.append("pdf", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/student-upload-books", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message);

      // reset after upload
      setSemester("");
      setBookTitle("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Upload failed");
    }
  };
  //-------------------------------------------------------------------------
  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-100 to-slate-200">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-slate-900 to-indigo-900 text-white p-6 shadow-xl">
        <div className="flex flex-col items-center mb-10">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-3 shadow-md">
            <FiUser className="text-indigo-700 text-4xl" />
          </div>
          <h2 className="text-lg font-semibold">{}</h2>
        </div>

        <nav className="space-y-3">
          <button
            onClick={() => setActiveTab("status")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium
            ${activeTab === "status"
                ? "bg-white text-indigo-800 shadow"
                : "hover:bg-indigo-700"
              }`}
          >
            <FiList />
            Resource Status
          </button>

          <button
            onClick={() => setActiveTab("upload")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium
            ${activeTab === "upload"
                ? "bg-white text-indigo-800 shadow"
                : "hover:bg-indigo-700"
              }`}
          >
            <FiUpload />
            Suggest Resources
          </button>
           <button className=" flex items-center gap-2 mx-2 mt-20 mb-6 px-15 py-2 bg-red-500 rounded-lg cursor-pointer hover:bg-red-600 transition" onClick={gotoHome}>
                    <LogOut size={18} /> Logout
                  </button>
        </nav>
      </div>

      {/* Student Uploaded Status */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-700 mb-6">
           Welcome to Student Dashboard
        </h1>

        {/* Status Table */}
        {activeTab === "status" && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-slate-700">
              Uploaded Resources Status
            </h2>

            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  <th className="p-3 text-left">Sr No</th>
                  <th className="p-3 text-left">Resource Type</th>
                  <th className="p-3 text-left">Resource Name</th>
                  <th className="p-3 text-left">Approval Status</th>
                </tr>
              </thead>

              <tbody>
                {resources.map((res, index) => (
                  <tr key={res.id} className="border-b hover:bg-slate-50">
                    <td className="p-3">{index + 1}</td>
                    <td className="p-3">{res.type}</td>

                    {/* Resource Name with PDF icon + clickable link */}
                    <td className="p-3">
                      {res.url ? (
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-blue-700 hover:text-red-600 hover:underline transition"
                        >
                          {/* <FileText className="w-5 h-5 text-red-600" /> */}
                          <FaFilePdf className="text-red-600 text-lg" />

                          {res.name}
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-gray-400">
                          <FaFilePdf className="text-red-600 text-lg" />

                          {/* <FileText className="w-5 h-5 text-gray-400" /> */}
                          {res.name}
                        </span>
                      )}
                    </td>

                    <td className="p-3">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${res.status === "APPROVED"
                          ? "bg-green-100 text-green-700"
                          : res.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                          }`}
                      >
                        {res.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}


        {/* Add New Resources */}
        {activeTab === "upload" && (
          <div className="bg-white rounded-xl shadow-lg p-10">
            <h2 className="text-2xl font-semibold text-slate-700 mb-8 text-center">
              Select Resource Type
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {uploadCategories.map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setActiveTab(
                      item.title === "PYQs"
                        ? "upload_pyqs"
                        : item.title === "Notes"
                          ? "upload_notes"
                          : "upload_books"
                    )
                  }
                  className={`flex items-center gap-4 p-6 rounded-2xl cursor-pointer
                  bg-gradient-to-r ${item.gradient} text-white
                  shadow-lg transition-all duration-300
                  hover:scale-105 hover:shadow-2xl active:scale-95`}
                >
                  <div className="p-3 bg-white/20 rounded-full">
                    {item.icon}
                  </div>
                  <span className="text-lg font-semibold tracking-wide">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/*----------------------------- Upload PYQs--------------------------------- */}
        {activeTab === "upload_pyqs" && (
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 p-4">
            <div className="w-full max-w-3xl">

              {/* Header */}
              <h2 className="text-3xl font-semibold text-gray-700 text-center mb-8">
                Upload PYQs
              </h2>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form className="space-y-6" onSubmit={handleUploadPyq}>

                  {/* Semester */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Select Semester
                    </label>
                    <select
                      value={semester}
                      onChange={(e) => {
                        setSemester(e.target.value);
                        setSubject("");
                      }}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    >
                      <option value="">-- Select Semester --</option>
                      <option value="1">Semester 1</option>
                      <option value="2">Semester 2</option>
                      <option value="3">Semester 3</option>
                      <option value="4">Semester 4</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Select Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                      disabled={!semester}
                    >
                      <option value="">-- Select Subject --</option>

                      {semester === "1" && (
                        <>
                          <option value="C++ and DS">C++ and DS</option>
                          <option value="ADBMS">ADBMS</option>
                          <option value="Software Engineering">Software Engineering</option>
                          <option value="Mathematical Foundation of CS">Mathematical Foundation of CS</option>
                          <option value="Fundamentals of CS">Fundamentals of CS</option>
                        </>
                      )}

                      {semester === "2" && (
                        <>
                          <option value="Programming with Java">Programming with Java</option>
                          <option value="Computer Network">Computer Network</option>
                          <option value="Artificial Intelligence">Artificial Intelligence</option>
                          <option value="OS with Linux">OS with Linux</option>
                          <option value="ERP">ERP</option>
                        </>
                      )}

                      {semester === "3" && (
                        <>
                          <option value="Computer Graphics">Computer Graphics</option>
                          <option value="Cryptography and Network Security">Cryptography and Network Security</option>
                          <option value="Data Science">Data Science</option>
                          <option value="Neural Network">Neural Network</option>
                          <option value="Internet of Things">Internet of Things</option>
                        </>
                      )}

                      {semester === "4" && (
                        <>
                          <option value="Cloud Computing">Cloud Computing</option>
                          <option value="Big Data Analytics">Big Data Analytics</option>
                        </>
                      )}
                    </select>
                  </div>

                  {/* PYQ Year */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Select PYQ Year
                    </label>
                    <input
                      type="number"
                      placeholder="Enter year (e.g. 2023)"
                      value={pyqYear}
                      onChange={(e) => setPyqYear(e.target.value)}
                      min="2000"
                      max="2099"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                  </div>

                  {/* Upload Box */}
                  {/* Upload Box */}
                  <div className="flex justify-center">
                    <label className="w-100 cursor-pointer">
                      <div className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-xl p-5 bg-indigo-50 hover:bg-indigo-100 transition relative group">
                        <FaCloudUploadAlt className="text-indigo-600 text-5xl mb-3" />
                        <p className="text-gray-600 font-medium">
                          Drag & drop files here
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          or click to upload
                        </p>

                        <span className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
                          Choose File
                        </span>

                        <input
                          type="file"
                          accept="application/pdf"
                          className="hidden"
                          onChange={(e) => setSelectedFile(e.target.files[0])}
                        />

                        {selectedFile && (
                          <p className="mt-3 text-sm text-gray-700 font-medium">
                            📄 {selectedFile.name}
                          </p>
                        )}
                      </div>
                    </label>
                  </div>

                  {/* Upload Button */}
                  <div className="flex justify-center pt-6">
                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-emerald-600 text-white px-20 py-3 rounded-full font-semibold hover:bg-emerald-700 transition shadow-md"
                    >
                      <FaCloudUploadAlt />
                      Upload
                    </button>
                  </div>

                  {/* Message */}
                  {message && (
                    <p className="text-center text-green-600 font-medium">
                      {message}
                    </p>
                  )}

                </form>
              </div>
            </div>
          </section>
        )}

        {/* Upload Notes */}
        {activeTab === "upload_notes" && (
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 p-4">
            <div className="w-full max-w-3xl">

              {/* Header */}
              <h2 className="text-3xl font-semibold text-gray-700 text-center mb-8">
                Upload Notes
              </h2>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form className="space-y-6"
                  onSubmit={handleStdUploadNotes}>

                  {/* Semester */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Select Semester
                    </label>
                    <select
                      value={semester}
                      onChange={(e) => {
                        setSemester(e.target.value);
                        setSubject(""); // reset subject when semester changes
                      }}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    >
                      <option value="">-- Select Semester --</option>
                      <option value="1">Semester 1</option>
                      <option value="2">Semester 2</option>
                      <option value="3">Semester 3</option>
                      <option value="4">Semester 4</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Select Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                      disabled={!semester}
                    >
                      <option value="">-- Select Subject --</option>
 {semester === "1" && (
                        <>
                          <option value="C++ and DS">C++ and DS</option>
                          <option value="ADBMS">ADBMS</option>
                          <option value="Software Engineering">Software Engineering</option>
                          <option value="Mathematical Foundation of CS">Mathematical Foundation of CS</option>
                          <option value="Fundamentals of CS">Fundamentals of CS</option>
                        </>
                      )}

                      {semester === "2" && (
                        <>
                          <option value="Programming with Java">Programming with Java</option>
                          <option value="Computer Network">Computer Network</option>
                          <option value="Artificial Intelligence">Artificial Intelligence</option>
                          <option value="OS with Linux">OS with Linux</option>
                          <option value="ERP">ERP</option>
                        </>
                      )}

                      {semester === "3" && (
                        <>
                          <option value="Computer Graphics">Computer Graphics</option>
                          <option value="Cryptography and Network Security">Cryptography and Network Security</option>
                          <option value="Data Science">Data Science</option>
                          <option value="Neural Network">Neural Network</option>
                          <option value="Internet of Things">Internet of Things</option>
                        </>
                      )}

                      {semester === "4" && (
                        <>
                          <option value="Cloud Computing">Cloud Computing</option>
                          <option value="Big Data Analytics">Big Data Analytics</option>
                        </>
                      )}
                    </select>
                  </div>

                  {/* Upload Box */}
                  <div className="flex justify-center">
                    <label className="w-100 cursor-pointer">
                      <div className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-xl p-5 bg-indigo-50 hover:bg-indigo-100 transition relative group">
                        <FaCloudUploadAlt className="text-indigo-600 text-5xl mb-3" />
                        <p className="text-gray-600 font-medium">
                          Drag & drop files here
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          or click to upload
                        </p>

                        <span className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
                          Choose File
                        </span>

                        <input
                          type="file"
                          accept="application/pdf"
                          className="hidden"
                          onChange={(e) => setSelectedFile(e.target.files[0])}
                        />

                        {selectedFile && (
                          <p className="mt-3 text-sm text-gray-700 font-medium">
                            📄 {selectedFile.name}
                          </p>
                        )}
                      </div>
                    </label>
                  </div>

                  {/* Upload Button */}
                  <div className="flex justify-center pt-6">
                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-emerald-600 text-white px-20 py-3 rounded-full font-semibold hover:bg-emerald-700 transition shadow-md"
                    >
                      <FaCloudUploadAlt />
                      Upload
                    </button>
                  </div>

                  {/* Message */}
                  {message && (
                    <p className="text-center text-green-600 font-medium">
                      {message}
                    </p>
                  )}

                </form>
              </div>
            </div>
          </section>
        )}

        {/* Upload Books */}
        {activeTab === "upload_books" && (
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 p-4">
            <div className="w-full max-w-3xl">

              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="bg-indigo-100 p-3 rounded-full shadow-sm">
                  <FaPlus className="text-indigo-600 text-2xl" />
                </div>
                <h2 className="text-3xl font-semibold text-gray-700">
                  Upload Books
                </h2>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form className="space-y-6" onSubmit={handleStdUploadBooks}>

                  {/* Semester */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      Select Semester
                    </label>

                    <select
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    >
                      <option value="">-- Select Semester --</option>
                      <option value="All">All Semesters</option>
                      <option value="1">Semester 1</option>
                      <option value="2">Semester 2</option>
                      <option value="3">Semester 3</option>
                      <option value="4">Semester 4</option>
                    </select>
                  </div>

                  {/* Book Title */}
                  <div>
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      Enter Book Title
                    </label>
                    <input
                      type="text"
                      value={bookTitle}
                      onChange={(e) => setBookTitle(e.target.value)}
                      placeholder="e.g. Head First Java"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
                    />
                  </div>

                  {/* Upload Box */}
                  <div className="flex justify-center">
                    <label className="w-100 cursor-pointer">
                      <div className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-xl p-5 bg-indigo-50 hover:bg-indigo-100 transition relative group">
                        <FaCloudUploadAlt className="text-indigo-600 text-5xl mb-3" />
                        <p className="text-gray-600 font-medium">
                          Drag & drop PDF here
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          or click to upload
                        </p>

                        <span className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
                          Choose File
                        </span>

                        <input
                          type="file"
                          accept="application/pdf"
                          className="hidden"
                          onChange={(e) => setSelectedFile(e.target.files[0])}
                        />

                        {selectedFile && (
                          <p className="mt-3 text-sm text-gray-700 font-medium">
                            📄 {selectedFile.name}
                          </p>
                        )}
                      </div>
                    </label>
                  </div>

                  {/* Upload Button */}
                  <div className="flex justify-center pt-6">
                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-emerald-600 text-white px-20 py-3 rounded-full font-semibold hover:bg-emerald-700 transition shadow-md"
                    >
                      <FaCloudUploadAlt />
                      Upload
                    </button>
                  </div>

                  {/* Message */}
                  {message && (
                    <p className="text-center text-green-600 font-medium">
                      {message}
                    </p>
                  )}

                </form>
              </div>
            </div>
          </section>
        )}
      </div>
    </div >
  );
};

export default StudentDashboard;
