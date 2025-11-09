import { useState } from "react";
import Navbar from "./components/Navbar";
import ServicesDropdown from "./components/ServicesDropdown";
import AboutDropdown from "./components/AboutDropdown";
import ContentDropdown from "./components/ContentDropdown";
import ResourcesDropdown from "./components/ResourcesDropdown";
import InfoCards from "./components/InfoCards";
import SkillsSection from "./components/SkillsSection";
import Testimonials from "./components/Testimonials";
import BlogPosts from "./components/BlogPosts";
import Pricing from "./components/Pricing";
import Newsletter from "./components/Newsletter";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleAboutHover = () => {
    setIsAboutOpen(!isAboutOpen);
    // Close other dropdowns
    setIsContentOpen(false);
    setIsResourcesOpen(false);
    setIsServicesOpen(false);
  };

  const handleContentHover = () => {
    setIsContentOpen(!isContentOpen);
    // Close other dropdowns
    setIsAboutOpen(false);
    setIsResourcesOpen(false);
    setIsServicesOpen(false);
  };

  const handleResourcesHover = () => {
    setIsResourcesOpen(!isResourcesOpen);
    // Close other dropdowns
    setIsAboutOpen(false);
    setIsContentOpen(false);
    setIsServicesOpen(false);
  };

  const handleServicesHover = () => {
    setIsServicesOpen(!isServicesOpen);
    // Close other dropdowns
    setIsAboutOpen(false);
    setIsContentOpen(false);
    setIsResourcesOpen(false);
  };

  return (
    <div className="bg-[#0B1120] text-white min-h-screen relative  overflow-x-hidden">
     
      <Navbar
        onAboutHover={handleAboutHover}
        onContentHover={handleContentHover}
        onResourcesHover={handleResourcesHover}
        onServicesHover={handleServicesHover}
        isAboutOpen={isAboutOpen}
        isContentOpen={isContentOpen}
        isResourcesOpen={isResourcesOpen}
        isServicesOpen={isServicesOpen}
      />

      {/* Dropdowns - positioned absolutely below navbar */}
      <div className="relative z-40">
        {isAboutOpen && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
            <AboutDropdown />
          </div>
        )}
        {isContentOpen && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
            <ContentDropdown />
          </div>
        )}
        {isResourcesOpen && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
            <ResourcesDropdown />
          </div>
        )}
        {isServicesOpen && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 hidden lg:block">
            <ServicesDropdown />
          </div>
        )}
      </div>

{/* <Hero/>     */}

      {/* Skills & Services Section */}
      {/* <SkillsSection /> */}

      {/* Testimonials Section */}
      {/* <Testimonials /> */}

      {/* Blog Posts Section */}
      {/* <BlogPosts /> */}

      {/* Pricing Section */}
      {/* <Pricing /> */}

      {/* Newsletter Section */}
      {/* <Newsletter /> */}

      {/* CTA Section */}
      {/* <CTA /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
