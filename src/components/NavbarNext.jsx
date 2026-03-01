import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";


function NavbarNext() {
  const navigate = useNavigate(); // Hook for navigation
  const gotoHome = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/admin-login"); // Redirect to admin login page
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#018d84] text-white shadow-md z-50">
      <div className="flex items-center justify-between px-2 py-0">
        {/* Logo */}
        <div className="cursor-pointer" onClick={gotoHome}>
          <img
            src={logo}
            alt="StudyMate Logo"
            className="h-20 w-auto"
          />
        </div>

        {/* Admin Button
        <div>
          <button className="bg-white text-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300 cursor-pointer" onClick={goToLogin}>
            Admin Login
          </button>
        </div> */}
      </div>
    </nav>
  );
}

export default NavbarNext;
