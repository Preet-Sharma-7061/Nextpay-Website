import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Trusted by Thousands",
    subtitle: "Join our growing family of satisfied customers",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
  },
  {
    title: "Fast Loan Disbursal",
    subtitle: "Get your loan approved and disbursed quickly",
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1600",
  },
  {
    title: "Secure & Reliable",
    subtitle: "Your financial data is safe with NextPay",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600",
  },
];

function Sliderpage() {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  // Create slides with clone
  const sliderData = [
    slides[slides.length - 1], // last clone
    ...slides,
    slides[0], // first clone
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setTransition(true);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle seamless reset
  useEffect(() => {
    if (index === sliderData.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 1000);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(slides.length);
      }, 1000);
    }
  }, [index, sliderData.length]);

  // Real active index for dots
  const activeDot =
    index === 0
      ? slides.length - 1
      : index === sliderData.length - 1
      ? 0
      : index - 1;

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Slider */}
      <div
        className={`flex h-full ${
          transition ? "transition-transform duration-1000 ease-in-out" : ""
        }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {sliderData.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-900/80 via-teal-800/70 to-emerald-700/70"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-6 text-white">
              <div>
                <p className="text-sm uppercase tracking-widest opacity-90 mb-4">
                  {slide.title}
                </p>
                <h2 className="text-2xl md:text-4xl font-semibold mb-6 max-w-3xl">
                  {slide.subtitle}
                </h2>
                <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-medium hover:scale-105 transition">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setTransition(true);
              setIndex(i + 1);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeDot === i
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Sliderpage;
