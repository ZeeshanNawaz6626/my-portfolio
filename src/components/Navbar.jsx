import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#0B1120]">
      <h1 className="text-2xl font-bold text-white">Waseem Akram</h1>

      <ul className="hidden md:flex space-x-6 text-gray-300">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Content</li>
        <li className="hover:text-white cursor-pointer">Resources</li>
        <li className="hover:text-white cursor-pointer">Services</li>
      </ul>

      <button className="hidden md:block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white">
        Sign Up
      </button>
    </nav>
  );
}
