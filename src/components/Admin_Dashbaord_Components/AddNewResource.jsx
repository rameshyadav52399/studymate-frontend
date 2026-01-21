// import {
//   FaPlus,
//   FaBook,
//   FaFileAlt,
//   FaLayerGroup,
//   FaCloudUploadAlt,
// } from "react-icons/fa";

// const AddNewResource = () => {

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 p-6">
//       <div className="w-full max-w-3xl">

//         {/* Header */}
//         <div className="flex items-center justify-center gap-3 mb-8">
//           <div className="bg-indigo-100 p-3 rounded-full shadow-sm">
//             <FaPlus className="text-indigo-600 text-2xl" />
//           </div>
//           <h2 className="text-3xl font-semibold text-gray-700">
//             Add New Resource
//           </h2>
//         </div>

//         {/* Card */}
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <form className="space-y-6">

//             {/* Semester */}
//             <div>
//               <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
//                 <FaLayerGroup className="text-blue-600" />
//                 Select Semester
//               </label>
//               <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none">
//                 <option value="">-- Select Semester --</option>
//                 <option>Semester 1</option>
//                 <option>Semester 2</option>
//                 <option>Semester 3</option>
//                 <option>Semester 4</option>
//                 <option>All Semesters</option>
//               </select>
//             </div>

//             {/* Resource Type */}
//             <div>
//               <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
//                 <FaBook className="text-purple-600" />
//                 Resource Type
//               </label>
//               <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none">
//                 <option value="">-- Select Resource Type --</option>
//                 <option>Syllabus</option>
//                 <option>Notes</option>
//                 <option>E-Book</option>
//                 <option>PYQs</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             {/* File Name */}
//             <div>
//               <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
//                 <FaFileAlt className="text-orange-600" />
//                 File Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter resource name"
//                 className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
//               />
//             </div>

//             {/* Upload Box */}
//             <div className="flex justify-center">
//               <label className="w-full cursor-pointer">
//                 <div className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-xl p-5 bg-indigo-50 hover:bg-indigo-100 transition relative group">

//                   {/* Hover Animation */}
//                   <div className="absolute inset-0 rounded-xl border-2 border-indigo-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>

//                   <FaCloudUploadAlt className="text-indigo-600 text-5xl mb-3" />
//                   <p className="text-gray-600 font-medium">
//                     Drag & drop files here
//                   </p>
//                   <p className="text-sm text-gray-500 mb-4">
//                     or click to upload
//                   </p>

//                   <span className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
//                     Choose File
//                   </span>

//                   <input type="file" className="hidden" />
//                 </div>
//               </label>
//             </div>

//             {/* Upload Button (Half Size & Centered) */}
//             <div className="flex justify-center pt-6">
//               <button
//                 type="submit"
//                 className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-emerald-700 transition shadow-md hover:cursor-pointer"
//               >
//                 <FaCloudUploadAlt />
//                 Upload
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AddNewResource;







// import { useState } from "react";
// import {
//   FaPlus,
//   FaBook,
//   FaFileAlt,
//   FaLayerGroup,
//   FaCloudUploadAlt,
// } from "react-icons/fa";

// const AddNewResource = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 p-6">
//       <div className="w-full max-w-3xl">

//         {/* Header */}
//         <div className="flex items-center justify-center gap-3 mb-8">
//           <div className="bg-indigo-100 p-3 rounded-full shadow-sm">
//             <FaPlus className="text-indigo-600 text-2xl" />
//           </div>
//           <h2 className="text-3xl font-semibold text-gray-700">
//             Add New Resource
//           </h2>
//         </div>

//         {/* Card */}
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <form className="space-y-6">

//             {/* Semester */}
//             <div>
//               <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
//                 <FaLayerGroup className="text-blue-600" />
//                 Select Semester
//               </label>
//               <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none">
//                 <option value="">-- Select Semester --</option>
//                 <option>Semester 1</option>
//                 <option>Semester 2</option>
//                 <option>Semester 3</option>
//                 <option>Semester 4</option>
//                 <option>All Semesters</option>
//               </select>
//             </div>

//             {/* Resource Type */}
//             <div>
//               <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
//                 <FaBook className="text-purple-600" />
//                 Resource Type
//               </label>
//               <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none">
//                 <option value="">-- Select Resource Type --</option>
//                 <option>Syllabus</option>
//                 <option>Notes</option>
//                 <option>E-Book</option>
//                 <option>PYQs</option>
//                 <option>Other</option>
//               </select>
//             </div>

            
//             {/* Upload Box */}
//             <div className="flex justify-center">
//               <label className="w-full cursor-pointer">
//                 <div className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-xl p-5 bg-indigo-50 hover:bg-indigo-100 transition relative group">

//                   <div className="absolute inset-0 rounded-xl border-2 border-indigo-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>

