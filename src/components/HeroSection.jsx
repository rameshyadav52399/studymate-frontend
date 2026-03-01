import React, { useEffect, useState } from "react";
import heroImg from "../assets/boyImg.png"; 

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
    
    <section className="w-screen min-h-screen flex items-center bg-linear-to-r from-white via-[#e8f6f6] to-[#c9efea] overflow-hidden py-0">

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 p-0">
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
                      </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end pr-30">
          <img
            src={heroImg}
            alt="Hero"
            className="w-500 md:w-[1500px] object-cover rounded-2xl p"
          />
        </div>
      </div>
    </section>
  );
}
