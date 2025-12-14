import React from "react";
import Sliderpage from "./Sliderpage";
import LoanService from "./LoanService";
import LoanStep from "./LoanStep";
import Aboutpage from "./Aboutpage";
import LoanOptions from "./LoanOptions";
import Testimonial from "./Testimonial";
import ApplyProcesspage from "./ApplyProcessPage";

function Homepage() {
  return (
    <main className="w-full h-full">
      <Sliderpage />
      <LoanService />
      <LoanStep />
      <Aboutpage />
      <LoanOptions />
      <Testimonial/>
      <ApplyProcesspage />
    </main>
  );
}

export default Homepage;
