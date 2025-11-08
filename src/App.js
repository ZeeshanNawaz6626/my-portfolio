import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#0B1120] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;
