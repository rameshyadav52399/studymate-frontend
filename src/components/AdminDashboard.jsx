import React, { useEffect, useState } from "react";
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


export default function Dashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation


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
      value: 50,
      gradient: "from-green-400 to-green-600",
    },
    {
      label: "Total Admins",
      value: 13,
      gradient: "from-purple-400 to-purple-600",
    },
    {
      label: "Pending Approvals",
      value: 30,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      label: "Documents Signed",
      value: 59,
      gradient: "from-orange-400 to-orange-600",
    },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [activeSection, setActiveSection] = useState("dashboard");
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const [showManageAdmin, setShowManageAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showTablePassword, setShowTablePassword] = useState({});

  // -------------State for manage admins pop-up--------------
  const [admins, setAdmins] = useState([]);

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


  //----------------------------------------------------------

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
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
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

      // ---------------------Manage Resources Navigation-------------------


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
                  <FaPlusCircle />
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
        <div className="text-center py-6 text-2xl font-bold border-b border-blue-400">
          StudyMate
        </div>

        <div className="flex flex-col items-center py-6 border-b border-blue-400">
          <UserCircle2 size={60} className="text-white mb-2" />
          <h3 className="font-semibold text-lg">Dr. Amit Biswas</h3>
          <p className="text-blue-200 text-sm">Super Administrator</p>
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
            onClick={() => setActiveSection("admins")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left transition ${activeSection === "admins"
                ? "bg-blue-600"
                : "hover:bg-blue-500/60"
              }`}
          >
            <Users size={18} /> Admins
          </button>

          <button
            onClick={() => setActiveSection("resources")}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg w-full text-left transition ${activeSection === "resources"
                ? "bg-blue-600"
                : "hover:bg-blue-500/60"
              }`}
          >
            <FileText size={18} /> Resources
          </button>
        </nav>

        <button className="flex items-center gap-2 mx-4 mb-6 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition">
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
