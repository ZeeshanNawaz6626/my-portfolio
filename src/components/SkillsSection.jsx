import { useState } from "react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("All Skills");

  const tabs = ["All Skills", "Development", "Security", "Design"];

  const skills = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Web Development",
      description: "Creating modern, responsive websites and applications with cutting-edge technologies.",
      tags: ["React", "Node.js", "TypeScript"],
      category: "Development",
      color: "text-blue-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: "Cloud Infrastructure",
      description: "Infrastructure as Code templates and cloud deployment solutions.",
      tags: ["AWS", "Azure", "Docker"],
      category: "Development",
      color: "text-green-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: "Cybersecurity Services",
      description: "Comprehensive asset protection and security auditing services.",
      tags: ["Penetration Testing", "Security Audit", "Vulnerability Assessment"],
      category: "Security",
      color: "text-red-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces and experiences.",
      tags: ["Figma", "Adobe XD", "Prototyping"],
      category: "Design",
      color: "text-purple-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Mobile Development",
      description: "Building cross-platform mobile applications for iOS and Android.",
      tags: ["React Native", "Flutter", "Swift"],
      category: "Development",
      color: "text-blue-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: "Network Security",
      description: "Securing network infrastructure and implementing security protocols.",
      tags: ["Firewall", "VPN", "Network Monitoring"],
      category: "Security",
      color: "text-red-500"
    }
  ];

  const filteredSkills = activeTab === "All Skills" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20 bg-[#0D1426]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills <span className="text-blue-500">& Services Offered</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized expertise across multiple domains to help you achieve your goals
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-gray-700 transition-all group"
            >
              <div className={`${skill.color} mb-4`}>
                {skill.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-400 transition">
                {skill.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {skill.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-gray-800/80 text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

