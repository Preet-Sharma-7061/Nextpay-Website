import React from "react";

function InstantLoan() {
  return (
    <main className="w-full md:h-[35em] md:py-12 bg-[#f2f2f2]">
      <section className="max-w-7xl mx-auto h-full flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-[50%] w-full h-full lg:rounded-md">
          <img
            src="https://plus.unsplash.com/premium_photo-1728201191996-4d345403b461?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8SW5zdGFudCUyMExvYW58ZW58MHx8MHx8fDA%3D"
            alt=""
            className="w-full h-full object-cover md:rounded-md"
            style={{
              clipPath:
                "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
            }}
          />
        </div>
        <div className="md:w-[50%] w-full h-full flex items-start flex-col justify-center lg:px-10 p-2">
          <div
            className="lg:w-[80%] md:space-y-2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3>LOAN PROVIDING COMPANY</h3>
            <h2 className="text-4xl font-semibold">Instant Loan</h2>
            <p>
              When you need money urgently, NextPay provides fast and reliable
              Instant Loans. With minimal documents, quick verification, and
              instant disbursal, you receive funds directly in your bank account
              within minutes. Perfect for emergencies or unexpected expenses —
              simple, fast, and stress-free.
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

export default InstantLoan;
