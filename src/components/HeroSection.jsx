// import React, { useEffect, useState } from "react";
// import heroImg from "../assets/hero.png"; // make sure your image path is correct

// export default function HeroSection() {
//   const phrases = [
//     "Pradhan Mantri Matru Vandana Yojana",
//     "Empowering Mothers Nationwide",
//     "Promoting Maternal Wellbeing",
//   ];

//   const TYPING_SPEED = 80;
//   const DELETING_SPEED = 40;
//   const PAUSE = 1500;

//   const [text, setText] = useState("");
//   const [phraseIndex, setPhraseIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     let timeoutId;
//     const currentPhrase = phrases[phraseIndex % phrases.length];

//     if (!isDeleting && text === currentPhrase) {
//       timeoutId = setTimeout(() => setIsDeleting(true), PAUSE);
//     } else if (isDeleting && text === "") {
//       setIsDeleting(false);
//       setPhraseIndex((prev) => (prev + 1) % phrases.length);
//     } else {
//       timeoutId = setTimeout(() => {
//         const nextText = isDeleting
//           ? currentPhrase.substring(0, text.length - 1)
//           : currentPhrase.substring(0, text.length + 1);
//         setText(nextText);
//       }, isDeleting ? DELETING_SPEED : TYPING_SPEED);
//     }

//     return () => clearTimeout(timeoutId);
//   }, [text, isDeleting, phraseIndex, phrases]);

//   return (
//     <section className="w-full h-screen flex items-center bg-gradient-to-b from-white via-blue-50 to-teal-100">
//       <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">

//         {/* Left Content */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
//             <span>{text}</span>
//             <span className="inline-block w-1 h-8 align-middle bg-gray-900 ml-2 animate-pulse" />
//           </h1>

//           <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:bg-blue-600 transition">
//               Track Status
//             </button>
//             <button className="bg-indigo-900 text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:bg-indigo-950 transition">
//               Lodge / Track Grievances
//             </button>
//             <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:bg-green-700 transition">
//               PMMVY App
//             </button>
//             <button className="bg-yellow-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:bg-yellow-600 transition">
//               Aadhaar FaceRd
//             </button>
//             <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:bg-orange-600 transition">
//               Resources For Enrolment Drive
//             </button>
//           </div>
//         </div>

//         {/* Right Side Image */}
//         <div className="flex-1 flex justify-center md:justify-end">
//           <img
//             src={heroImg}
//             alt="Hero"
//             className="w-72 md:w-[430px] object-cover rounded-2xl shadow-xl"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import heroImg from "../assets/hero.png"; // ✅ make sure your image exists in src/assets/

export default function HeroSection() {
  const phrases = [
    "Learn, Share, Grow, Together.",

    "All your MCA resources — in one place.",

    "Empowering students through organized learning.",
  ];

  // Typing animation speed constants
  const TYPING_SPEED = 80;
  const DELETING_SPEED = 40;
  const PAUSE = 1500;

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;
    const currentPhrase = phrases[phraseIndex % phrases.length];

    if (!isDeleting && text === currentPhrase) {
      timeoutId = setTimeout(() => setIsDeleting(true), PAUSE);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timeoutId = setTimeout(
        () => {
          const nextText = isDeleting
            ? currentPhrase.substring(0, text.length - 1)
            : currentPhrase.substring(0, text.length + 1);
          setText(nextText);
        },
        isDeleting ? DELETING_SPEED : TYPING_SPEED
      );
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, phraseIndex, phrases]);

  return (
    // ✅ Full width and full height of screen (no side white space)
    // ✅ Left-to-right gradient background for modern look
    <section className="w-screen min-h-screen flex items-center bg-linear-to-r from-white via-[#e8f6f6] to-[#c9efea] overflow-hidden py-0">
      {/* ✅ Removed max-w-7xl and mx-auto to stretch fully across screen */}
      {/* ✅ Removed extra padding that caused white gaps on sides */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 p-0">
        {/* ✅ Left Content (starts close to left edge but with small safe padding) */}
        <div className="flex-1 flex flex-col justify-center pl-6 md:pl-16 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            <span>{text}</span>
            {/* Blinking cursor */}
            <span className="inline-block w-1 h-8 align-middle bg-gray-900 ml-2 animate-pulse" />
          </h1>
          
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
              Let's go->>
            </button>
             {/*
            <button className="bg-indigo-900 text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-indigo-950 transition">
              Lodge / Track Grievances
            </button>
            <button className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-green-700 transition">
              PMMVY App
            </button>
            <button className="bg-yellow-500 text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-yellow-600 transition">
              Aadhaar FaceRd
            </button>
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md font-semibold shadow hover:bg-orange-600 transition">
              Resources For Enrolment Drive
            </button> */}
          </div>
        </div>

        {/* ✅ Right Side Image (auto scales, aligned to right edge) */}
        <div className="flex-1 flex justify-center md:justify-end pr-40">
          <img
            src={heroImg}
            alt="Hero"
            className="w-72 md:w-[500px] object-cover rounded-2xl p"
          />
        </div>
      </div>
    </section>
  );
}
