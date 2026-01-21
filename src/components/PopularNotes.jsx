// import React from "react";

// export default function PopularNotes() {
//   const notes = [
//     {
//       title: "Data Structures & Algorithms (DSA)",
//       img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//       desc: "Master coding logic and algorithm building with our handwritten DSA notes.",
//     },
//     {
//       title: "Database Management System (DBMS)",
//       img: "https://cdn-icons-png.flaticon.com/512/2920/2920345.png",
//       desc: "Learn SQL, normalization, and ER diagrams — everything about DBMS.",
//     },
//     {
//       title: "Operating System (OS)",
//       img: "https://cdn-icons-png.flaticon.com/512/2721/2721296.png",
//       desc: "Understand processes, scheduling, and memory management with clarity.",
//     },
//     {
//       title: "Computer Networks (CN)",
//       img: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
//       desc: "Grasp all networking concepts — layers, protocols, and topologies simplified.",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-12 px-6 md:px-16">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
//         🌟 Popular Notes
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {notes.map((note, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//           >
//             <img
//               src={note.img}
//               alt={note.title}
//               className="w-full h-40 object-contain bg-gray-100 p-4"
//             />
//             <div className="p-5">
//               <h3 className="text-lg font-semibold text-gray-800 mb-2">{note.title}</h3>
//               <p className="text-gray-600 text-sm mb-4">{note.desc}</p>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition">
//                 View Notes
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import React from "react";

// export default function PopularNotes() {
//   const notes = [
//     {
//       title: "DSA",
//       img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
//     },
//     {
//       title: "DBMS",
//       img: "https://cdn-icons-png.flaticon.com/512/2920/2920345.png",
//     },
//     {
//       title: "Operating System",
//       img: "https://cdn-icons-png.flaticon.com/512/2721/2721296.png",
//     },
//     {
//       title: "Computer Networks",
//       img: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
//     },
//   ];

//   return (
//     <section className="bg-gray-50 py-12 px-6 md:px-16">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
//         🌟 Popular Notes
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {notes.map((note, index) => (
//           <div
//             key={index}
//             className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
//           >
//             <img
//               src={note.img}
//               alt={note.title}
//               className="w-full h-60 object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
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
