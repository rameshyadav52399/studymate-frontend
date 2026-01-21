import React, { useState } from "react";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import teacherImg from "../assets/admin-pic.png";
import NavbarNext from "./NavbarNext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; 
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Handle Login Function
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
      navigate("/admin-dashboard"); // redirect after login
    } catch (err) {
      setError("Invalid email or password! Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <NavbarNext />

      <div className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Left Illustration Section */}
        <div className="hidden md:flex md:w-1/2 bg-gray-50 items-center justify-center">
          <img src={teacherImg} alt="Login Illustration" className="w-4/5" />
        </div>

        {/* Right Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
            Admin Login
          </h2>

          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg pl-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <User className="absolute left-3 top-3.5 text-gray-400" size={20} />
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg pl-11 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm text-center -mt-2">{error}</p>
            )}

            {/* Forgot Password */}
            <div className="flex items-center justify-end text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-300 font-semibold cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
