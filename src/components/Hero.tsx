import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground tracking-wide">Halo, saya</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient">Ahmad</span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Saya menciptakan pengalaman digital yang menakjubkan dengan teknologi modern. 
                Spesialisasi dalam pengembangan web full-stack dan mobile apps.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group glow-effect">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Hubungi Saya
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download CV
              </Button>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-left">
            <div className="relative">
              <div className="absolute inset-0 hero-gradient rounded-full blur-2xl opacity-30 animate-glow"></div>
              <img
                src={heroPortrait}
                alt="Ahmad Developer"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/20 shadow-2xl"
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

export default Hero;