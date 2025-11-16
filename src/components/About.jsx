import Footer from "./Footer";

export default function AboutPage({ isDarkMode }) {
  return (
    <div className="flex-1 pt-16">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden  py-20 ">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 dark:bg-blue-950/20"></div>
            <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-50/50 dark:bg-purple-950/20"></div>
          </div>
          <div className="relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col justify-center">
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center border whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent mb-4 w-fit rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                    </span>
                    About Me
                  </span>
                  <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                    Hi, I'm{" "}
                    <span className="relative">
                      <span className="relative z-10 text-blue-600 dark:text-blue-400">
                        Zeeshan Nawaz
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
                        ></path>
                      </svg>
                    </span>
                  </h1>
                  <p className="mb-6 text-lg text-slate-600 dark:text-slate-400">
                    I'm a passionate cybersecurity expert, educator, and web
                    developer with over 6 years of experience in the tech
                    industry. My mission is to make technology and security
                    accessible to everyone through education and mentorship.
                  </p>
                  <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                    Based in Pakistan, I've worked with clients and students
                    worldwide, helping them build secure systems, learn valuable
                    tech skills, and grow their careers in the digital
                    landscape.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <a href="/contact">
                      <button
                        data-slot="button"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 group relative overflow-hidden rounded-lg bg-blue-600 px-8 text-white hover:bg-blue-700"
                      >
                        <span className="relative z-10 flex items-center">
                          Get in Touch
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
                            aria-hidden="true"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                      </button>
                    </a>
                    <a href="/resume">
                      <button
                        data-slot="button"
                        className="text-white inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50 h-10 rounded-lg border-slate-300 px-4 dark:border-slate-700"
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
                          className="mr-2 h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="M12 15V3"></path>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <path d="m7 10 5 5 5-5"></path>
                        </svg>
                        Download Resume
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative flex items-center justify-center">
                  <div className="relative h-[400px] w-[400px] overflow-hidden rounded-2xl border-8 border-white shadow-xl dark:border-slate-800">
                    <img
                      alt="Zeeshan Nawaz"
                      decoding="async"
                      className="object-cover object-top"
                      sizes="100vw"
                      srcSet="/images/1729787557582.jpg"
                      src="/_next/image?url=%2Fabout.webp&w=3840&q=50"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-blue-100 dark:bg-blue-900/30"></div>
                  <div className="absolute -right-4 -top-4 h-24 w-24 rounded-xl bg-purple-100 dark:bg-purple-900/30"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section className="py-20 ">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                Skills &amp; Expertise
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Cybersecurity */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
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
                      aria-hidden="true"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                    Cybersecurity
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-400">
                    Specialized in protecting digital assets and educating
                    others about security best practices.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Ethical Hacking
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Penetration Testing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Security Audits
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Threat Modeling
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Security Awareness Training
                    </li>
                  </ul>
                </div>

                {/* Web Development */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
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
                      aria-hidden="true"
                    >
                      <path d="m16 18 6-6-6-6"></path>
                      <path d="m8 6-6 6 6 6"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                    Web Development
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-400">
                    Creating modern, responsive, and secure web applications
                    using cutting-edge technologies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      React.js
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Next.js
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Node.js
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      TypeScript
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Tailwind CSS
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      RESTful APIs
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      GraphQL
                    </li>
                  </ul>
                </div>

                {/* Education & Mentoring */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
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
                      aria-hidden="true"
                    >
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                    Education &amp; Mentoring
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-400">
                    Passionate about sharing knowledge and helping others grow
                    in their technical journey.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Curriculum Development
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      One-on-One Mentoring
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Workshop Facilitation
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Technical Writing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                      Video Tutorials
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Journey Section */}
        <section className="py-20">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                Professional Journey
              </h2>
              <div className="relative border-l border-slate-200 pl-8 dark:border-slate-700">
                {/* Job 1 */}
                <div className="mb-12 last:mb-0">
                  <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-blue-600 dark:border-slate-900 dark:bg-blue-500"></div>
                  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      >
                        2025 - Present
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Angular Developer
                      </h3>
                    </div>
                    <p className="mb-2 text-slate-700 dark:text-slate-300">
                      Devaxix
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Developing and maintaining Angular-based web applications
                      while ensuring responsive design, performance
                      optimization, and smooth UI/UX. Working closely with
                      designers and engineers using modern stacks like Angular
                      16+, Tailwind CSS, TypeScript, RxJS, and RESTful APIs.
                    </p>
                  </div>
                </div>

                {/* Job 2 */}
                <div className="mb-12 last:mb-0">
                  <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-blue-600 dark:border-slate-900 dark:bg-blue-500"></div>
                  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      >
                        2021 - 2022
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Application Security Analyst
                      </h3>
                    </div>
                    <p className="mb-2 text-slate-700 dark:text-slate-300">
                      Gore Mutual Insurance (Remote)
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Performed secure code reviews using Veracode and Snyk,
                      conducted vulnerability assessments, penetration testing,
                      and provided remediation guidance to development teams.
                      Specialized in static/dynamic analysis, threat
                      intelligence, and hardening systems.
                    </p>
                  </div>
                </div>

                {/* Job 3 */}
                <div className="mb-12 last:mb-0">
                  <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-blue-600 dark:border-slate-900 dark:bg-blue-500"></div>
                  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      >
                        2021 - Present
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Lead Cybersecurity Educator
                      </h3>
                    </div>
                    <p className="mb-2 text-slate-700 dark:text-slate-300">
                      Self-employed
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Creating cybersecurity and web development content,
                      mentoring students, and conducting security assessments.
                      Built learning platforms and provided hands-on training
                      using tools like Burp Suite, Nmap, Metasploit, and
                      frameworks like Node.js and Next.js.
                    </p>
                  </div>
                </div>

                {/* Job 4 */}
                <div className="mb-12 last:mb-0">
                  <div className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-blue-600 dark:border-slate-900 dark:bg-blue-500"></div>
                  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      >
                        2020 - 2021
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        Application Security Tester
                      </h3>
                    </div>
                    <p className="mb-2 text-slate-700 dark:text-slate-300">
                      Saluber MD LLC. (Remote)
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Managed SIEM platforms, analyzed a wide range of IT
                      systems, prioritized security vulnerabilities, and
                      explored reverse engineering fundamentals to enhance
                      application security posture across the organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Technology Section */}
        <section className="py-20 bg-slate-950/50">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                Beyond Technology
              </h2>
              <p className="mb-12 text-lg text-slate-600 dark:text-slate-400">
                While technology is my passion, I believe in maintaining a
                well-rounded life. Here are some things I enjoy outside of work:
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Interest 1 */}
                <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
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
                      aria-hidden="true"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Cybersecurity
                  </h3>
                  <p className="text-center text-slate-600 dark:text-slate-400">
                    Diving deep into ethical hacking, reverse engineering, and
                    securing digital ecosystems. Constantly learning, breaking,
                    and fixing things — responsibly.
                  </p>
                </div>

                {/* Interest 2 */}
                <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
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
                      aria-hidden="true"
                    >
                      <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path>
                      <path d="M20.054 15.987H3.946"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Full Stack Development
                  </h3>
                  <p className="text-center text-slate-600 dark:text-slate-400">
                    Building cool stuff from frontend to backend. I love turning
                    ideas into scalable apps, and making clean, performant,
                    maintainable code.
                  </p>
                </div>

                {/* Interest 3 */}
                <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
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
                      aria-hidden="true"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Mentorship
                  </h3>
                  <p className="text-center text-slate-600 dark:text-slate-400">
                    Helping others level up in tech, cybersecurity, and life. I
                    genuinely enjoy guiding beginners and sharing what I've
                    learned the hard way.
                  </p>
                </div>

                {/* Interest 4 */}
                <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
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
                      aria-hidden="true"
                    >
                      <path d="M13 21h8"></path>
                      <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Writing
                  </h3>
                  <p className="text-center text-slate-600 dark:text-slate-400">
                    From tech blogs to personal reflections — I write to
                    express, document, and connect. Writing is how I teach
                    myself and others.
                  </p>
                </div>

                {/* Interest 5 */}
                <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
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
                      aria-hidden="true"
                    >
                      <line x1="6" x2="10" y1="11" y2="11"></line>
                      <line x1="8" x2="8" y1="9" y2="13"></line>
                      <line x1="15" x2="15.01" y1="12" y2="12"></line>
                      <line x1="18" x2="18.01" y1="10" y2="10"></line>
                      <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Gaming
                  </h3>
                  <p className="text-center text-slate-600 dark:text-slate-400">
                    From strategy to story-driven games, gaming keeps my mind
                    sharp and my creativity flowing. A great way to reset.
                  </p>
                </div>

                {/* Interest 6 */}
                <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
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
                      aria-hidden="true"
                    >
                      <circle cx="8" cy="18" r="4"></circle>
                      <path d="M12 18V2l7 4"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Music
                  </h3>
                  <p className="text-center text-slate-600 dark:text-slate-400">
                    Music fuels my mood and focus. Whether it's lo-fi while
                    coding or something intense during a workout, I'm always
                    tuned in.
                  </p>
                </div>

                {/* Interest 7 */}
                <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
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
                      aria-hidden="true"
                    >
                      <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"></path>
                      <path d="M12 22v-3"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Exploring Nature
                  </h3>
                  <p className="text-center text-slate-600 dark:text-slate-400">
                    Stepping away from screens to reconnect with nature. Walks,
                    hikes, sunsets — they all help me reflect and recharge.
                  </p>
                </div>

                {/* Interest 8 */}
                <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
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
                      aria-hidden="true"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                      <path d="M9 18h6"></path>
                      <path d="M10 22h4"></path>
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    Learning in Public
                  </h3>
                  <p className="text-center text-slate-600 dark:text-slate-400">
                    Documenting my journey, sharing wins and fails alike. Growth
                    mindset &gt; perfection. Always experimenting, always
                    shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Connect Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 text-white dark:from-blue-700 dark:to-purple-700">
          <div className="px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Let's Connect
              </h2>
              <p className="mb-8 text-lg text-blue-100 dark:text-blue-200">
                Whether you're interested in working together, have questions
                about my services, or just want to say hello, I'd love to hear
                from you.
              </p>
              <a href="/contact">
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 rounded-md px-6 gap-2 bg-white text-blue-600 hover:bg-blue-50 dark:bg-white dark:text-blue-700 dark:hover:bg-blue-50"
                >
                  Get in Touch
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
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
