import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home";
import ServicesPage from "./components/Service";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <BrowserRouter>
      <div
        className={
          isDarkMode ? "bg-gray-900 min-h-screen" : "bg-white min-h-screen"
        }
      >
        <Navbar
          onAboutHover={() => setIsAboutOpen(true)}
          onAboutLeave={() => setIsAboutOpen(false)}
          onContentHover={() => setIsContentOpen(true)}
          onContentLeave={() => setIsContentOpen(false)}
          onServicesHover={() => setIsServicesOpen(true)}
          onServicesLeave={() => setIsServicesOpen(false)}
          isAboutOpen={isAboutOpen}
          isContentOpen={isContentOpen}
          isServicesOpen={isServicesOpen}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <Routes>
          <Route path="/" element={<HomePage isDarkMode={isDarkMode} />} />
          <Route
            path="/services"
            element={<ServicesPage isDarkMode={isDarkMode} />}
          />
          <Route
            path="/about"
            element={<AboutPage isDarkMode={isDarkMode} />}
          />
          <Route
            path="/contact"
            element={<ContactPage isDarkMode={isDarkMode} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
