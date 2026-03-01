import React, { useState, useEffect } from "react";
import { Download, Search } from "lucide-react";
import { FaFilePdf } from "react-icons/fa";
import NavbarNext from "./NavbarNext";

export default function Ebooks() {
  const [searchTerm, setSearchTerm] = useState("");
  const [semester, setSemester] = useState("All");
  const [limit, setLimit] = useState("All");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const semParam = semester === "All" ? "all" : semester;
        const res = await fetch(`http://localhost:5000/e-books/${semParam}`);
        const data = await res.json();

        if (!Array.isArray(data)) {
          setBooks([]);
          return;
        }

        // ✅ FIX: convert semester to Number
        const formattedData = data.map((item) => ({
          name: item.name,
          pdf: item.url,
          sem: Number(item.semester),
        }));

        setBooks(formattedData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchBooks();
  }, [semester]);

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
