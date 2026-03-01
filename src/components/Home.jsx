import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import NotesSection from "./NotesSection"
import PopularNotes from "./PopularNotes"
import Footer from "./Footer"
import AddResourceCard from "./AddResourceCard";


function Home() {
  const navigate = useNavigate(); // Hook for navigation

  const goToLogin = () => {
    navigate("/admin-login"); // Redirect to admin login page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Navbar />
      <HeroSection />
      <NotesSection />
      <PopularNotes />
      <AddResourceCard/>
      <Footer />

      {/* <h2 style={{ textAlign: "center", marginTop: "100px"}}>Welcome to Home Page</h2>
      <button onClick={goToLogin}>Admin Login</button> */}
    </div>
  );
}

export default Home;
