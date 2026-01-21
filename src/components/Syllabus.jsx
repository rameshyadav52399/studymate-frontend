// import React from "react";
// import { Download, Eye } from "lucide-react"; // icons for download and view
// import NavbarNext from "./NavbarNext";
// import mypdf from '../assets/Ramesh_Minor_Project_Info.pdf'

// export default function Syllabus() {
//   const syllabusData = [
//     {
//       semester: "1st Semester Syllabus",
//       pdf: mypdf,
//     },
//     {
//       semester: "2nd Semester Syllabus",
//       pdf: "/pdfs/mca-sem2.pdf",
//     },
//     {
//       semester: "3rd Semester Syllabus",
//       pdf: "/pdfs/mca-sem3.pdf",
//     },
//     {
//       semester: "4th Semester Syllabus",
//       pdf: "/pdfs/mca-sem4.pdf",
//     },
//     {
//       semester: "Complete MCA Scheme",
//       pdf: "/pdfs/mca-scheme.pdf",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16">
//         {/* Navbar */}
//         <NavbarNext/>
//       {/* Header */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 mt-10">
//         MCA Syllabus & Schemes
//       </h1>

//       {/* Table Container */}
//       <div className="overflow-x-auto">
//         <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               <th className="py-3 px-4 text-left text-lg font-semibold">Syllabus</th>
//               <th className="py-3 px-4 text-center text-lg font-semibold">View</th>
//               <th className="py-3 px-4 text-center text-lg font-semibold">Download</th>
//             </tr>
//           </thead>
//           <tbody>
//             {syllabusData.map((item, index) => (
//               <tr
//                 key={index}
//                 className={`border-t transition duration-200 ${
//                   index === syllabusData.length - 1
//                     ? "bg-blue-50 hover:bg-blue-100"
//                     : "hover:bg-gray-50"
//                 }`}
//               >
//                 <td className="py-3 px-4 text-gray-700">{item.semester}</td>

//                 {/* View Icon */}
//                 <td className="py-3 px-4 text-center">
//                   <a
//                     href={item.pdf}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
//                   >
//                     <Eye size={20} />
//                   </a>
//                 </td>

//                 {/* Download Icon */}
//                 <td className="py-3 px-4 text-center">
//                   <a
//                     href={item.pdf}
//                     download
//                     className="inline-flex items-center justify-center bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
//                   >
//                     <Download size={20} />
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


















// import { useState } from "react";
// import { FaDownload, FaFilePdf } from "react-icons/fa";

// const tabs = [
//   "1st Semester",
//   "2nd Semester",
//   "3rd Semester",
//   "4th Semester",
//   "MCA Scheme",
// ];

// const data = {
//   "1st Semester": [
//     { name: "MCA 1st Sem Syllabus.pdf", url: "/pdfs/mca-sem1.pdf" },
//   ],
//   "2nd Semester": [
//     { name: "MCA 2nd Sem Syllabus.pdf", url: "/pdfs/mca-sem2.pdf" },
//   ],
//   "3rd Semester": [
//     { name: "MCA 3rd Sem Syllabus.pdf", url: "/pdfs/mca-sem3.pdf" },
//   ],
//   "4th Semester": [
//     { name: "MCA 4th Sem Syllabus.pdf", url: "/pdfs/mca-sem4.pdf" },
//   ],
//   "MCA Scheme": [
//     { name: "Complete MCA Scheme.pdf", url: "/pdfs/mca-scheme.pdf" },
//   ],
// };

// export default function McaTabsSyllabus() {
//   const [activeTab, setActiveTab] = useState("1st Semester");

//   return (
//     <>
//        <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-16">
//         {/* Navbar */}
//         <NavbarNext/>
//       {/* Header */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 mt-10">
//         MCA Syllabus & Schemes
//       </h1>
//       </div>
//     <section className="max-w-6xl mx-auto p-6 bg-white">
      
//       {/* Tabs (Copied Style) */}
//       <div className="flex border-b border-gray-300">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-6 py-3 text-sm font-semibold border border-gray-200 border-b-0 relative
//               ${
//                 activeTab === tab
//                   ? "bg-red-600 text-white"
//                   : "bg-white text-gray-800 hover:bg-gray-100"
//               }`}
//           >
//             {tab}
//             {activeTab === tab && (
//               <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 
//                 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-600">
//               </span>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="border border-gray-200 p-6">
//         {data[activeTab].map((file, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between py-3 border-b last:border-b-0"
//           >
//             {/* PDF Name */}
//             <a
//               href={file.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-blue-800 hover:underline font-medium"
//             >
//               <FaFilePdf className="text-red-600" />
//               {file.name}
//             </a>

