export default function BlogPosts() {
  const posts = [
    {
      title: "Active Directory Enumeration Basics",
      description: "Learn the fundamentals of Active Directory enumeration techniques and how to identify potential security vulnerabilities.",
      date: "Jan 15, 2024",
      readTime: "5 min read",
      image: "bg-gradient-to-br from-blue-600 to-purple-600"
    },
    {
      title: "Cyber Secret Message - TryHackMe Walkthrough",
      description: "A comprehensive walkthrough of the Cyber Secret Message challenge on TryHackMe, covering encryption and decryption techniques.",
      date: "Jan 10, 2024",
      readTime: "8 min read",
      image: "bg-gradient-to-br from-green-600 to-blue-600"
    },
    {
      title: "Building Modern React Applications",
      description: "Best practices and patterns for building scalable React applications with TypeScript and modern tooling.",
      date: "Jan 5, 2024",
      readTime: "12 min read",
      image: "bg-gradient-to-br from-purple-600 to-pink-600"
    }
  ];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20 bg-[#0D1426]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 md:mb-12">
          <div>
            <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3">
              My Content
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Recent <span className="text-blue-500">Blog Posts</span>
            </h2>
          </div>
          <a
            href="#"
            className="mt-4 sm:mt-0 text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition"
          >
            View All
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-gray-700 transition-all group"
            >
              {/* Image Placeholder */}
              <div className={`h-48 ${post.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-blue-400 transition line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

