import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      return;
    }

    setStatus("loading");
    // Add your newsletter subscription logic here
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/hackerwasii",
      icon: "linkedin",
    },
    { name: "GitHub", href: "https://github.com/evildevill", icon: "github" },
    {
      name: "Facebook",
      href: "https://facebook.com/hackerwasii",
      icon: "facebook",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/wasii_254",
      icon: "instagram",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@hackerwasii?sub_confirmation=1",
      icon: "youtube",
    },
    { name: "WhatsApp", href: "https://wa.me/+12048132846", icon: "whatsapp" },
  ];

  const platformLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Blog", href: "/blog" },
    { name: "Courses", href: "/courses" },
    { name: "Store", href: "/store" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { name: "Resume", href: "/resume" },
    { name: "Schedule Call", href: "/schedule-consultation" },
    { name: "Downloads", href: "/downloads" },
    { name: "VU Study Material", href: "/vu-study-material" },
    { name: "Dr. Israr Lectures", href: "/dr-israr" },
  ];

  const toolLinks = [
    { name: "Number Lookup", href: "/number-lookup" },
    { name: "Porn Blocker", href: "/porn-blocker" },
    { name: "URL Shortener", href: "/dashboard/url-shortener" },
    { name: "Firewall Bypass", href: "/firewall-bypass-vu" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/legal/privacy-policy" },
    { name: "Terms of Service", href: "/legal/terms" },
    { name: "Refund Policy", href: "/legal/refund-policy" },
    { name: "Cookies Policy", href: "/legal/cookies" },
  ];

  const getSocialIcon = (iconName) => {
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
      whatsapp: (
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
          <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
          <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
          <path d="M17.609 3.72a10 10 0 0 1 2.69 2.7" />
          <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
          <path d="M20.28 17.61a10 10 0 0 1-2.7 2.69" />
          <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
          <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
          <path d="m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98" />
        </svg>
      ),
    };
    return icons[iconName];
  };

  return (
    <footer className="relative overflow-hidden  text-slate-300">
      {/* Background Decorations */}
      {/* <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -left-1/8 top-0 h-[500px] w-[500px] rounded-full bg-blue-500"></div>
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-500"></div>
      </div> */}

      <div className="relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-7xl py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
            {/* Brand Section */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <img
                    alt="Logo"
                    width="32"
                    height="32"
                    className="h-8 w-8 rounded-full object-cover object-top"
                    src="/about.webp"
                  />
                </div>
                <span className="text-xl font-bold text-white">
                  Zeeshan Nawaz
                </span>
              </div>
              <p className="mb-6 text-slate-400">
                Cybersecurity expert, web developer, and educator dedicated to
                sharing knowledge and empowering others in the tech world.
              </p>

              {/* Social Links */}
              <div className="mb-6 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-blue-600 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.href}
                    aria-label={social.name}
                  >
                    <span className="h-6 w-6">
                      {getSocialIcon(social.icon)}
                    </span>
                  </a>
                ))}
              </div>

              {/* Now Playing Widget */}
              <div className="mt-4">
                <div className="relative w-full max-w-3xl rounded-xl border border-slate-800 bg-slate-900 p-6">
                  <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-br-xl border-b-4 border-r-4 border-blue-800"></div>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                      </span>
                      Now Playing
                    </span>
                    <span className="text-sm text-slate-400">on Spotify</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-slate-800 text-slate-400">
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
                        className="h-8 w-8"
                      >
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-medium text-white">
                        Not Playing
                      </p>
                      <p className="text-sm text-slate-400">Spotify is idle</p>
                    </div>
                    <div className="flex-shrink-0 text-green-400">
                      <svg className="h-6 w-6" viewBox="0 0 168 168">
                        <path
                          fill="currentColor"
                          d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div className="lg:col-span-2">
              <h3 className="mb-6 text-lg font-semibold text-white">
                Platform
              </h3>
              <ul className="space-y-3">
                {platformLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
                      href={link.href}
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
                        className="h-4 w-4"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="lg:col-span-2">
              <h3 className="mb-6 text-lg font-semibold text-white">
                Resources
              </h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
                      href={link.href}
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
                        className="h-4 w-4"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Links */}
            <div className="lg:col-span-2">
              <h3 className="mb-6 text-lg font-semibold text-white">Tools</h3>
              <ul className="space-y-3">
                {toolLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
                      href={link.href}
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
                        className="h-4 w-4"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info & Newsletter */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h3 className="mb-6 text-lg font-semibold text-white">
                  Contact Info
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
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
                      className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                    >
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>
                    <span className="text-sm text-slate-400">hi@wasii.dev</span>
                  </li>
                  <li className="flex items-start gap-3">
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
                      className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                    </svg>
                    <span className="text-sm text-slate-400">
                      +1 (204) 813-2846
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
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
                      className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-sm text-slate-400">
                      Lahore, Pakistan
                    </span>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Newsletter
                </h3>
                <p className="mb-4 text-sm text-slate-400">
                  Get updates on new content and tips.
                </p>
                <div className="mb-4 space-y-3">
                  <input
                    type="email"
                    className="flex h-9 w-full rounded-md border border-slate-700 bg-slate-800 px-3 py-1 text-base text-white outline-none transition-all placeholder:text-slate-500 focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    disabled={status === "loading"}
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={status === "loading"}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
                  >
                    {status === "loading" ? "Subscribing..." : "Subscribe"}
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
                      className="h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  I respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 h-px w-full bg-slate-800"></div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <div className="flex items-center gap-1">
              <span>
                © 2020 - {new Date().getFullYear()} Zeeshan Nawaz. All rights
                reserved.
              </span>
              <span className="flex items-center gap-1 text-slate-400 ml-2">
                Made with 🩵
              </span>
            </div>
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  className="text-slate-400 hover:text-blue-400"
                  href={link.href}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
