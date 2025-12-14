import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage/Homepage";
import Loanpage from "./Components/LoanPage/Loanpage";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {

  
  return (
    <main className="w-full h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/loan-page" element={<Loanpage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
