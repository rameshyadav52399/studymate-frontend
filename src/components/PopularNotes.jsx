import React from "react";
import javaBookImg from "../assets/java-book-cover.png"; 
import pythonBookImg from "../assets/python-book-cover.png"; 
import cppsBookImg from "../assets/cpp-book-cover.png"; 
import dsaBookImg from "../assets/dsa-book-cover.png"; 

export default function PopularNotes() {
  const notes = [
    {
      title: "Java",
      img: javaBookImg,
    },
    {
      title: "DBMS",
      img: pythonBookImg,
    },
    {
      title: "Operating System",
      img: cppsBookImg,
    },
    {
      title: "Computer Networks",
      img: dsaBookImg,
    },
  ];

  return (
    <section className="bg-blue-50 py-20 px-4 md:px-12 pb-30">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
         Popular<span className="text-green-700"> Notes</span>        
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
        {notes.map((note, index) => (
          <div
            key={index}
            className="p-2 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={note.img}
              alt={note.title}
              className="w-full h-60 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
