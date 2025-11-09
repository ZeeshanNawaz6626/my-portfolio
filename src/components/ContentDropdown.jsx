export default function ContentDropdown() {
  const items = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      ),
      title: "Blog Posts",
      description: "Read my latest articles and insights",
      color: "text-blue-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      ),
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      color: "text-red-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Courses",
      description: "Structured learning paths and courses",
      color: "text-green-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Podcasts",
      description: "Listen to tech discussions and interviews",
      color: "text-purple-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: "Webinars",
      description: "Join live sessions and workshops",
      color: "text-orange-500"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Case Studies",
      description: "Real-world project breakdowns",
      color: "text-pink-500"
    }
  ];

  return (
    <div className="w-full max-w-[550px] bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-2xl p-4 md:p-6 z-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex gap-3 group cursor-pointer hover:bg-gray-800/50 p-3 rounded-lg transition">
            <div className={`${item.color} flex-shrink-0 mt-1`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition text-sm">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

