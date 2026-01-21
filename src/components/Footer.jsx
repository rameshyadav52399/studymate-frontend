import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4 text-center text-sm md:text-base m-0 p-0 mb-0 mt-auto">
      <p className="px-4">
        © {new Date().getFullYear()} <span className="font-semibold text-white">StudyMate</span>. 
        All rights reserved.{" "}
        <span className="text-teal-400 font-medium">Developed by Ramesh.</span>
      </p>
    </footer>
  );
}
