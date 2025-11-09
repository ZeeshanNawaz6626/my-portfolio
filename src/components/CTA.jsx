export default function CTA() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20 bg-[#0B1120]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Ready to Enhance Your <span className="text-blue-500">Tech Skills?</span>
        </h2>
        <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
          Explore my content, services, and resources to take your technical journey to the next level. 
          Join thousands of learners who are already growing with me.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-lg text-white font-medium transition-all hover:scale-105">
            Explore Content
          </button>
          <button className="border border-gray-600 hover:border-gray-500 px-6 md:px-8 py-3 md:py-4 rounded-lg text-white font-medium transition-all hover:bg-gray-800/50">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

