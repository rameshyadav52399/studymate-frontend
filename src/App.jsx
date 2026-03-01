import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
import Syllabus from "./components/Syllabus";
import Ebooks from "./components/Ebooks";
import SemesterCards from "./components/SemesterCardsForNotes";
import PreviousePapers from "./components/PreviousePapers";
import AdminDashboard from "./components/AdminDashboard"; 
import Notes from "./components/NotesDashboard";
import StudentDashboard from "./components/StudentDashboard";
import ResourceDashboard from "./components/ResourceDashboard";
import NotesDahbaord from "./components/NotesDashboard";
import SemesterCardsForPYQs from "./components/SemesterCardsForPYQs";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/e-books" element={<Ebooks />} />
          <Route path="/previous-papers" element={<SemesterCards />} />
          <Route path="/first-sem-papers" element={<PreviousePapers />} />
          {/* <Route path="/first-sem-notes" element={<NotesDas />} /> */}
          <Route path="/notes" element={<SemesterCards />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/notess" element={<Notes />} />
          <Route path="/resource-dashboard" element={<ResourceDashboard/>} />
          <Route path="/my-syllabus" element={<Syllabus/>} />
          <Route path="/notes-dashboard" element={<NotesDahbaord/>} />
          <Route path="/pyqs" element={<SemesterCardsForPYQs/>} />
          <Route path="/pyqs-dashboard" element={<PreviousePapers/>} />
          <Route path="/student-dashboard" element={<StudentDashboard/>} />
     
        </Routes>
      </Router>

    </>
  );
}

export default App;