//                   <FaCloudUploadAlt className="text-indigo-600 text-5xl mb-3" />
//                   <p className="text-gray-600 font-medium">
//                     Drag & drop files here
//                   </p>
//                   <p className="text-sm text-gray-500 mb-4">
//                     or click to upload
//                   </p>

//                   <span className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
//                     Choose File
//                   </span>

//                   {/* File Input */}
//                   <input
//                     type="file"
//                     className="hidden"
//                     onChange={(e) => setSelectedFile(e.target.files[0])}
//                   />

//                   {/* Selected File Name */}
//                   {selectedFile && (
//                     <p className="mt-3 text-sm text-gray-700 font-medium">
//                       📄 {selectedFile.name}
//                     </p>
//                   )}
//                 </div>
//               </label>
//             </div>

//             {/* Upload Button */}
//             <div className="flex justify-center pt-6">
//               <button
//                 type="submit"
//                 className="flex items-center gap-2 bg-emerald-600 text-white px-20 py-3 rounded-full text-base font-semibold hover:bg-emerald-700 transition shadow-md hover:cursor-pointer"
//               >
//                 <FaCloudUploadAlt />
//                 Upload
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AddNewResource;






















// import { useState } from "react";
// import {
//   FaPlus,
//   FaBook,
//   FaFileAlt,
//   FaLayerGroup,
//   FaCloudUploadAlt,
// } from "react-icons/fa";

// const AddNewResource = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [resourceType, setResourceType] = useState("");

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 p-6">
//       <div className="w-full max-w-3xl">

//         {/* Header */}
//         <div className="flex items-center justify-center gap-3 mb-8">
//           <div className="bg-indigo-100 p-3 rounded-full shadow-sm">
//             <FaPlus className="text-indigo-600 text-2xl" />
//           </div>
//           <h2 className="text-3xl font-semibold text-gray-700">
//             Add New Resource
//           </h2>
//         </div>

//         {/* Card */}
//         <div className="bg-white rounded-2xl shadow-xl p-8">
//           <form className="space-y-6">

//             {/* Semester */}
//             <div>
//               <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
//                 <FaLayerGroup className="text-blue-600" />
//                 Select Semester
//               </label>
//               <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none">
//                 <option value="">-- Select Semester --</option>
//                 <option>Semester 1</option>
//                 <option>Semester 2</option>
//                 <option>Semester 3</option>
//                 <option>Semester 4</option>
//                 <option>All Semesters</option>
//               </select>
//             </div>

//             {/* Resource Type */}
//             <div>
//               <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
//                 <FaBook className="text-purple-600" />
//                 Resource Type
//               </label>
//               <select
//                 className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
//                 value={resourceType}
//                 onChange={(e) => setResourceType(e.target.value)}
//               >
//                 <option value="">-- Select Resource Type --</option>
//                 <option value="Syllabus">Syllabus</option>
//                 <option value="Notes">Notes</option>
//                 <option value="E-Book">E-Book</option>
//                 <option value="PYQs">PYQs</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>

//             {/* 🔹 PYQs Extra Fields */}
//             {resourceType === "PYQs" && (
//               <>
//                 {/* PYQ Year */}
//                 <div>
//                   <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
//                     <FaFileAlt className="text-indigo-600" />
//                     Select PYQ Year
//                   </label>
//                   <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none">
//                     <option value="">-- Select Year --</option>
//                     <option>2021</option>
//                     <option>2022</option>
//                     <option>2023</option>
//                     <option>2024</option>
//                     <option>2025</option>
//                     <option>2026</option>
//                   </select>
//                 </div>

//                 {/* Subject Name */}
//                 <div>
//                   <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
//                     <FaFileAlt className="text-orange-600" />
//                     Select Subject
//                   </label>
//                   <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none">
//                     <option value="">-- Select Subject --</option>
//                     <option>C++ & Data Structure</option>
//                     <option>ADBMS</option>
//                     <option>Software Engineering</option>
//                     <option> Mathematical Foundation of CS</option>
//                     <option>Fundamentals of Computer Science</option>
//                   </select>
//                 </div>
//               </>
//             )}

//             {/* Upload Box */}
//             <div className="flex justify-center">
//               <label className="w-full cursor-pointer">
//                 <div className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-xl p-5 bg-indigo-50 hover:bg-indigo-100 transition relative group">

//                   <div className="absolute inset-0 rounded-xl border-2 border-indigo-400 opacity-0 group-hover:opacity-100 animate-pulse"></div>

//                   <FaCloudUploadAlt className="text-indigo-600 text-5xl mb-3" />
//                   <p className="text-gray-600 font-medium">
//                     Drag & drop files here
//                   </p>
//                   <p className="text-sm text-gray-500 mb-4">
//                     or click to upload
//                   </p>

//                   <span className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
//                     Choose File
//                   </span>

//                   <input
//                     type="file"
//                     className="hidden"
//                     onChange={(e) => setSelectedFile(e.target.files[0])}
//                   />

