import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroProfil from "@/assets/kairi.png";
import cv from "@/assets/hanan-cv-real.pdf";
import { useScrollAnimation, scrollAnimationVariants } from "@/hooks/useScrollAnimation";
import SplitText from "./SplitText";
import LiquidEther from "./LiquidEther";

const HeroWithScroll = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-8">
      {/* LiquidEther as Background */}
      <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "white"]}
          mouseForce={25}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={1.0}
          autoIntensity={1.2}
          takeoverDuration={0}
          autoResumeDelay={300}
          autoRampDuration={0.6}
        />
      </div>

      {/* Background gradient overlay (optional - untuk efek tambahan) */}
      <div className="absolute inset-0 hero-gradient opacity-10 px-6 z-10"></div>

      {/* Main Content Container */}
      <div className="container relative z-20 mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center lg:ml-14 ml-auto">
          {/* Content */}
          <div ref={contentRef} className={`space-y-8 transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="space-y-4 ">
              <p className="text-lg text-muted-foreground tracking-wide">Hello, i'm</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <SplitText
                  text="Hanan"
                  className="text-4xl sm:text-6xl font-semibold text-center !text-purple-400"
                  delay={200}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
                <br />
                <SplitText
                  text="Fijananto"
                  className="sm:text-8xl text-4xl font-semibold text-center"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="center"
                  onLetterAnimationComplete={handleAnimationComplete}
                />
              </h1>
              <SplitText
                text="I'm very interested in everything related to technology. Exploring the world of innovation and creativity through coding, design, and development."
                className="text-xl text-muted-foreground max-w-lg leading-relaxed "
                delay={20}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="justify"
                onLetterAnimationComplete={handleAnimationComplete}
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group glow-effect bg-white hover:scale-105 transition-all duration-300">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Contact Me
              </Button>
              <a href={cv} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="group hover:bg-primary hover:scale-105 transition-all duration-300">
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download CV
                </Button>
              </a>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/Yoloez" target="_blank" rel="noopener noreferrerq" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/hanan-fijananto-1362152b7/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 transform">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div ref={imageRef} className={`flex justify-center transition-all duration-1000 ${imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-full blur-2xl opacity-30 animate-glow"></div>
              <img
                src={heroProfil}
                alt="Ahmad Developer"
                className="relative w-80 h-80 mx-auto object-cover object-center rounded-full border-4 border-primary/20 shadow-2xl scale-110 hidden lg:inline hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroWithScroll;
