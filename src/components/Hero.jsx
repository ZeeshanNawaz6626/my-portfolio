import { useState, useEffect } from "react";

export default function Hero({ isDarkMode }) {
  const [activeCard, setActiveCard] = useState(0); // 0, 1, 2 for each card
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  // Auto-rotate cards every 3 seconds
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handleCardClick = (index) => {
    setActiveCard(index);
    setIsAutoRotating(false); // Stop auto-rotation when user clicks manually

    // Optional: Restart auto-rotation after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoRotating(true);
    }, 10000);
  };

  const getCardStyles = (index) => {
    const isActive = activeCard === index;

    return {
      transform: isActive
        ? "scale(1) rotate(2deg)"
        : "scale(0.95) rotate(2deg)",
      opacity: isActive ? 1 : 0.7,
      zIndex: isActive ? 10 : 5,
    };
  };

  const getTextStyles = (index) => {
    const isActive = activeCard === index;

    return {
      title: isActive
        ? "text-slate-900 dark:text-white font-semibold"
        : "text-slate-600 dark:text-slate-400 font-semibold",
      description: isActive
        ? "text-slate-700 dark:text-slate-300"
        : "text-slate-600 dark:text-slate-400",
    };
  };
  return (
    <section className="relative overflow-hidden  py-20 ">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 dark:bg-blue-950/20"></div>
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-50/50 dark:bg-purple-950/20"></div>
      </div>

      <div className="relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-2">
                <span
                  data-slot="badge"
                  className="inline-flex items-center justify-center border w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent [a&]:hover:bg-primary/90 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                  </span>
                  Hi, I am Zeeshan Nawaz
                </span>
              </div>

              <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-5xl">
                Empowering <br />
                <span className="relative">
                  <span className="relative z-10 text-blue-600 dark:text-blue-400">
                    Minds & Inspiring Change
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 z-0 w-full"
                    viewBox="0 0 200 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0,17 C50,5 100,30 200,17 L200,20 L0,20 Z"
                      fill="#3b82f6"
                      fillOpacity="0.3"
                      className="dark:fill-blue-900"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mb-6 max-w-xl text-sm md:text-base text-slate-600 dark:text-slate-400">
                As a passionate educator and lifelong learner, I am dedicated to
                sharing my knowledge...
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                  Cybersecurity
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                  Web Development
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                  Education
                </span>
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                  Design
                </span>
              </div>

              {/* Social Links */}
              <div className="mb-8 flex flex-wrap gap-4">
                {[
                  {
                    href: "https://www.linkedin.com/in/imzeeshannawaz",
                    icon: "linkedin",
                    label: "LinkedIn",
                  },
                  {
                    href: "https://github.com/ZeeshanNawaz6626/",
                    icon: "github",
                    label: "GitHub",
                  },
                  {
                    href: "https://www.facebook.com/zeeshan.malik.886928",
                    icon: "facebook",
                    label: "Facebook",
                  },
                  {
                    href: "https://instagram.com/zeemalik243",
                    icon: "instagram",
                    label: "Instagram",
                  },
                  {
                    href: "https://www.youtube.com/",
                    icon: "youtube",
                    label: "YouTube",
                  },
                  {
                    href: "imzeeshannawaz@gmail.com",
                    icon: "mail",
                    label: "Email",
                  },
                  // {
                  //   href: "https://tryhackme.com/p/hackerwasii",
                  //   icon: "binary",
                  //   label: "TryHackMe",
                  // },
                  {
                    href: "https://wa.me/+923026626342",
                    icon: "phone",
                    label: "WhatsApp",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-400"
                  >
                    <span className="h-6 w-6 transition-transform duration-300 group-hover:scale-110">
                      {getSocialIcon(social.icon)}
                    </span>
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="/blog">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 has-[>svg]:px-4 group relative overflow-hidden rounded-lg bg-blue-600 px-8 text-white hover:bg-blue-700">
                    <span className="relative z-10 flex items-center">
                      Read Blog Posts
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </a>
                <a href="/resume">
                  <button className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50 h-10 has-[>svg]:px-4 rounded-lg border-slate-300 px-8 dark:border-slate-700">
                    View Resume
                  </button>
                </a>
              </div>
            </div>

            {/* Right Column - Floating Cards */}
            <div className="relative h-[400px] md:h-[470px]">
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-dashed border-slate-100 dark:border-slate-800"></div>
              <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-slate-100 dark:border-slate-800"></div>

              {/* Card 1 - Cybersecurity Expert */}
              <div
                className="absolute flex w-64 cursor-pointer flex-col rounded-xl border border-slate-200 bg-white p-2 shadow-lg transition-all duration-500 dark:border-slate-800 dark:bg-slate-900 left-0 top-6"
                style={getCardStyles(0)}
                onClick={() => handleCardClick(0)}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300 ${
                    activeCard === 0
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                </div>
                <h3
                  className={`mb-2 text-lg transition-colors duration-300 ${
                    getTextStyles(0).title
                  }`}
                >
                  Cybersecurity Expert
                </h3>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    getTextStyles(0).description
                  }`}
                >
                  Specialized in ethical hacking, penetration testing, and
                  security awareness training.
                </p>
                <div
                  className={`absolute -bottom-2 -right-2 h-8 w-8 rounded-br-xl border-b-4 border-r-4 transition-colors duration-300 ${
                    activeCard === 0
                      ? "border-blue-200 dark:border-blue-800"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                ></div>
              </div>

              {/* Card 2 - Web Developer */}
              <div
                className="absolute flex w-64 cursor-pointer flex-col rounded-xl border border-slate-200 bg-white p-2 shadow-lg transition-all duration-500 dark:border-slate-800 dark:bg-slate-900 right-0 top-32"
                style={getCardStyles(1)}
                onClick={() => handleCardClick(1)}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300 ${
                    activeCard === 1
                      ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                      : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-code h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="m16 18 6-6-6-6" />
                    <path d="m8 6-6 6 6 6" />
                  </svg>
                </div>
                <h3
                  className={`mb-2 text-lg transition-colors duration-300 ${
                    getTextStyles(1).title
                  }`}
                >
                  Web Developer
                </h3>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    getTextStyles(1).description
                  }`}
                >
                  Creating modern, responsive websites and applications with
                  cutting-edge technologies.
                </p>
                <div
                  className={`absolute -bottom-2 -right-2 h-8 w-8 rounded-br-xl border-b-4 border-r-4 transition-colors duration-300 ${
                    activeCard === 1
                      ? "border-purple-200 dark:border-purple-800"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                ></div>
              </div>

              {/* Card 3 - Educator & Mentor */}
              <div
                className="absolute flex w-64 cursor-pointer flex-col rounded-xl border border-slate-200 bg-white p-2 shadow-lg transition-all duration-500 dark:border-slate-800 dark:bg-slate-900 left-1/4 bottom-6"
                style={getCardStyles(2)}
                onClick={() => handleCardClick(2)}
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300 ${
                    activeCard === 2
                      ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sparkles h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                    <path d="M20 2v4" />
                    <path d="M22 4h-4" />
                    <circle cx="4" cy="20" r="2" />
                  </svg>
                </div>
                <h3
                  className={`mb-2 text-lg transition-colors duration-300 ${
                    getTextStyles(2).title
                  }`}
                >
                  Educator & Mentor
                </h3>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    getTextStyles(2).description
                  }`}
                >
                  Passionate about sharing knowledge and helping others grow in
                  their technical journey.
                </p>
                <div
                  className={`absolute -bottom-2 -right-2 h-8 w-8 rounded-br-xl border-b-4 border-r-4 transition-colors duration-300 ${
                    activeCard === 2
                      ? "border-green-200 dark:border-green-800"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function for social icons
function getSocialIcon(type) {
  const icons = {
    linkedin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    github: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    facebook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    instagram: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
    youtube: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    ),
    mail: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
        <rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    ),
    binary: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="14" y="14" width="4" height="6" rx="2" />
        <rect x="6" y="4" width="4" height="6" rx="2" />
        <path d="M6 20h4" />
        <path d="M14 10h4" />
        <path d="M6 14h2v6" />
        <path d="M14 4h2v6" />
      </svg>
    ),
    phone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
      </svg>
    ),
  };
  return icons[type];
}
