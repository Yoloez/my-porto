import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <div className="text-center bg-red-300 flex justify-center h-24">
        <a href="/Counter" className="text-blue-300 font-bold text-4xl mt-10 p-2 bg-red-300">
          Ke Menu Counter
        </a>
      </div>
    </div>
  );
};

export default Index;
