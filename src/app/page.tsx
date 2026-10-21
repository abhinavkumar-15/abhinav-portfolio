import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import Milestones from "@/components/sections/Milestones";
import Beyond from "@/components/sections/Beyond";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Milestones />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
