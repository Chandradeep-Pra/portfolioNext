import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Skills /> */}
      {/* <Experience /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
