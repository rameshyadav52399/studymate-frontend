
// Semester card for PYQS
import React from "react";
import NavbarNext from "./NavbarNext";
import { useNavigate } from "react-router-dom";

const semesters = [
  { id: 1, title: "1st Semester", color: "bg-indigo-500" },
  { id: 2, title: "2nd Semester", color: "bg-[#fe7459]" },
  { id: 3, title: "3rd Semester", color: "bg-emerald-500" },
  { id: 4, title: "4th Semester", color: "bg-amber-500" },
];

// subjects you want to pass
const first_sem_subjects = [
  "C++ and DS",
  "ADBMS",
  "Software Engineering",
  "Mathematical Foundation of CS",
  "Fundamentals of CS",
];

const second_sem_subjects = [
  "Programming with Java",
  "Computer Network",
  "Artificial Intelligence",
  "OS with Linux",
  "ERP",
];

const third_sem_subjects = [
  "Computer Graphics",
  "Cryptography and Network Security",
  "Data Science",
  "Neural Network",
  "Internet of Things",
];

const fourth_sem_subjects = [
  "Cloud Computing",
  "Big Data Analytics",
  ];

export default function SemesterCardsForPYQs() {
  const navigate = useNavigate();

  const handleExplore = (semesterId) => {
    let subjects = [];

    if (semesterId === 1) subjects = first_sem_subjects;
    else if (semesterId === 2) subjects = second_sem_subjects;
    else if (semesterId === 3) subjects = third_sem_subjects;
    else if (semesterId === 4) subjects = fourth_sem_subjects;

    navigate("/pyqs-dashboard", {
      state: {
        semester: semesterId,
        subjects: subjects,
      },
    });
  };

  return (
    <section className="py-25 bg-gray-50 min-h-screen">
      <NavbarNext />

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-15">
        Select a Semester
        <div className="w-48 h-1 bg-gray-400 mx-auto mt-4 rounded-full"></div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12">
        {semesters.map((sem) => (
          <div
            key={sem.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 p-8 flex flex-col items-center text-center group"
          >
            {/* Number */}
            <div
              className={`${sem.color} w-20 h-20 flex items-center justify-center rounded-full text-white text-3xl font-bold shadow-md mb-6 transform transition-transform duration-300 group-hover:scale-125`}
            >
              {sem.id}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-8">
              {sem.title}
            </h3>

            {/* Button */}
            <button
              className={`${sem.color} text-white px-8 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105 w-44 cursor-pointer`}
              onClick={() => handleExplore(sem.id)}
            >
              Explore PYQs
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
