import React from "react";

function CarLoan() {
  return (
    <main className="w-full md:h-[35em] md:py-12 bg-[#f2f2f2]">
      <section className="max-w-7xl mx-auto h-full flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-[50%] w-full h-full lg:rounded-md">
          <img
            src="https://plus.unsplash.com/premium_photo-1661306636048-5dfa19532575?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwbG9hbnxlbnwwfHwwfHx8MA%3D%3D"
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
            <h2 className="text-4xl font-semibold">Car Loan</h2>
            <p>
              Make your dream car a reality with NextPay’s smooth and affordable
              Car Loan service. Enjoy quick approval, low EMIs, and a simple
              document process. Whether you’re buying your first car or
              upgrading to a better one, we help you drive home your dream
              without financial pressure.
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

export default CarLoan;
