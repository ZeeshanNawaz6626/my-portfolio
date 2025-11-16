import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({
  onAboutHover,
  onAboutLeave,
  onContentHover,
  onContentLeave,
  onServicesHover,
  onServicesLeave,
  isAboutOpen,
  isContentOpen,
  isServicesOpen,
  isDarkMode,
  toggleDarkMode,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const NavItem = ({ children, isOpen, onMouseEnter, onMouseLeave, to }) => {
    const isActive = location.pathname === to;

    return (
      <li
        className="relative cursor-pointer transition"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link
          to={to}
          className={`${
            isActive || isOpen
              ? "text-blue-500"
              : isDarkMode
              ? "hover:text-white"
              : "hover:text-gray-900"
          } flex items-center gap-1 relative`}
        >
          {children}
          {isActive && (
            <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"></span>
          )}
        </Link>
      </li>
    );
  };

  const MobileNavItem = ({ children, to, hasDropdown }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isActive = location.pathname === to;

    if (hasDropdown) {
      return (
        <div className=" border-b border-gray-700">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={` flex w-full items-center justify-between py-3 text-base font-medium transition-colors ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {children}
            <svg
              className={`h-5 w-5 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 9-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      );
    }

    return (
      <div>
        <Link
          to={to}
          onClick={() => setIsMobileMenuOpen(false)}
          className={` flex items-center justify-between px-3 py-2 text-base font-medium transition-colors ${
            isActive
              ? "text-blue-500 bg-blue-900/20 rounded"
              : isDarkMode
              ? "text-white hover:text-blue-400"
              : "text-gray-900 hover:text-blue-600"
          }`}
        >
          {children}
          {isActive && <span className=" text-sm text-blue-500">Active</span>}
        </Link>
      </div>
    );
  };

  return (
    <>
      <nav
        className={`${
          isDarkMode ? "bg-slate-950/50" : "bg-white"
        } fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-16 lg:px-28 py-2 transition-colors duration-300 backdrop-blur-md`}
      >
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold overflow-hidden">
            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
              <img
                alt="Logo"
                src="images/1729787557582.jpg"
                className="w-full h-full
              object-cover"
              />
              {/* <svg
                className="w-4 h-4 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg> */}
            </div>
          </div>
          <h1
            className={`text-base md:text-lg font-semibold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Zeeshan Nawaz
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul
          className={`hidden lg:flex space-x-3 xl:space-x-5 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          } text-sm`}
        >
          <NavItem to="/">Home</NavItem>
          <NavItem
            to="/services"
            isOpen={isServicesOpen}
            onMouseEnter={onServicesHover}
            onMouseLeave={onServicesLeave}
          >
            Services
          </NavItem>
          <NavItem
            to="/about"
            isOpen={isAboutOpen}
            onMouseEnter={onAboutHover}
            onMouseLeave={onAboutLeave}
          >
            About
          </NavItem>
          <NavItem
            to="/contact"
            isOpen={isContentOpen}
            onMouseEnter={onContentHover}
            onMouseLeave={onContentLeave}
          >
            Contact
          </NavItem>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className={`${
                isDarkMode
                  ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                  : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500"
              } border rounded-lg px-2 py-1 pl-9 pr-16 text-sm focus:outline-none focus:border-blue-500 w-56 transition-colors duration-300`}
            />
            <svg
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                isDarkMode ? "text-white" : "text-gray-600"
              }`}
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
            <span
              className={`absolute right-8 ${
                isDarkMode
                  ? "bg-black text-gray-500"
                  : "bg-gray-200 text-gray-600"
              } px-1 rounded top-1/2 transform -translate-y-1/2 text-xs`}
            >
              Ctrl
            </span>
            <span
              className={`absolute right-3 ${
                isDarkMode
                  ? "bg-black text-gray-500"
                  : "bg-gray-200 text-gray-600"
              } px-1 rounded top-1/2 transform -translate-y-1/2 text-xs`}
            >
              K
            </span>
          </div>

          <button
            onClick={toggleDarkMode}
            className={`p-1 ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
            } rounded-lg transition`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
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
            ) : (
              <svg
                className="w-5 h-4 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg text-white text-sm font-medium flex items-center gap-2 transition">
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
              <path d="m10 17 5-5-5-5"></path>
              <path d="M15 12H3"></path>
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
            </svg>
            My Resume
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className={`p-1.5 ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
            } rounded-lg transition`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <svg
                className="w-5 h-5 text-white"
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
            ) : (
              <svg
                className="w-5 h-5 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-1.5 ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
            } rounded-lg transition`}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 lg:hidden ${
            isDarkMode ? "bg-slate-950" : "bg-white"
          } pt-16 transition-all duration-300`}
        >
          <div className="flex flex-col h-full px-6 py-6">
            {/* Navigation Links */}
            <nav className="flex-1 space-y-1">
              <MobileNavItem to="/">Home</MobileNavItem>
              <MobileNavItem to="/services">Services</MobileNavItem>
              <MobileNavItem to="/about">About</MobileNavItem>
              <MobileNavItem to="/contact">Contact</MobileNavItem>
            </nav>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-gray-700">
              <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 transition">
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
                  className="h-5 w-5"
                >
                  <path d="m10 17 5-5-5-5"></path>
                  <path d="M15 12H3"></path>
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                </svg>
                My Resume
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full py-3 rounded-lg text-sm font-medium transition ${
                  isDarkMode
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
