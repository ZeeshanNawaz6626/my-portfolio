import { useState } from "react";
import {
  Globe,
  Cloud,
  Shield,
  Code,
  Network,
  BarChart3,
  ExternalLink,
  CircleCheckBig,
  ArrowRight,
} from "lucide-react";
import Footer from "./Footer";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  technologies,
  href,
  accentColor,
}) => (
  <div className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
    <div
      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${accentColor.bg} ${accentColor.text}`}
    >
      <Icon className="h-6 w-6" aria-hidden="true" />
    </div>
    <h2 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
      {title}
    </h2>
    <p className="mb-4 flex-1 text-slate-600 dark:text-slate-400">
      {description}
    </p>
    <div className="mb-4 flex flex-wrap gap-2">
      {technologies.map((tech, idx) => (
        <span
          key={idx}
          className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200"
        >
          <CircleCheckBig
            className="mr-1 h-3 w-3 text-blue-500 dark:text-blue-400"
            aria-hidden="true"
          />
          {tech}
        </span>
      ))}
    </div>
    <a
      className="mt-auto inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      href={href}
      aria-label={`Learn more about ${title}`}
    >
      Explore Service
      <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
    </a>
    <div
      className={`absolute -bottom-2 -right-2 h-8 w-8 rounded-br-xl border-b-4 border-r-4 ${accentColor.border}`}
    ></div>
  </div>
);

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive UI components and starter templates built with the latest web technologies.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    href: "/service/web-development",
    accentColor: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800",
    },
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Pre-built infrastructure templates and IaC (Infrastructure as Code) scripts for scalable deployment.",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes"],
    href: "/service/cloud-infrastructure",
    accentColor: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-800",
    },
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Comprehensive digital asset protection solutions",
    technologies: ["Penetration Testing", "Security Audits", "Threat Modeling"],
    href: "/service/cybersecurity",
    accentColor: {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-200 dark:border-green-800",
    },
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "End-to-end codebase templates and workflow automations for complex full stack applications.",
    technologies: ["JavaScript", "Python", "SQL", "GraphQL"],
    href: "/service/full-stack",
    accentColor: {
      bg: "bg-amber-100 dark:bg-amber-900/30",
      text: "text-amber-600 dark:text-amber-400",
      border: "border-amber-200 dark:border-amber-800",
    },
  },
  {
    icon: Network,
    title: "Network Automation",
    description:
      "Automated configuration scripts and templates for modern network management.",
    technologies: ["VPNs", "Firewalls", "Load Balancing"],
    href: "/service/network-automation",
    accentColor: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800",
    },
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Self-service dashboards, scripts, and templates for actionable data analysis.",
    technologies: ["Dashboards", "Google Analytics", "Metrics"],
    href: "/service/analytics",
    accentColor: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-800",
    },
  },
];

const categories = [
  "All Services",
  "Development",
  "Infrastructure",
  "Security",
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All Services");

  return (
    <div className="pt-16">
      <section className="relative overflow-hidden  py-20  ">
        {/* Background decorative elements */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute -right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 dark:bg-blue-950/20"></div>
          <div className="absolute -left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-50/50 dark:bg-purple-950/20"></div>
        </div>
        <div className="relative z-10 px-4 md:px-6">
          <div className="mx-auto max-w-7xl">
            {/* Header Section */}
            <div className="mb-12 text-center">
              <span className="mb-4 inline-flex items-center justify-center rounded-full border border-transparent bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                Professional Services
              </span>

              <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                <span className="relative">
                  Comprehensive Tech{" "}
                  <span className="relative z-10 text-blue-600 dark:text-blue-400">
                    Solutions
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 z-0 w-full"
                    viewBox="0 0 200 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
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

              <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
                End-to-end technology services designed to secure, optimize, and
                transform your digital presence
              </p>

              {/* Category Filter Buttons */}
              <div
                className="mb-8 flex flex-wrap justify-center gap-2"
                role="group"
                aria-label="Service categories"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    }`}
                    aria-pressed={activeCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <div className="relative rounded-2xl bg-slate-50 px-8 py-12 dark:bg-slate-800/50">
                <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
                  Need Custom Enterprise Solutions?
                </h3>
                <p className="mx-auto mb-8 max-w-xl text-slate-600 dark:text-slate-400">
                  Let's discuss your organization's unique requirements and
                  build a tailored technology strategy
                </p>
                <a href="/schedule-consultation">
                  <button className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950">
                    <span className="flex items-center">
                      Schedule Consultation
                      <ArrowRight
                        className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />{" "}
    </div>
  );
}
