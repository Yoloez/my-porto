import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroProfil from "@/assets/kairi.png";
import cv from "@/assets/hanan-cv-real.pdf";
import { useScrollAnimation, scrollAnimationVariants } from "@/hooks/useScrollAnimation";

const HeroWithScroll = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-center lg:ml-14 ml-auto">
          {/* Content */}
          <div ref={contentRef} className={`space-y-8 transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground tracking-wide">Hello, i'm</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient">Hanan</span>
                <br />
                <span className="text-foreground">Fijananto</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed text-justify">
                I'm very interested in everything related to technology. Exploring the world of innovation and creativity through coding, design, and development.
              </p>
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
