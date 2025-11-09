import { useState } from "react";
import AboutDropdown from "./AboutDropdown";
import ContentDropdown from "./ContentDropdown";
import ResourcesDropdown from "./ResourcesDropdown";
import ServicesDropdown from "./ServicesDropdown";

export default function Hero({ isDarkMode }) {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <section className="relative px-10 mt-1 min-h-[calc(100vh-80px)]">
      <div className="relative px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12 lg:py-16 min-h-[calc(100vh-80px)]">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Left: Hero Content */}
          <div className="lg:col-span-1">
            {/* Greeting Tag */}
            <div className="inline-block">
              <span className="inline-flex items-center justify-center border w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                </span>
                Hi, I am Zeeshan Nawaz
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className={isDarkMode ? "text-white" : "text-black"}>
                Empowering
              </span>
              <br />
              <span className="text-blue-500">Minds & Inspiring</span>
              <br />
              <span className="text-blue-500 relative">Change</span>
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400 pt-4">
              As a passionate educator and lifelong learner, I am dedicated to
              sharing my knowledge and expertise in cybersecurity, web
              development, design, and personal growth.
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 py-6">
              {["Cybersecurity", "Web Development", "Education", "Design"].map(
                (tag) => (
                  <span
                    key={tag}
                    className={`${
                      isDarkMode
                        ? "bg-gray-800/80 text-gray-300 border-gray-700"
                        : "bg-gray-200 text-gray-700 border-gray-300"
                    } px-4 py-1 rounded-full text-sm font-medium border`}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              {[
                {
                  href: "https://linkedin.com/in/hackerwasii",
                  icon: "linkedin",
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/evildevill",
                  icon: "github",
                  label: "GitHub",
                },
                {
                  href: "https://facebook.com/hackerwasii",
                  icon: "facebook",
                  label: "Facebook",
                },
                {
                  href: "https://instagram.com/wasii_254",
                  icon: "instagram",
                  label: "Instagram",
                },
                {
                  href: "https://www.youtube.com/@hackerwasii?sub_confirmation=1",
                  icon: "youtube",
                  label: "YouTube",
                },
                { href: "mailto:hi@wasii.dev", icon: "mail", label: "Email" },
                {
                  href: "https://tryhackme.com/p/hackerwasii",
                  icon: "binary",
                  label: "TryHackMe",
                },
                {
                  href: "https://wa.me/+12048132846",
                  icon: "phone",
                  label: "WhatsApp",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-slate-700 dark:hover:text-blue-400"
                  href={social.href}
                >
                  <span className="h-6 w-6 transition-transform duration-300 group-hover:scale-110">
                    {getSocialIcon(social.icon)}
                  </span>
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row pt-4">
              <a href="/blog">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] shadow-xs h-9 group relative overflow-hidden rounded-lg bg-blue-600 px-8 text-white hover:bg-blue-700">
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
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </button>
              </a>
              <a href="/resume">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50 h-9 rounded-lg border-slate-300 px-6 dark:border-slate-700">
                  View Resume
                </button>
              </a>
            </div>
          </div>

          {/* Right: Info Cards */}
          <div className="relative h-[430px] md:h-[430px]">
            <div className="absolute left-1/2 top-[50%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-dashed border-slate-100 dark:border-slate-800"></div>
            <div className="absolute left-1/2 top-[50%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-slate-100 dark:border-slate-800"></div>

            {/* Card 1 - Cybersecurity */}
            <div
              className="absolute flex w-56 cursor-pointer flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-lg transition-all duration-500 dark:border-slate-800 dark:bg-slate-900 left-0 top-0"
              style={{
                transform: "scale(0.95) rotate(-3deg)",
                opacity: 0.7,
                zIndex: 5,
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
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
                  className="h-6 w-6"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                Cybersecurity Expert
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Specialized in ethical hacking, penetration testing, and
                security awareness training.
              </p>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-br-xl border-b-4 border-r-4 border-blue-200 dark:border-blue-800"></div>
            </div>

            {/* Card 2 - Web Developer */}
            <div
              className="absolute flex w-56 cursor-pointer flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-lg transition-all duration-500 dark:border-slate-800 dark:bg-slate-900 right-0 top-1/4"
              style={{
                transform: "scale(1.05) rotate(2deg)",
                opacity: 1,
                zIndex: 10,
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
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
                  className="h-6 w-6"
                >
                  <path d="m16 18 6-6-6-6"></path>
                  <path d="m8 6-6 6 6 6"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                Web Developer
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Creating modern, responsive websites and applications with
                cutting-edge technologies.
              </p>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-br-xl border-b-4 border-r-4 border-purple-200 dark:border-purple-800"></div>
            </div>

            {/* Card 3 - Educator */}
            <div
              className="absolute flex w-56 cursor-pointer flex-col rounded-xl border border-slate-200 bg-white p-3 shadow-lg transition-all duration-500 dark:border-slate-800 dark:bg-slate-900 left-1/4 bottom-0"
              style={{
                transform: "scale(0.95) rotate(-1deg)",
                opacity: 0.7,
                zIndex: 5,
              }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
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
                  className="h-6 w-6"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                Educator & Mentor
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Passionate about sharing knowledge and helping others grow in
                their technical journey.
              </p>
              <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-br-xl border-b-4 border-r-4 border-green-200 dark:border-green-800"></div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdowns */}
        <div className="lg:hidden mt-4 space-y-4">
          {isAboutOpen && (
            <div className="w-full">
              <AboutDropdown />
            </div>
          )}
          {isContentOpen && (
            <div className="w-full">
              <ContentDropdown />
            </div>
          )}
          {isResourcesOpen && (
            <div className="w-full">
              <ResourcesDropdown />
            </div>
          )}
          {isServicesOpen && (
            <div className="w-full">
              <ServicesDropdown />
            </div>
          )}
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
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
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
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
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
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
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
        <path d="m10 15 5-3-5-3z"></path>
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
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
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
        <rect x="14" y="14" width="4" height="6" rx="2"></rect>
        <rect x="6" y="4" width="4" height="6" rx="2"></rect>
        <path d="M6 20h4"></path>
        <path d="M14 10h4"></path>
        <path d="M6 14h2v6"></path>
        <path d="M14 4h2v6"></path>
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
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
      </svg>
    ),
  };
  return icons[type];
}
