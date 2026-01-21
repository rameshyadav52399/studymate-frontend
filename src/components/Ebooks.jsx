// import React, { useState } from "react";
// import { Download, Eye, Search } from "lucide-react";
// import NavbarNext from "./NavbarNext";


// export default function Ebooks() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const books = [
//     { name: "Java Programming Fundamentals", pdf: "/ebooks/java-fundamentals.pdf" },
//     { name: "C++ Complete Guide", pdf: "/ebooks/cpp-guide.pdf" },
//     { name: "Data Structures & Algorithms", pdf: "/ebooks/dsa.pdf" },
//     { name: "Web Development with React", pdf: "/ebooks/react-dev.pdf" },
//     { name: "Database Management System", pdf: "/ebooks/dbms.pdf" },
//   ];

//   // Filter books based on search input
//   const filteredBooks = books.filter((book) =>
//     book.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-10 px-4 md:px-16">
//         <NavbarNext/>
//       {/* Header */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 mt-10">
//         MCA E-Books Library
//       </h1>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-10">
//         <div className="relative w-full md:w-1/2">
//           <Search className="absolute left-3 top-3 text-gray-400" size={20} />
//           <input
//             type="text"
//             placeholder="Search e-book by title..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
//           />
//         </div>
//       </div>

//       {/* Table Container */}
//       <div className="overflow-x-auto">
//         <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
//           <thead className="bg-blue-600 text-white">
//             <tr>
//               <th className="py-3 px-4 text-left text-lg font-semibold">Sr. No</th>
//               <th className="py-3 px-4 text-left text-lg font-semibold">Book Name</th>
//               <th className="py-3 px-4 text-center text-lg font-semibold">View</th>
//               <th className="py-3 px-4 text-center text-lg font-semibold">Download</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredBooks.length > 0 ? (
//               filteredBooks.map((book, index) => (
//                 <tr
//                   key={index}
//                   className="border-t hover:bg-gray-50 transition duration-200"
//                 >
//                   <td className="py-3 px-4 text-gray-700 font-medium">{index + 1}</td>
//                   <td className="py-3 px-4 text-gray-700">{book.name}</td>

//                   {/* View Icon */}
//                   <td className="py-3 px-4 text-center">
//                     <a
//                       href={book.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center justify-center bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
//                     >
//                       <Eye size={20} />
//                     </a>
//                   </td>

//                   {/* Download Icon */}
//                   <td className="py-3 px-4 text-center">
//                     <a
//                       href={book.pdf}
//                       download
//                       className="inline-flex items-center justify-center bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
//                     >
//                       <Download size={20} />
//                     </a>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan="4"
//                   className="text-center py-6 text-gray-500 text-lg font-medium"
//                 >
//                   No e-books found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Download, Search } from "lucide-react";
import { FaFilePdf } from "react-icons/fa";
import NavbarNext from "./NavbarNext";

export default function Ebooks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [semester, setSemester] = useState("All");
  const [limit, setLimit] = useState("All");

  const books = [
    { name: "MCA 1st Sem Java Programming.pdf", pdf: "/ebooks/sem1-java.pdf", sem: 1 },
    { name: "MCA 1st Sem C Programming.pdf", pdf: "/ebooks/sem1-c.pdf", sem: 1 },

    { name: "MCA 2nd Sem DBMS.pdf", pdf: "/ebooks/sem2-dbms.pdf", sem: 2 },
    { name: "MCA 2nd Sem OS.pdf", pdf: "/ebooks/sem2-os.pdf", sem: 2 },

    { name: "MCA 3rd Sem Software Engineering.pdf", pdf: "/ebooks/sem3-se.pdf", sem: 3 },
    { name: "MCA 3rd Sem CN.pdf", pdf: "/ebooks/sem3-cn.pdf", sem: 3 },

    { name: "MCA 4th Sem Data Science.pdf", pdf: "/ebooks/sem4-ds.pdf", sem: 4 },
    { name: "MCA 4th Sem AI.pdf", pdf: "/ebooks/sem4-ai.pdf", sem: 4 },
  ];

  // 🔹 Filter logic
  let filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (semester !== "All") {
    filteredBooks = filteredBooks.filter(
      (book) => book.sem === Number(semester)
    );
  }

  if (limit !== "All") {
    filteredBooks = filteredBooks.slice(0, Number(limit));
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 md:px-16 py-6">
      <NavbarNext />

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mt-20">
        MCA E-Books Library
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mt-6 mb-4">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search e-book..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-between mb-6">
        {/* Semester Filter */}
        <select
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-400"
        >
          <option value="All">All Semesters</option>
          <option value="1">Semester 1</option>
          <option value="2">Semester 2</option>
          <option value="3">Semester 3</option>
          <option value="4">Semester 4</option>
        </select>

        {/* Show Entries */}
        <select
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          className="border rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-400"
        >
          <option value="All">Show All</option>
          <option value="10">Show 10</option>
          <option value="50">Show 50</option>
          <option value="100">Show 100</option>
        </select>
      </div>

      {/* Book List */}
      <div className="max-w-6xl mx-auto bg-white border rounded-lg shadow-sm divide-y">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition"
            >
              {/* PDF Name */}
              <a
                href={book.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-800 font-medium hover:underline"
              >
                <FaFilePdf className="text-red-600 text-xl" />
                {book.name}
              </a>

              {/* Download */}
              <a
                href={book.pdf}
                download
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition shadow"
              >
                <Download size={18} />
                Download
              </a>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500 font-medium">
            No e-books found.
          </div>
        )}
      </div>
    </div>
  );
}
