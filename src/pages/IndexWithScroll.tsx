import Header from "@/components/Header";
import HeroWithScroll from "@/components/HeroWithScroll";
import AboutWithScroll from "@/components/AboutWithScroll";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SplashCursor from "../components/SplashCursor";

const IndexWithScroll = () => {
  const { ref: portfolioRef, isVisible: portfolioVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroWithScroll />
        <SplashCursor />
        <AboutWithScroll />

        {/* Portfolio Section with Scroll Animation */}
        <div ref={portfolioRef} className={`transition-all duration-1000 ${portfolioVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Portfolio />
        </div>

        {/* Skills Section with Scroll Animation */}
        <div ref={skillsRef} className={`transition-all duration-1000 ${skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Skills />
        </div>

        {/* Contact Section with Scroll Animation */}
        <div ref={contactRef} className={`transition-all duration-1000 ${contactVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <Contact />
        </div>
      </main>
      <Footer />
      {/* <div className="text-center bg-red-300 flex justify-center h-24">
        <a href="/Counter" className="text-blue-300 font-bold text-4xl mt-10 p-2 bg-red-300">
          Ke Menu Counter
        </a>
      </div> */}
    </div>
  );
};

export default IndexWithScroll;
