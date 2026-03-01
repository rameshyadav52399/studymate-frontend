import React, { useEffect, useState } from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import { FiUpload, FiUploadCloud } from "react-icons/fi";
import logo from "../assets/logo.png";



import {
  Home,
  LogOut,
  UserCircle2,
  UserPlus,
  Users,
  Eye,
  EyeOff,
  X,
  Edit,
  Trash2,
  FileText,
} from "lucide-react";
import { FaPlusCircle, FaFolderOpen, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { ClipboardList, Layers, BookOpen } from "lucide-react";
import {
  FaPlus,
  FaLayerGroup,
  FaCloudUploadAlt,
  FaBook,
} from "react-icons/fa";



export default function Dashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation


  const gotoHome = () => {
    navigate("/");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/insert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      alert("Failed to insert data!");
      console.error(error);
    }
  };

  const stats = [
    {
      label: "Total Resources",
      value: 30,
      gradient: "from-purple-400 to-purple-600",
      // gradient: "from-green-400 to-green-600",
    },
    // {
    //   label: "Total Admins",
    //   value: 13,
    //   gradient: "from-purple-400 to-purple-600",
    // },
    {
      label: "Pending Approvals",
      value: 10,
      gradient: "from-green-400 to-green-600",
      // gradient: "from-blue-400 to-blue-600",
    },
    // {
    //   label: "Documents Signed",
    //   value: 59,
    //   gradient: "from-orange-400 to-orange-600",
    // },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const [showManageAdmin, setShowManageAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showTablePassword, setShowTablePassword] = useState({});
  //-----------------upload syllabus and upload book states and upload notes and pyqw--------------
  const [semester, setSemester] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");
  //--------upload pyqs ----------------
  const [pyqYear, setPyqYear] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");

  //--------------------- upload book states--------------

  const [bookTitle, setBookTitle] = useState("");

  // -------------State for manage admins pop-up--------------
  const [admins, setAdmins] = useState([]);
  //----------student upload states --------------
  // Filter state (All / Approved / Pending / Rejected)
  const [filterStatus, setFilterStatus] = useState("All");

  // Row limit state (10 / 50 / 100)
  const [rowLimit, setRowLimit] = useState(10);

  // -------- Approve / Reject API --------
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/student-uploads/${id}`,
        {
          status: newStatus, // "APPROVED" or "REJECTED"
        }
      );

      // Update UI after success
      setResources((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, status: newStatus } : item
        )
      );

      console.log("Status updated:", res.data);
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  // ------------------ API CALLING FOR SHOW RESOURCE STATUS UPLOADED BY STUDENT ----------------
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get("http://localhost:5000/student-uploads");

        // Backend already returns correct structure
        const formattedData = res.data.map((item, index) => ({
          id: item.id,
          sr_no: index + 1,
          type: item.type,
          semester: item.semester,
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


  // Fetching admins from backend
  useEffect(() => {
    if (!showManageAdmin) return;

    const loadAdmins = async () => {
      try {
        const res = await fetch("http://localhost:5000/admins");
        const data = await res.json();
        setAdmins(data);
      } catch (error) {
        console.error("Error loading admins:", error);
      }
    };

    loadAdmins();
  }, [showManageAdmin]);

  //------------------API CALLING FOR UPLOAD THE SYLLAUBS----------------
  const handleUploadSyllabus = async (e) => {
    e.preventDefault();

    if (!semester || !selectedFile) {
      alert("Please select semester and PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("semester", semester);
    formData.append("pdf", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/upload-syllabus", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessage(data.message);

      // reset after upload
      setSemester("");
      setSelectedFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Upload failed");
    }
  };

  // ---------------- API CALLING FOR UPLOAD THE BOOK ----------------
  const handleUploadBook = async (e) => {
    e.preventDefault();

    if (!semester || !bookTitle || !selectedFile) {
      alert("Please enter semester, book title and select PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("semester", semester);
    formData.append("book_title", bookTitle);
    formData.append("pdf", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/upload-book", {
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

  // ---------------- API CALLING FOR UPLOAD NOTES ----------------
  const handleUploadNotes = async (e) => {
    e.preventDefault();

    if (!semester || !subject || !selectedFile) {
      alert("Please select semester, subject and PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("semester", semester);
    formData.append("subject", subject);
    formData.append("pdf", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/upload-notes", {
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
  // ------------------ API CALLING FOR UPLOAD PYQs ----------------
  const handleUploadPyq = async (e) => {
    e.preventDefault();

    if (!semester || !subject || !pyqYear || !selectedFile) {
      alert("Please select semester, subject, PYQ year and PDF file");
      return;
    }

    const formData = new FormData();
    formData.append("semester", semester);
    formData.append("subject", subject);
    formData.append("pyq_year", pyqYear);
    formData.append("pdf", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/upload-pyq", {
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

  //----------------------------------------------------------------------------

  const [editingAdmin, setEditingAdmin] = useState(null);

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1200;
      const increment = Math.ceil(end / (duration / 5));

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 30);

      return interval;
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${stat.gradient} text-white p-6 rounded-xl shadow-md transition-transform hover:scale-[1.03]`}
              >
                <h2 className="text-4xl font-bold mb-1">{counts[index]}</h2>
                <p className="text-sm uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </section>
        );

      //------------admin nagivation-----------
      case "admins":
        return (
          <section className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              Admin Management
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                onClick={() => setShowAddAdmin(true)}
              >
                <div className="flex items-center gap-4 mb-3">
                  <UserPlus size={40} className="bg-white/20 p-2 rounded-lg" />
                  <h3 className="text-xl font-semibold">Add Admin</h3>
                </div>

                <p className="text-sm text-blue-100">
                  Add a new admin to the platform.
                </p>

                <button className="mt-4 px-4 py-2 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition">
                  Add New Admin
                </button>
              </div>

              <div
                className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                onClick={() => setShowManageAdmin(true)}
              >
                <div className="flex items-center gap-4 mb-3">
                  <Users size={40} className="bg-white/20 p-2 rounded-lg" />
                  <h3 className="text-xl font-semibold">Manage Admins</h3>
                </div>

                <p className="text-sm text-green-100">
                  View, edit, or remove existing admins.
                </p>

                <button className="mt-4 px-4 py-2 bg-white text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition">
                  Manage Now
                </button>
              </div>
            </div>
          </section>
        );

      // ---------------------Resources Navigation-------------------


      case "resources":

        const goToAddResources = () => {
          navigate("/admin/add-resource"); // Redirect to admin login page
        };

        return (
          <section className="p-6">
            {/* Heading */}
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              Manage Resources
            </h2>

            {/* Two Box Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Add New Resource Box */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <FaPlusCircle className="text-green-600 text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-700">
                    Add New Resource
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">
                  Upload notes, PDFs, or study materials for students.
                </p>

                <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition hover:cursor-pointer" onClick={goToAddResources}>
                  <FiUpload size={20} />
                  Upload Resource
                </button>
              </div>

              {/* Manage Resources Box */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-3">
                  <FaFolderOpen className="text-blue-600 text-2xl" />
                  <h3 className="text-xl font-semibold text-gray-700">
                    Manage Resources
                  </h3>
                </div>

                <p className="text-gray-600 mb-4">
                  View uploaded resources or delete outdated materials.
                </p>

                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    <FaFolderOpen />
                    View Resources
                  </button>

                  <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                    <FaTrashAlt />
                    Delete Resource
                  </button>
                </div>
              </div>

            </div>
          </section>
        );

      //------------upload resources-----------
      case "upload_resources":
        return (
          <section className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">
              Resource Management
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">

              {/* PYQs */}
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                onClick={() => setActiveSection("upload_pyqs")}

              >
                <div className="flex items-center gap-4 mb-3">
                  <ClipboardList size={40} className="bg-white/20 p-2 rounded-lg" />
                  <h3 className="text-xl font-semibold">PYQs</h3>
                </div>

                <p className="text-sm text-blue-100">
                  Upload previous year question papers.
                </p>

                <button className="mt-4 px-4 py-2 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-100 transition">
                  Upload PYQs
                </button>
              </div>

              {/* Notes */}
              <div
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                onClick={() => setActiveSection("upload_notes")}


              >
                <div className="flex items-center gap-4 mb-3">
                  <FileText size={40} className="bg-white/20 p-2 rounded-lg" />
                  <h3 className="text-xl font-semibold">Notes</h3>
                </div>

                <p className="text-sm text-green-100">
                  Upload study notes for students subject wise.
                </p>

                <button className="mt-4 px-4 py-2 bg-white text-green-700 rounded-lg font-medium hover:bg-green-100 transition">
                  Upload Notes
                </button>
              </div>

              {/* Syllabus */}
              <div
                className="bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                onClick={() => setActiveSection("upload_syllabus")}

              >
                <div className="flex items-center gap-4 mb-3">
                  <Layers size={40} className="bg-white/20 p-2 rounded-lg" />
                  <h3 className="text-xl font-semibold">Syllabus</h3>
                </div>

                <p className="text-sm text-purple-100">
                  Upload mca syllabus semester wise.

                </p>

                <button className="mt-4 px-4 py-2 bg-white text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition">
                  Upload Syllabus
                </button>
              </div>

              {/* Books */}
              <div
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-xl shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                onClick={() => setActiveSection("upload_books")}
              >
                <div className="flex items-center gap-4 mb-3">
                  <BookOpen size={40} className="bg-white/20 p-2 rounded-lg" />
                  <h3 className="text-xl font-semibold">Books</h3>
                </div>

                <p className="text-sm text-orange-100">
                  Upload E-books for students semester wise.
                </p>

                <button className="mt-4 px-4 py-2 bg-white text-red-700 rounded-lg font-medium hover:bg-red-100 transition">
                  View Books
                </button>
              </div>

            </div>
          </section>
        );

      //----------------------upload syllabus  dashbaord component design-----------------------------



      case "upload_syllabus":
        return (
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 p-3">
            <div className="w-full max-w-3xl">

              {/* Header */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="bg-indigo-100 p-3 rounded-full shadow-sm">
                  <FaPlus className="text-indigo-600 text-2xl" />
                </div>
                <h2 className="text-3xl font-semibold text-gray-700">
                  Upload Syllabus
                </h2>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form className="space-y-6" onSubmit={handleUploadSyllabus}>

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
                      <option value="1">Semester 1</option>
                      <option value="2">Semester 2</option>
                      <option value="3">Semester 3</option>
                      <option value="4">Semester 4</option>
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
        );


      //----------------------------UPload PYQs------------------------
      case "upload_pyqs":
        return (
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
        );

      // ---------------------------- Upload Notes ------------------------
      case "upload_notes":
        return (
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 p-4">
            <div className="w-full max-w-3xl">

              {/* Header */}
              <h2 className="text-3xl font-semibold text-gray-700 text-center mb-8">
                Upload Notes
              </h2>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <form className="space-y-6"
                  onSubmit={handleUploadNotes}>

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
        );

      // ---------------------------- Upload Books ------------------------
      case "upload_books":
        return (
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
                <form className="space-y-6" onSubmit={handleUploadBook}>

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
        );


      case "student_uploads":
        return (
          <section className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 p-4">
            <div className="w-full max-w-6xl mx-auto">

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                {/* <div className="bg-indigo-100 p-3 rounded-full shadow-sm">
                  <FileText className="text-indigo-600 text-2xl" />
                </div> */}
                <h2 className="text-2xl font-semibold text-gray-700">
                  Student Uploaded Resources
                </h2>
              </div>

              {/* Table Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                      <th className="px-4 py-3 text-left">Sr No</th>
                      <th className="px-4 py-3 text-left">Resource Type</th>
                      <th className="px-4 py-3 text-left">Semester</th>
                      <th className="px-4 py-3 text-left">Uploaded Resource</th>
                      <th className="px-4 py-3 text-left">Approval Status</th>
                      <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-700">
                    {resources.map((item, index) => (
                      <tr
                        key={item.id}
                        className="border-b hover:bg-indigo-50 transition"
                      >
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{item.type}</td>
                        <td className="px-4 py-3"> Semester  {item.semester}</td>

                        {/* PDF link */}
                        <td className="px-4 py-3">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-700 hover:text-red-600 hover:underline transition"
                          >
                            <FaFilePdf className="text-red-600 text-lg" />
                            {item.name}
                          </a>
                        </td>

                        <td className="px-4 py-3">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${item.status === "APPROVED"
                              ? "bg-green-100 text-green-700"
                              : item.status === "REJECTED"
                                ? "bg-red-100 text-red-700"
                                : "bg-yellow-100 text-yellow-700"
                              }`}
                          >
                            {item.status}
                          </span>
                        </td>

                        <td className="px-4 py-3 text-center space-x-2">
                          {/* Approve Button */}
                          <button
                            onClick={() => handleStatusChange(item.id, "APPROVED")}
                            className="bg-green-600 text-white px-4 py-1.5 rounded-lg hover:bg-green-700 transition"
                          >
                            Approve
                          </button>

                          {/* Reject Button */}
                          <button
                            onClick={() => handleStatusChange(item.id, "REJECTED")}
                            className="bg-red-600 text-white px-4 py-1.5 rounded-lg hover:bg-red-700 transition"
                          >
                            Reject
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        );



      default:
        return null;

    }
  };

  const handleEditAdmin = (id) => {
    setEditingAdmin(id);
  };

  const handleUpdateAdmin = (id, field, value) => {
    setAdmins((prev) =>
      prev.map((admin) =>
        admin.id === id ? { ...admin, [field]: value } : admin
      )
    );
  };

  const handleRemoveAdmin = (id) => {
    setAdmins((prev) => prev.filter((admin) => admin.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#0a2540] to-[#19376d] text-white flex flex-col">
        <div className="text-center py-3 text-2xl font-bold border-b border-blue-400">
          {/* StudyMate */}
          <div className="px-5 py-0" >
            <img
              src={logo}
              alt="StudyMate Logo"
              className="h-17 w-auto"
            />
          </div>
        </div>

        <div className="flex flex-col items-center py-6 border-b border-blue-400">
          <UserCircle2 size={60} className="text-white mb-2" />
          <h3 className="font-semibold text-lg">Dr. Amit Kumar Biswas</h3>
          <p className="text-blue-200 text-sm">Administrator</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <button
            onClick={() => setActiveSection("dashboard")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left transition ${activeSection === "dashboard"
              ? "bg-blue-600"
              : "hover:bg-blue-500/60"
              }`}
          >
            <Home size={18} /> Home
          </button>

          <button
            onClick={() => setActiveSection("upload_resources")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left transition ${activeSection === "upload_resources"
              ? "bg-blue-600"
              : "hover:bg-blue-500/60"
              }`}
          >
            <FiUpload size={18} />
            Upload Resources
          </button>

          {/* Student Uploaded Resources */}
          <button
            onClick={() => setActiveSection("student_uploads")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left transition ${activeSection === "student_uploads"
              ? "bg-blue-600"
              : "hover:bg-blue-500/60"
              }`}
          >
            <FiUploadCloud size={18} />
            Student Uploads
          </button>
        </nav>

        <button className=" flex items-center gap-2 mx-4 mb-6 px-4 py-2 bg-red-500 rounded-lg cursor-pointer hover:bg-red-600 transition" onClick={gotoHome}>
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 relative">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-gray-700">
            Welcome to Admin Dashboard
          </h1>
        </header>

        {renderContent()}

        {/* -----------------------Add Admin Popup----------------------- */}
        {showAddAdmin && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white w-[90%] max-w-md rounded-xl shadow-lg p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowAddAdmin(false)}
              >
                <X size={20} />
              </button>

              <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
                Add New Admin
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Admin Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter admin name"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter admin email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* PASSWORD FIELD FIXED */}
                <div className="relative">
                  <label className="block text-gray-700 font-medium mb-1">
                    Password
                  </label>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  {/* EYE BUTTON NOW WORKS PROPERLY */}
                  <button
                    type="button"
                    className="absolute right-3 top-9 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {/* FIXED SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition"
                >
                  Add Admin
                </button>
              </form>
            </div>
          </div>
        )}

        {/* ----------------------Manage Admins Popup-------------------- */}
        {showManageAdmin && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 ">
            <div className="bg-white w-[95%] max-w-3xl rounded-xl shadow-lg p-6 pt-0 relative max-h-[500px] overflow-y-auto ">

              {/* ⭐ Make this wrapper sticky */}
              <div className="sticky top-0 bg-white z-10 pb-3 pt-5 mt-0 border-b border-gray-200 ">

                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowManageAdmin(false)}
                >
                  <X size={20} />
                </button>

                <h2 className="text-2xl font-semibold mb-6 text-center text-emerald-600">
                  Manage Admins
                </h2>

              </div>


              <table className="w-full  border border-gray-200 rounded-lg ">
                <thead className="bg-gray-100 text-gray-700">
                  <tr>
                    <th className="p-3 border-b text-left">Name</th>
                    <th className="p-3 border-b text-left">Email</th>
                    <th className="p-3 border-b text-left">Password</th>
                    <th className="p-3 border-b text-center">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {admins.map((admin) => (
                    <tr key={admin.id} className="hover:bg-gray-50 transition">
                      {/* -------- Name -------- */}
                      <td className="p-3 border-b">
                        {editingAdmin === admin.id ? (
                          <input
                            type="text"
                            value={admin?.name || ""}
                            onChange={(e) =>
                              handleUpdateAdmin(
                                admin.id,
                                "name",
                                e.target.value
                              )
                            }
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                          />
                        ) : (
                          admin?.name
                        )}
                      </td>

                      <td className="p-3 border-b">
                        {editingAdmin === admin.id ? (
                          <input
                            type="email"
                            value={admin?.email || ""}
                            onChange={(e) =>
                              handleUpdateAdmin(
                                admin.id,
                                "email",
                                e.target.value
                              )
                            }
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                          />
                        ) : (
                          admin?.email
                        )}
                      </td>

                      <td className="p-3 border-b">
                        {editingAdmin === admin.id ? (
                          <input
                            type={
                              showTablePassword[admin.id] ? "text" : "password"
                            }
                            value={admin?.password || ""}
                            onChange={(e) =>
                              handleUpdateAdmin(
                                admin.id,
                                "password",
                                e.target.value
                              )
                            }
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                          />
                        ) : (
                          <span>
                            {showTablePassword[admin.id]
                              ? admin?.password
                              : "•••••"}
                          </span>
                        )}

                        <button
                          onClick={() =>
                            setShowTablePassword((prev) => ({
                              ...prev,
                              [admin.id]: !prev[admin.id],
                            }))
                          }
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          {showTablePassword[admin.id] ? (
                            <EyeOff size={16} />
                          ) : (
                            <Eye size={16} />
                          )}
                        </button>
                      </td>

                      <td className="p-3 border-b text-center space-x-3">
                        {editingAdmin === admin.id ? (
                          <button
                            onClick={() => setEditingAdmin(null)}
                            className="text-green-600 hover:text-green-800"
                          >
                            Save
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEditAdmin(admin.id)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Edit size={18} />
                          </button>
                        )}

                        <button
                          onClick={() => handleRemoveAdmin(admin.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
