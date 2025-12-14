import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma Watson",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "As a designer, visuals matter most. NextPay delivered clean, intuitive, and modern solutions.",
  },
  {
    name: "Andrew Garfield",
    role: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "The UI feels polished and professional. It's like having a design partner on standby.",
  },
  {
    name: "Sydney Sweeney",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "Fast, intuitive, and consistent branding. Exactly what modern products need.",
  },
];

function Testimonial() {
  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            What Our Happy Users say!
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Smarter, faster, and reliable — see what our clients say about us.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-8 animate-marquee">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[320px] shrink-0 bg-white rounded-2xl p-6 shadow-sm"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6 wrap-break-word">
                  {item.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
