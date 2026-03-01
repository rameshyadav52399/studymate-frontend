import React from "react";
import { ClipboardList, FileText, Layers, BookOpen } from "lucide-react";

const ResourceDashboard = () => {
  const resources = [
    {
      title: "PYQs",
      icon: <ClipboardList size={34} />,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Notes",
      icon: <FileText size={34} />,
      gradient: "from-emerald-500 to-green-600",
    },
   
    {
      title: "Books",
      icon: <BookOpen size={34} />,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
      <div className="grid grid-cols-3 gap-6 w-full max-w-2xl">
        {resources.map((item, index) => (
          <div
            key={index}
            className={`
              flex items-center gap-4 p-6 rounded-2xl cursor-pointer
              bg-gradient-to-r ${item.gradient} text-white
              shadow-lg transition-all duration-300
              hover:scale-105 hover:shadow-2xl
              active:scale-95
            `}
          >
            <div className="p-3 bg-white/20 rounded-full">
              {item.icon}
            </div>
            <span className="text-lg font-semibold tracking-wide">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceDashboard;