//             {/* Download Button */}
//             <a
//               href={file.url}
//               download
//               className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//             >
//               <FaDownload />
//               Download
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//     </> 
//   );
// }


















// import { useState } from "react";
// import { FaDownload, FaFilePdf } from "react-icons/fa";
// import NavbarNext from "../components/NavbarNext"; 
// import { div } from "framer-motion/client";

// const tabs = [
//   "1st Semester",
//   "2nd Semester",
//   "3rd Semester",
//   "4th Semester",
//   "MCA Scheme",
// ];

// const data = {
//   "1st Semester": [
//     { name: "MCA 1st Sem Syllabus.pdf", url: "/pdfs/mca-sem1.pdf" },
//   ],
//   "2nd Semester": [
//     { name: "MCA 2nd Sem Syllabus.pdf", url: "/pdfs/mca-sem2.pdf" },
//   ],
//   "3rd Semester": [
//     { name: "MCA 3rd Sem Syllabus.pdf", url: "/pdfs/mca-sem3.pdf" },
//   ],
//   "4th Semester": [
//     { name: "MCA 4th Sem Syllabus.pdf", url: "/pdfs/mca-sem4.pdf" },
//   ],
//   "MCA Scheme": [
//     { name: "Complete MCA Scheme.pdf", url: "/pdfs/mca-scheme.pdf" },
//   ],
// };

// export default function McaTabsSyllabus() {
//   const [activeTab, setActiveTab] = useState("1st Semester");

//   return (
   
//     <div className="min-h-screen bg-gray-100">
      
//       {/* Navbar */}
//       <NavbarNext />

//       {/* Header */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 my-30">
//         MCA Syllabus & Schemes
//       </h1>

//       <section className="max-w-6xl mx-auto p-6 bg-white">
        
//         {/* Tabs */}
//         <div className="flex border-b border-gray-300">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-6 py-3 text-sm font-semibold border border-gray-200 border-b-0 relative
//                 ${
//                   activeTab === tab
//                     ? "bg-red-600 text-white"
//                     : "bg-white text-gray-800 hover:bg-gray-100"
//                 }`}
//             >
//               {tab}
//               {activeTab === tab && (
//                 <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 
//                   border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-red-600">
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content */}
//         <div className="border border-gray-200 p-6">
//           {data[activeTab].map((file, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between py-3 border-b last:border-b-0"
//             >
//               <a
//                 href={file.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 text-blue-800 hover:underline font-medium"
//               >
//                 <FaFilePdf className="text-red-600" />
//                 {file.name}
//               </a>

//               <a
//                 href={file.url}
//                 download
//                 className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//               >
//                 <FaDownload />
//                 Download
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


import { useState } from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import NavbarNext from "../components/NavbarNext";

const tabs = [
  "1st Semester",
  "2nd Semester",
  "3rd Semester",
  "4th Semester",
  // "MCA Scheme",
];

const data = {
  "1st Semester": [
    { name: "MCA 1st Sem Syllabus.pdf", url: "/pdfs/mca-sem1.pdf" },
  ],
  "2nd Semester": [
    { name: "MCA 2nd Sem Syllabus.pdf", url: "/pdfs/mca-sem2.pdf" },
  ],
  "3rd Semester": [
    { name: "MCA 3rd Sem Syllabus.pdf", url: "/pdfs/mca-sem3.pdf" },
  ],
  "4th Semester": [
    { name: "MCA 4th Sem Syllabus.pdf", url: "/pdfs/mca-sem4.pdf" },
  ],
  // "MCA Scheme": [
  //   { name: "Complete MCA Scheme.pdf", url: "/pdfs/mca-scheme.pdf" },
  // ],
};

export default function McaTabsSyllabus() {
  const [activeTab, setActiveTab] = useState("1st Semester");

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Navbar */}
      <NavbarNext />

      {/* Page Heading */}
      <div className="text-center py-25">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          MCA Syllabus & Schemes
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
