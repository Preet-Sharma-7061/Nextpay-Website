import React from "react";

function PersonalLoan() {
  return (
    <main className="w-full md:h-[35em] md:py-12 bg-[#f2f2f2]">
      <section className="max-w-7xl mx-auto h-full flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-[50%] w-full h-full lg:rounded-md">
          <img
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29uYWwlMjBsb2FufGVufDB8fDB8fHww"
            alt=""
            className="w-full h-full object-cover md:rounded-md"
          />
        </div>
        <div className="md:w-[50%] w-full h-full flex items-start flex-col justify-center lg:px-10 p-2">
          <div
            className="lg:w-[80%] md:space-y-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3>LOAN PROVIDING COMPANY</h3>
            <h2 className="text-4xl font-semibold">Personal Loan</h2>
            <p>
              A Personal Loan from NextPay helps you handle any important moment
              in your life—whether it is a wedding, travel plan, medical need,
              or a sudden expense. Our process is simple, approval is quick, and
              you get flexible EMIs that perfectly fit your budget. With
              NextPay, you can get the financial support you need without stress
              or long waiting times.
            </p>

            <button className="bg-[#006fae] w-[10em] py-2 text-white font-semibold rounded-2xl cursor-pointer">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PersonalLoan;
