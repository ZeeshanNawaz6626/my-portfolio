export default function InfoCards() {
  return (
    <div className="relative w-full h-[600px] lg:h-[700px]">
      {/* SVG Canvas for connecting lines and circles - positioned behind cards */}
      <svg 
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none overflow-visible" 
        style={{ zIndex: 0 }}
        viewBox="0 0 400 700"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Large incomplete dashed circle in center */}
        <circle 
          cx="200" 
          cy="420" 
          r="120" 
          fill="none" 
          stroke="#9ca3af" 
          strokeWidth="2" 
          strokeDasharray="10,10" 
          opacity="0.4"
          strokeLinecap="round"
          pathLength="360"
          strokeDashoffset="100"
        />
        
        {/* Small circle 1 - connection point (right side) */}
        <circle 
          cx="280" 
          cy="500" 
          r="5" 
          fill="none" 
          stroke="#9ca3af" 
          strokeWidth="2" 
          opacity="0.7"
        />
        
        {/* Small circle 2 - connection point (left side) */}
        <circle 
          cx="120" 
          cy="500" 
          r="5" 
          fill="none" 
          stroke="#9ca3af" 
          strokeWidth="2" 
          opacity="0.7"
        />
        
        {/* Curved line from Cybersecurity (top-left ~100,150) curving down and right to Educator (bottom-center ~200,600) */}
        <path 
          d="M 100 150 Q 150 350 200 580" 
          fill="none" 
          stroke="#9ca3af" 
          strokeWidth="2" 
          strokeDasharray="8,8" 
          opacity="0.6"
          strokeLinecap="round"
        />
        
        {/* Curved line from Web Developer (top-right ~300,150) curving down and left to Educator (bottom-center ~200,600) */}
        <path 
          d="M 300 150 Q 250 350 200 580" 
          fill="none" 
          stroke="#9ca3af" 
          strokeWidth="2" 
          strokeDasharray="8,8" 
          opacity="0.6"
          strokeLinecap="round"
        />
      </svg>

      {/* Cards Container with proper positioning */}
      <div className="relative w-full h-full" style={{ zIndex: 1 }}>
        {/* Top-Left Card - Cybersecurity Expert */}
        <div className="absolute top-0 left-0 lg:left-0 w-full lg:w-[280px] bg-gray-900/95 backdrop-blur-sm border border-blue-500/40 rounded-2xl p-6 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:border-blue-500/60 transition-all group">
          {/* Icon in colored square */}
          <div className="w-14 h-14 bg-gradient-to-br from-blue-400/60 to-indigo-500/60 rounded-xl flex items-center justify-center mb-4 border border-blue-500/50 shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-400 transition">
            Cybersecurity Expert
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Specialized in ethical hacking, penetration testing, and security awareness training.
          </p>
        </div>

        {/* Top-Right Card - Web Developer */}
        <div className="absolute top-0 right-0 lg:right-0 w-full lg:w-[280px] bg-gray-900/95 backdrop-blur-sm border border-purple-500/40 rounded-2xl p-6 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 hover:border-purple-500/60 transition-all group mt-4 lg:mt-0">
          {/* Icon in colored square */}
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500/60 to-pink-500/60 rounded-xl flex items-center justify-center mb-4 border border-purple-500/50 shadow-lg">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
          </div>
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-400 transition">
            Web Developer
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Creating modern, responsive websites and applications with cutting-edge technologies.
          </p>
        </div>

        {/* Bottom-Center Card - Educator & Mentor */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full lg:w-[280px] bg-gray-900/95 backdrop-blur-sm border border-green-500/40 rounded-2xl p-6 shadow-2xl shadow-green-500/10 hover:shadow-green-500/20 hover:border-green-500/60 transition-all group mt-8 lg:mt-0">
          {/* Icon in colored square */}
          <div className="w-14 h-14 bg-gradient-to-br from-green-500/50 to-emerald-500/50 rounded-xl flex items-center justify-center mb-4 border border-green-500/40 shadow-lg relative">
            {/* Person icon */}
            <svg className="w-6 h-6 text-white absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" style={{ bottom: '6px' }}>
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            {/* Star/spark above head */}
            <svg className="w-4 h-4 text-white absolute" fill="currentColor" viewBox="0 0 24 24" style={{ top: '4px' }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-green-400 transition">
            Educator & Mentor
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Passionate about sharing knowledge and helping others grow in their technical journey.
          </p>
        </div>
      </div>
    </div>
  );
}

