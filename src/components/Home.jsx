import BlogPosts from "./BlogPosts";
import CTA from "./CTA";
import Footer from "./Footer";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Pricing from "./Pricing";
import SkillsSection from "./SkillsSection";
import Testimonials from "./Testimonials";

export default function HomePage({ isDarkMode }) {
  return (
    <div>
      <Hero isDarkMode={isDarkMode} />

      {/* Skills & Services Section */}
      <SkillsSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Blog Posts Section */}
      <BlogPosts />

      {/* Pricing Section */}
      <Pricing />

      {/* Newsletter Section */}
      <Newsletter />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
