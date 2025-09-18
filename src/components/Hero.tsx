import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroProfil from "@/assets/profil hanan 4k.jpeg";
import cv from "@/assets/hanan-cv-real.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
          <div className="space-y-8 animate-fade-in">
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
              <Button size="lg" className="group glow-effect bg-white">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Contact Me
              </Button>
              <a href={cv} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="group hover:bg-primary">
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download CV
                </Button>
              </a>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/Yoloez" target="_blank" rel="noopener noreferrerq" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/hanan-fijananto-1362152b7/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-fade-in-left">
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-full blur-2xl opacity-30 animate-glow"></div>
              <img src={heroProfil} alt="Ahmad Developer" className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/20 shadow-2xl" />
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

export default Hero;
