import { useState } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Zeeshan's expertise in cybersecurity and web development is exceptional. His teaching style makes complex topics easy to understand, and his practical approach has helped me advance my career significantly.",
      author: "Sarah Doe",
      role: "Product Manager",
    },
    {
      quote:
        "Working with Zeeshan has been a game-changer. His knowledge of modern web technologies and his ability to explain concepts clearly makes him an outstanding educator and mentor.",
      author: "John Smith",
      role: "Software Developer",
    },
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20 bg-[#0B1120]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            What People Say <span className="text-blue-500">About Me</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl">
          <div className="mb-6">
            <svg
              className="w-12 h-12 text-blue-500 mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
              "{testimonials[currentIndex].quote}"
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg md:text-xl mb-1">
              {testimonials[currentIndex].author}
            </h4>
            <p className="text-gray-400 text-sm md:text-base">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-blue-500 w-8"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
