import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import StudentLoginModal from "./StudentLoginModal";

const AddResourceCard = () => {

  // opening the student login modal
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center 
    bg-gradient-to-br from-sky-100 via-gray-100 to-slate-200 px-4">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-slate-700 mb-10">
        Add New Resources
      </h1>

      {/* Card Wrapper */}
      <div className="relative group">
        {/* Card */}
        <div
          className="w-80 h-44 rounded-2xl 
          bg-white shadow-lg border border-gray-200
          flex flex-col items-center justify-center cursor-pointer
          transition-all duration-300
          hover:scale-105 hover:shadow-2xl"
          onClick={() => setOpen(true)}
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-full 
          bg-gradient-to-r from-sky-400 to-blue-500 
          flex items-center justify-center mb-3 shadow-md">
            <FiPlus className="text-white text-3xl" />
          </div>

          {/* Text */}
          <p className="text-xl font-semibold text-slate-700">
            Add New Resource
          </p>
          <p className="text-sm text-gray-500 mt-1 text-center px-4">
            Upload notes, PDFs, videos or study links
          </p>
        </div>

        {/* Soft Glow */}
        <div
          className="absolute inset-0 rounded-2xl 
          bg-gradient-to-r from-sky-300 to-blue-300
          blur-xl opacity-0 group-hover:opacity-30 
          transition duration-300 -z-10"
        ></div>
      </div>

      {/* Modal OUTSIDE card */}
      <StudentLoginModal isOpen={open} onClose={() => setOpen(false)} />

    </div>
  );
};

export default AddResourceCard;
