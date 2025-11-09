export default function AboutDropdown() {
    const items = [
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
          </svg>
        ),
        title: "My Story",
        description: "Learn about my journey and background",
        color: "text-blue-500"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ),
        title: "Achievements",
        description: "Awards, certifications, and milestones",
        color: "text-yellow-500"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        ),
        title: "Education",
        description: "Academic background and qualifications",
        color: "text-green-500"
      },
      {
        icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ),
        title: "Experience",
        description: "Professional work history and projects",
        color: "text-purple-500"
      }
    ];
  
    return (
      <div className="w-full max-w-[600px] bg-gray-900/95 backdrop-blur-sm border border-gray-800 rounded-2xl shadow-4xl p-4 md:p-6 z-50 -mr-32">
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