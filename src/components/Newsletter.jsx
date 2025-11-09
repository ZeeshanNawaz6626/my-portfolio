export default function Newsletter() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16 bg-[#0D1426]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Subscribe to my <span className="text-blue-500">newsletter</span>
        </h2>
        <p className="text-gray-400 mb-8">
          Get the latest updates, tutorials, and exclusive content delivered to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-medium transition-all whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

