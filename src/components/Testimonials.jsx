import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "Zeeshan's expertise in cybersecurity and web development is exceptional. His teaching style makes complex topics easy to understand, and his practical approach has helped me advance my career significantly.",
      author: "Sarah Doe",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      quote:
        "Working with Zeeshan has been a game-changer. His knowledge of modern web technologies and his ability to explain concepts clearly makes him an outstanding educator and mentor. I learned more from him in weeks than I did from months of tutorials.",
      author: "John Smith",
      role: "Software Developer",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      quote:
        "Zeeshan's mentorship has transformed my confidence in full-stack development. His insights into performance optimization and clean coding practices were invaluable.",
      author: "Emma Wilson",
      role: "UI/UX Designer",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-4 lg:py-8 bg-[#0B1120]">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 dark:bg-blue-950/20"></div>
        <div class="absolute -left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-50/50 dark:bg-purple-950/20"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 mb-4">
          Testimonials
        </span>
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          What People{" "}
          <span className="relative text-blue-400">Say About Me</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Hear from students and clients who have benefited from my expertise
          and teaching.
        </p>
      </div>

      {/* Testimonial Card */}
      <div className="relative mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-lg dark:bg-slate-900 md:p-2 min-h-[220px] flex flex-col justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute right-6 top-6 h-12 w-12 text-blue-100 dark:text-blue-900/30"
          >
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
          </svg>

          <div className="relative z-10 text-center flex flex-col ">
            <blockquote className="mb-2 text-lg italic text-slate-700 dark:text-slate-300 md:text-xl max-h-[160px] overflow-y-auto">
              “{testimonials[currentIndex].quote}”
            </blockquote>

            <div className="flex gap-2">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="h-12 w-12 rounded-full border-2 border-blue-100 dark:border-blue-900/30"
              />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={prevTestimonial}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-blue-600 dark:bg-blue-400"
                    : "bg-slate-300 dark:bg-slate-700"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
