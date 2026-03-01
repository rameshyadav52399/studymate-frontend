// import React from "react";
// import { FiX, FiUser, FiLock } from "react-icons/fi";
// import studentImg from "../assets/studentImg.png";


// const StudentLoginModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//       {/* Modal Box */}
//       <div className="relative w-[800px] h-[450px] bg-white rounded-xl shadow-2xl flex overflow-hidden">

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-300 hover:text-red-500 text-2xl hover: cursor-pointer"
//         >
//           <FiX />
//         </button>

//         {/* Left Image Section */}
//         <div className="w-1/2 bg-white flex items-center justify-center p-6">
//           <img
//             src={studentImg}
//             alt="Student"
//             className="max-h-full object-contain"
//           />
//         </div>

//         {/* Right Login Section */}
//         <div className="w-1/2 bg-[#0f3b52] flex flex-col justify-center px-10 text-white">
//           <h2 className="text-2xl font-bold mb-8 text-center">
//             Student Login
//           </h2>

//           {/* Roll No Input */}
//           <div className="flex items-center bg-white rounded-md mb-4 px-3">
//             <FiUser className="text-gray-500 text-lg mr-2" />
//             <input
//               type="text"
//               placeholder="Enter Roll No"
//               className="w-full py-2 outline-none text-gray-700"
//             />
//           </div>

//           {/* Password Input */}
//           <div className="flex items-center bg-white rounded-md mb-7 px-3">
//             <FiLock className="text-gray-500 text-lg mr-2" />
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full py-2 outline-none text-gray-700"
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition hover:cursor-pointer" 
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentLoginModal;





import React, { useState } from "react";
import { FiX, FiUser, FiLock } from "react-icons/fi";
import studentImg from "../assets/studentImg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentLoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // ✅ Handle Student Login
  const handleLogin = async () => {
    setError("");

    if (!rollNo || !password) {
      setError("Roll no and password are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/student-login", {
        roll_no: rollNo,
        password: password,
      });

      if (response.data.message === "Login successful") {
        alert("Login successful");
        onClose(); // close modal
        navigate("/student-dashboard");
      }
    } catch (err) {
      setError("Invalid Roll no or password");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      {/* Modal Box */}
      <div className="relative w-[800px] h-[450px] bg-white rounded-xl shadow-2xl flex overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-300 hover:text-red-500 text-2xl hover: cursor-pointer"
        >
          <FiX />
        </button>

        {/* Left Image Section */}
        <div className="w-1/2 bg-white flex items-center justify-center p-6">
          <img
            src={studentImg}
            alt="Student"
            className="max-h-full object-contain"
          />
        </div>

        {/* Right Login Section */}
        <div className="w-1/2 bg-[#0f3b52] flex flex-col justify-center px-10 text-white">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Student Login
          </h2>

          {/* Roll No Input */}
          <div className="flex items-center bg-white rounded-md mb-4 px-3">
            <FiUser className="text-gray-500 text-lg mr-2" />
            <input
              type="text"
              placeholder="Enter Roll No"
              className="w-full py-2 outline-none text-gray-700"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center bg-white rounded-md mb-3 px-3">
            <FiLock className="text-gray-500 text-lg mr-2" />
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full py-2 outline-none text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-sm text-center mb-3">
              {error}
            </p>
          )}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition hover:cursor-pointer" 
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentLoginModal;
