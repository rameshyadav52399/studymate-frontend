import React from "react";
import { FileText } from "lucide-react"; // icon library
import NavbarNext from "./NavbarNext";


const subjects = [
  {
    name: "C++ and Data Structure",
    color: "text-red-600",
    papers: [
      { year: 2022, link: "/pdfs/english-2022.pdf" },
      { year: 2021, link: "/pdfs/english-2021.pdf" },
      { year: 2020, link: "/pdfs/english-2020.pdf" },
      { year: 2019, link: "/pdfs/english-2019.pdf" },
      { year: 2018, link: "/pdfs/english-2018.pdf" },
    ],
  },
  {
    name: "Database Management System",
    color: "text-blue-600",
    papers: [
      { year: 2022, link: "/pdfs/math-2022.pdf" },
      { year: 2021, link: "/pdfs/math-2021.pdf" },
      { year: 2020, link: "/pdfs/math-2020.pdf" },
      { year: 2019, link: "/pdfs/math-2019.pdf" },
      { year: 2018, link: "/pdfs/math-2018.pdf" },
    ],
  },
  {
    name: "Software Engineering",
    color: "text-emerald-600",
    papers: [
      { year: 2022, link: "/pdfs/chemistry-2022.pdf" },
      { year: 2021, link: "/pdfs/chemistry-2021.pdf" },
      { year: 2020, link: "/pdfs/chemistry-2020.pdf" },
      { year: 2019, link: "/pdfs/chemistry-2019.pdf" },
      { year: 2018, link: "/pdfs/chemistry-2018.pdf" },
    ],
  },
  {
    name: "Mathematical Foundation of CS",
    color: "text-indigo-600",
    papers: [
      { year: 2022, link: "/pdfs/bee-2022.pdf" },
      { year: 2021, link: "/pdfs/bee-2021.pdf" },
      { year: 2020, link: "/pdfs/bee-2020.pdf" },
      { year: 2019, link: "/pdfs/bee-2019.pdf" },
      { year: 2018, link: "/pdfs/bee-2018.pdf" },
    ],
  },
  {
    name: "Fundamentals of Computer Science",
    color: "text-amber-600",
    papers: [
      { year: 2022, link: "/pdfs/bio-2022.pdf" },
      { year: 2021, link: "/pdfs/bio-2021.pdf" },
      { year: 2020, link: "/pdfs/bio-2020.pdf" },
      { year: 2019, link: "/pdfs/bio-2019.pdf" },
      { year: 2018, link: "/pdfs/bio-2018.pdf" },
    ],
  },
  // {
  //   name: "EGD",
  //   color: "text-amber-600",
  //   papers: [
  //     { year: 2022, link: "/pdfs/egd-2022.pdf" },
  //     { year: 2021, link: "/pdfs/egd-2021.pdf" },
  //     { year: 2020, link: "/pdfs/egd-2020.pdf" },
  //     { year: 2019, link: "/pdfs/egd-2019.pdf" },
  //     { year: 2018, link: "/pdfs/egd-2018.pdf" },
  //   ],
  // },
];

export default function Papers() {
  return (
    <section className="py-25 bg-gray-50 min-h-screen">
      <NavbarNext/>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        MCA First Semester – Previous Papers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
        {subjects.map((subject, i) => (
          <div
            key={i}
            className="bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300 rounded-xl p-5"
          >
            <h3
              className={`text-xl font-semibold mb-4 text-center border-b pb-2 ${subject.color}`}
            >
              {subject.name}
            </h3>

            <ul className="space-y-3">
              {subject.papers.map((paper, index) => (
                <li key={index} className="flex items-center">
                  <FileText className={`w-5 h-5 mr-2 ${subject.color}`} />
                  <a
                    href={paper.link}
                    target="_self"
                    className={`text-sm ${subject.color} font-medium hover:underline hover:opacity-80`}
                  >
                    {subject.name} {paper.year}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
