export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center px-10 py-16">
      <div className="max-w-xl">
        <p className="text-blue-400 font-medium mb-2">
          👋 Hi, I am Waseem Akram
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Empowering <span className="text-blue-500">Minds</span> & Inspiring{" "}
          <span className="text-blue-500">Change</span>
        </h1>
        <p className="text-gray-400 mb-6">
          As a passionate educator and lifelong learner, I am dedicated to
          sharing my knowledge and expertise in cybersecurity, web development,
          design, and personal growth.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {["Cybersecurity", "Web Development", "Education", "Design"].map(
            (tag) => (
              <span
                key={tag}
                className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>

        <div className="flex gap-4">
          <button className="bg-blue-600 px-4 py-2 rounded-lg">
            Read Blog Posts →
          </button>
          <button className="border border-gray-500 px-4 py-2 rounded-lg">
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
}