//                   {selectedFile && (
//                     <p className="mt-3 text-sm text-gray-700 font-medium">
//                       📄 {selectedFile.name}
//                     </p>
//                   )}
//                 </div>
//               </label>
//             </div>

//             {/* Upload Button */}
//             <div className="flex justify-center pt-6">
//               <button
//                 type="submit"
//                 className="flex items-center gap-2 bg-emerald-600 text-white px-20 py-3 rounded-full text-base font-semibold hover:bg-emerald-700 transition shadow-md hover:cursor-pointer"
//               >
//                 <FaCloudUploadAlt />
//                 Upload
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AddNewResource;






import { useState } from "react";
import {
  FaPlus,
  FaBook,
  FaFileAlt,
  FaLayerGroup,
  FaCloudUploadAlt,
} from "react-icons/fa";

const semesterSubjects = {
  "Semester 1": [

"C++ and Data Structure",
"Database Management System",
"Software Engineering",
"Mathematical Foundation of CS",
"Fundamentals of Computer Science",
  ],
  "Semester 2": [
    "Data Structures",
    "ADBMS",
    "Operating Systems",
    "Discrete Mathematics",
    "Java Programming",
  ],
  "Semester 3": [
    "Software Engineering",
    "Computer Networks",
    "Web Technologies",
    "Design & Analysis of Algorithms",
    "Python Programming",
  ],
  "Semester 4": [
    "Machine Learning",
    "Artificial Intelligence",
    "Cloud Computing",
    "Big Data Analytics",
    "Information Security",
  ],
};

const AddNewResource = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [resourceType, setResourceType] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-50 p-6">
      <div className="w-full max-w-3xl">

        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="bg-indigo-100 p-3 rounded-full shadow-sm">
            <FaPlus className="text-indigo-600 text-2xl" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-700">
            Add New Resource
          </h2>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form className="space-y-6">

            {/* Semester */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <FaLayerGroup className="text-blue-600" />
                Select Semester
              </label>
              <select
                value={semester}
                onChange={(e) => {
                  setSemester(e.target.value);
                  setSubject("");
                }}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              >
                <option value="">-- Select Semester --</option>
                <option>Semester 1</option>
                <option>Semester 2</option>
                <option>Semester 3</option>
                <option>Semester 4</option>
                <option>All Semester</option>
              </select>
            </div>

            {/* Resource Type */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <FaBook className="text-purple-600" />
                Resource Type
              </label>
              <select
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-400 outline-none"
                value={resourceType}
                onChange={(e) => setResourceType(e.target.value)}
              >
                <option value="">-- Select Resource Type --</option>
                <option value="Syllabus">Syllabus</option>
                <option value="Notes">Notes</option>
                <option value="E-Book">E-Book</option>
                <option value="PYQs">PYQs</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* PYQs Extra Fields */}
            {resourceType === "PYQs" && (
              <>
                {/* Year */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <FaFileAlt className="text-indigo-600" />
                    Select PYQ Year
                  </label>
                  <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none">
                    <option value="">-- Select Year --</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                   </select>
                </div>

                {/* Subject */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <FaFileAlt className="text-orange-600" />
                    Select Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                    disabled={!semester}
                  >
                    <option value="">-- Select Subject --</option>
                    {semesterSubjects[semester]?.map((sub, index) => (
                      <option key={index}>{sub}</option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {/* -------------Notes----------- */}
            {/* Notes Extra Fields */}
            {resourceType === "Notes" && (
              <>
               
                {/* Subject */}
                <div>
                  <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                    <FaFileAlt className="text-orange-600" />
                    Select Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
                    disabled={!semester}
                  >
                    <option value="">-- Select Subject --</option>
                    {semesterSubjects[semester]?.map((sub, index) => (
                      <option key={index}>{sub}</option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {/* ------------------- */}


































            {/* Upload Box */}
            <div className="flex justify-center">
              <label className="w-full cursor-pointer">
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-300 rounded-xl p-5 bg-indigo-50 hover:bg-indigo-100 transition relative group">
                  <FaCloudUploadAlt className="text-indigo-600 text-5xl mb-3" />
                  <p className="text-gray-600 font-medium">
                    Drag & drop files here
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    or click to upload
                  </p>

                  <span className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition">
                    Choose File
                  </span>

                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setSelectedFile(e.target.files[0])}
                  />

                  {selectedFile && (
                    <p className="mt-3 text-sm text-gray-700 font-medium">
                      📄 {selectedFile.name}
                    </p>
                  )}
                </div>
              </label>
            </div>

            {/* Upload Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="flex items-center gap-2 bg-emerald-600 text-white px-20 py-3 rounded-full font-semibold hover:bg-emerald-700 transition shadow-md"
              >
                <FaCloudUploadAlt />
                Upload
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default AddNewResource;
