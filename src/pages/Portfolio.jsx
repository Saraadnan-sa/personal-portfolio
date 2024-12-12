import React from "react";
import Header from "../components/Header";
import ProfileSummary from "../components/ProfileSummary";
import Education from "../components/Education";
import Experience from "../components/Experiance";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Portfolio = () => {
  return (
    <div className="container mt-5">
      <Header />
      <hr />
      <ProfileSummary />
      <hr />
      <Education />
      <hr />
      <Experience />
      <hr />
      <Skills />
      <hr />
      <Projects />
      <hr />
      <Footer />
    </div>
  );
};

export default Portfolio;
