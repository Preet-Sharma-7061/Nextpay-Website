import React from "react";

function TwoWheelerloan() {
  return (
    <main className="w-full md:h-[35em] md:py-12 bg-[#f2f2f2]">
      <section className="max-w-7xl mx-auto h-full flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-[50%] w-full h-full lg:rounded-md">
          <img
            src="https://images.unsplash.com/photo-1563895439929-873e667d3279?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFR3by1XaGVlbGVyJTIwTG9hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="w-full h-full object-cover md:rounded-md"
            style={{
              clipPath: "inset(5% 20% 17% 10% round 5% 20% 0 10%)",
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
            <h2 className="text-4xl font-semibold">Two-Wheeler Loan</h2>
            <p>
              Buying a bike or scooter is now easier than ever with NextPay’s
              Two-Wheeler Loan. Enjoy fast approval, low down payment, and
              simple EMI options. Whether it's for daily travel or personal
              comfort, we help you get your new ride without delay or heavy
              paperwork
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

export default TwoWheelerloan;
