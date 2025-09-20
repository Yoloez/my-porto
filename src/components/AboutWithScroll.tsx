import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Rocket, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutWithScroll = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.2 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.2 });

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Menulis kode yang bersih, maintainable, dan scalable",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Menciptakan interface yang intuitif dan user-friendly",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimasi performa untuk pengalaman pengguna terbaik",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Bekerja efektif dalam tim dan komunikasi yang baik",
    },
  ];

  return (
    <section ref={aboutRef} id="about" className="py-20 px-0 lg:px-6">
      <div className="container mx-auto">
        <div ref={contentRef} className={`text-center mb-16 transition-all duration-1000 ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">I am a third-semester Software Engineering student at Gadjah Mada University</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Perjalanan Karir</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dimulai dari curiosity tentang bagaimana website bekerja, saya mulai belajar programming secara autodidak. Sekarang saya fokus pada pengembangan aplikasi web modern menggunakan teknologi terkini seperti React, Node.js, dan
                cloud technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Saya percaya bahwa teknologi harus memberikan solusi nyata untuk masalah nyata. Itulah mengapa saya selalu berusaha memahami kebutuhan bisnis dan user experience dalam setiap project yang saya kerjakan.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Full Stack Developer</Badge>
              <Badge variant="outline">UI/UX Enthusiast</Badge>
              <Badge variant="outline">Open Source Contributor</Badge>
            </div>
          </div>

          <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 delay-300 ${cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {highlights.map((item, index) => (
              <Card key={index} className={`card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 group hover:glow-effect hover:scale-105 ${cardsVisible ? "animate-delay-" + (index + 1) * 100 : ""}`}>
                <CardContent className="p-6">
                  <item.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWithScroll;
