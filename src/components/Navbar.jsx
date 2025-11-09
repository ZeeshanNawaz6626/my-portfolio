import { useState } from "react";

export default function Navbar({
  onAboutHover,
  onAboutLeave,
  onContentHover,
  onContentLeave,
  onResourcesHover,
  onResourcesLeave,
  onServicesHover,
  onServicesLeave,
  isAboutOpen,
  isContentOpen,
  isResourcesOpen,
  isServicesOpen,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const DropdownArrow = ({ isOpen }) => (
    <svg
      className={`w-3 h-3 transition-transform duration-200 ease-in-out ${
        isOpen ? "rotate-180" : ""
      }`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  const NavItem = ({
    children,
    isOpen,
    onMouseEnter,
    onMouseLeave,
    hasDropdown = false,
  }) => (
    <li
      className="relative cursor-pointer transition"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span
        className={`${
          isOpen ? "text-blue-500" : "hover:text-white"
        } flex items-center gap-1 relative`}
      >
        {children}
        {hasDropdown && <DropdownArrow isOpen={isOpen} />}
      </span>
    </li>
  );

  return (
    <nav className="dark:bg-slate-950/50 relative flex justify-between items-center px-16 md:px-28 py-2">
      <div className="flex items-center gap-3 ml-10">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold overflow-hidden">
          <div className="w-full h-full bg-gray-700 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
            </svg>
          </div>
        </div>
        <h1 className="text-lg md:text-lg font-semibold text-white">
          Zeeshan Nawaz
        </h1>
      </div>

      <ul className="hidden lg:flex space-x-3 xl:space-x-5 text-gray-300 text-sm md:text-sm ml-10">
        <li className="relative cursor-pointer transition text-white">
          <span className="relative text-blue-500">
            Home
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"></span>
          </span>
        </li>
        <NavItem
          isOpen={isAboutOpen}
          onMouseEnter={onAboutHover}
          onMouseLeave={onAboutLeave}
          hasDropdown
        >
          About
        </NavItem>
        <NavItem
          isOpen={isContentOpen}
          onMouseEnter={onContentHover}
          onMouseLeave={onContentLeave}
          hasDropdown
        >
          Content
        </NavItem>
        <NavItem
          isOpen={isResourcesOpen}
          onMouseEnter={onResourcesHover}
          onMouseLeave={onResourcesLeave}
          hasDropdown
        >
          Resources
        </NavItem>
        <NavItem
          isOpen={isServicesOpen}
          onMouseEnter={onServicesHover}
          onMouseLeave={onServicesLeave}
          hasDropdown
        >
          Services
        </NavItem>
      </ul>

      <div className="hidden lg:flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-900 border border-gray-700 rounded-lg px-2 py-1 pl-9 pr-16 text-sm text-white placeholder-white-500 focus:outline-none focus:border-blue-500 w-56"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="absolute right-8 bg-black px-1 rounded top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
            Ctrl
          </span>
          <span className="absolute right-3 bg-black px-1 rounded top-1/2 transform -translate-y-1/2 text-xs text-gray-500">
            K
          </span>
        </div>

        <button className="p-1 hover:bg-gray-800 rounded-lg transition">
          <svg
            className="w-5 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>

        <button className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded-lg text-white text-sm font-medium flex items-center gap-2 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="m10 17 5-5-5-5"></path>
            <path d="M15 12H3"></path>
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          </svg>
          Sign Up
        </button>
      </div>
    </nav>
  );
}