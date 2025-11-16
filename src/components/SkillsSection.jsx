import { useState } from "react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("All Skills");

  const tabs = ["All Skills", "Development", "Infrastructure", "Security"];

  const skills = [
    {
      icon: "globe",
      title: "Web Development",
      description:
        "Modern, responsive UI components and starter templates built with the latest web technologies.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      category: "Development",
      color: "blue",
    },
    {
      icon: "cloud",
      title: "Cloud Infrastructure",
      description:
        "Pre-built infrastructure templates and IaC (Infrastructure as Code) scripts for scalable deployment.",
      tags: ["AWS", "Azure", "Docker", "Kubernetes"],
      category: "Infrastructure",
      color: "purple",
    },
    {
      icon: "shield",
      title: "Cybersecurity Services",
      description: "Comprehensive digital asset protection solutions",
      tags: ["Penetration Testing", "Security Audits", "Threat Modeling"],
      category: "Security",
      color: "green",
    },
    {
      icon: "code",
      title: "Full Stack Development",
      description:
        "End-to-end codebase templates and workflow automations for complex full stack applications.",
      tags: ["JavaScript", "Python", "SQL", "GraphQL"],
      category: "Development",
      color: "amber",
    },
    {
      icon: "network",
      title: "Network Automation",
      description:
        "Automated configuration scripts and templates for modern network management.",
      tags: ["VPNs", "Firewalls", "Load Balancing"],
      category: "Infrastructure",
      color: "rose",
    },
    {
      icon: "chart",
      title: "Data Analytics",
      description:
        "Self-service dashboards, scripts, and templates for actionable data analysis.",
      tags: ["Dashboards", "Google Analytics", "Metrics"],
      category: "Development",
      color: "cyan",
    },
  ];

  const filteredSkills =
    activeTab === "All Skills"
      ? skills
      : skills.filter((skill) => skill.category === activeTab);

  const getIcon = (iconName) => {
    const icons = {
      globe: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      cloud: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      ),
      shield: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
      code: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m16 18 6-6-6-6"></path>
          <path d="m8 6-6 6 6 6"></path>
        </svg>
      ),
      network: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="16" y="16" width="6" height="6" rx="1"></rect>
          <rect x="2" y="16" width="6" height="6" rx="1"></rect>
          <rect x="9" y="2" width="6" height="6" rx="1"></rect>
          <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
          <path d="M12 12V8"></path>
        </svg>
      ),
      chart: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
          <path d="M18 17V9"></path>
          <path d="M13 17V5"></path>
          <path d="M8 17v-3"></path>
        </svg>
      ),
    };
    return icons[iconName];
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        icon: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
      },
      purple: {
        icon: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
      },
      green: {
        icon: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
      },
      amber: {
        icon: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
      },
      rose: {
        icon: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
      },
      cyan: {
        icon: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400",
      },
    };
    return colors[color];
  };

  return (
    <section className="relative px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 dark:bg-blue-950/20"></div>
        <div class="absolute -left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-50/50 dark:bg-purple-950/20"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3">
            Expertise
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-slate-900 dark:text-white">
            Skills <span className="text-blue-500">& Services Offered</span>
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm md:text-base text-slate-600 dark:text-slate-400">
            Specialized expertise across multiple domains to help you achieve
            your technical goals and secure your digital presence.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-3 py-1.5 text-xs md:text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill, index) => {
            const colorClasses = getColorClasses(skill.color);
            return (
              <div
                key={index}
                className="relative group flex flex-col rounded-xl border border-slate-200 bg-white py-4 px-5 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses.icon}`}
                >
                  {getIcon(skill.icon)}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                  {skill.title}
                </h3>
                <p className="mb-3 flex-1 text-sm text-slate-600 dark:text-slate-400">
                  {skill.description}
                </p>
                <div className="mb-3 flex flex-wrap gap-2">
                  {skill.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 text-blue-500 dark:text-blue-400"
                      >
                        <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="mt-auto inline-flex items-center text-xs md:text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  href={`/service/${skill.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  </svg>
                </a>
              </div>
            );
          })}
        </div>

        <div class="mt-16 text-center">
          <p class="mb-6 text-lg text-slate-600 dark:text-slate-400">
            Need a custom solution for your specific requirements?
          </p>
          <a href="/contact">
            <button
              data-slot="button"
              class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-10 has-[&gt;svg]:px-4 group relative overflow-hidden rounded-lg bg-blue-600 px-8 text-white hover:bg-blue-700"
            >
              <span class="relative z-10 flex items-center">
                Get in Touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
