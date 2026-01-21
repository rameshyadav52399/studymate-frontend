import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
import Syllabus from "./components/Syllabus";
import Ebooks from "./components/Ebooks";
import SemesterCards from "./components/SemesterCards";
import PreviousePapers from "./components/PreviousePapers";
import AdminDashboard from "./components/AdminDashboard"; // create a simple placeholder
import AddNewResource from "./components/Admin_Dashbaord_Components/AddNewResource";
import Notes from "./components/Notes";
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
        <Route path="/notes" element={<SemesterCards />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-resource" element={<AddNewResource />} />
        <Route path="/notess" element={<Notes />} />

      </Routes>
    </Router>
      </>
  );
}

export default App;
