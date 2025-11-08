export default function Skills() {
  const skills = [
    { title: "Web Development", desc: "Modern, responsive UI components..." },
    {
      title: "Cloud Infrastructure",
      desc: "Infrastructure as Code templates...",
    },
    {
      title: "Cybersecurity Services",
      desc: "Comprehensive asset protection...",
    },
  ];

  return (
    <section className="px-10 py-20 bg-[#0D1426]">
      <h2 className="text-3xl font-bold text-center mb-4">
        Skills <span className="text-blue-500">& Services Offered</span>
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Specialized expertise across multiple domains...
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="bg-gray-900 p-6 rounded-2xl shadow-md hover:-translate-y-2 transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              {skill.title}
            </h3>
            <p className="text-gray-400">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
