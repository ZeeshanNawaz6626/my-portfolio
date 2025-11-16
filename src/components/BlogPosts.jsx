export default function BlogPosts() {
  const posts = [
    {
      title: "Active Directory Pentesting Resources (2025 Guide)",
      description:
        "Discover the best Active Directory pentesting resources in 2025 — tools, labs, and attack techniques for mastering AD security.",
      date: "Sep 8, 2025",
      readTime: "8 min read",
      image:
        "/images/active-directory-resources-KbppQgFEFhunkaJ3UtRbcoqwu0tS3e.avif", // Replace with your actual image filename
      tags: ["Cybersecurity", "Active Directory", "Pentesting", "Resources"],
      slug: "active-directory-resources",
    },
    {
      title: "Cyber Secret Message - TryHackMe Walkthrough",
      description:
        "A comprehensive walkthrough of the Cyber Secret Message challenge on TryHackMe, covering encryption and decryption techniques.",
      date: "Jan 10, 2024",
      readTime: "8 min read",
      image:
        "/images/ciphers-secret-message-tryhackme-walkthrough-vEF2jhe0wRp2baw7kAEo6aFO8C7AD0.avif", // Replace with your actual image filename
      tags: ["TryHackMe", "CTF", "Cryptography", "Walkthrough"],
      slug: "cyber-secret-message",
    },
    {
      title: "Building Modern React Applications",
      description:
        "Best practices and patterns for building scalable React applications with TypeScript and modern tooling.",
      date: "Jan 5, 2024",
      readTime: "12 min read",
      image:
        "/images/active-directory-resources-KbppQgFEFhunkaJ3UtRbcoqwu0tS3e.avif", // Replace with your actual image filename
      tags: ["React", "TypeScript", "Web Development", "Best Practices"],
      slug: "modern-react-applications",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-10">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-blue-50/50 dark:bg-blue-950/20"></div>
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-50/50 dark:bg-purple-950/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              Latest Articles
            </span>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              Recent{" "}
              <span className="relative">
                <span className="relative z-10 text-blue-600 dark:text-blue-400">
                  Blog Posts
                </span>
                <svg
                  className="absolute -bottom-2 left-0 z-0 w-full"
                  viewBox="0 0 200 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,17 C50,5 100,30 200,17 L200,20 L0,20 Z"
                    fill="#3b82f6"
                    fillOpacity="0.3"
                    className="dark:fill-blue-900"
                  />
                </svg>
              </span>
            </h2>
          </div>
          {/* <a href="/blog">
            <button className="text-white inline-flex items-center gap-2 rounded-md border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 text-sm font-medium transition-all">
              View All Posts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </a> */}
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 transition-all hover:shadow-md"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add(
                      "bg-gradient-to-br",
                      index === 0
                        ? "from-blue-600"
                        : index === 1
                        ? "from-green-600"
                        : "from-purple-600",
                      index === 0
                        ? "to-purple-600"
                        : index === 1
                        ? "to-blue-600"
                        : "to-pink-600"
                    );
                  }}
                />
              </div>

              <div className="p-6">
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium border-transparent bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <a className="block" href={`/blog/${post.slug}`}>
                  <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {post.title}
                  </h3>
                </a>

                {/* Description */}
                <p className="mb-4 text-slate-600 dark:text-slate-400">
                  {post.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 6v6l4 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
