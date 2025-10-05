import { Github, Linkedin, Mail, Heart, ArrowDown } from "lucide-react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ahmad@example.com", label: "Email" },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Hanan</h3>
            <p className="text-muted-foreground leading-relaxed">Passionate developer yang menciptakan solusi digital inovatif untuk masa depan yang lebih baik.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Let's Work Together</h4>
            <p className="text-muted-foreground">Punya project menarik? Mari diskusi dan wujudkan ide Anda.</p>
            <a href="mailto:hananfijananto@gmail.com" className="inline-block text-primary hover:text-primary/80 transition-colors">
              hananfijananto@mail.ugm.ac.id
            </a>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">©{currentYear} Hanan Fijananto. All rights reserved.</p>
          <div className="flex flex-row items-center gap-2">
            <p className="text-muted-foreground text-sm">Hover This</p>
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground text-sm flex items-center mt-2 md:mt-0">Made using React + Vite & TypeScript</p>
        </div>
      </div>
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"> */}

      <div className="hidden sm:block h-[30rem] mt-[-2rem] items-center justify-center ">
        <TextHoverEffect text="HANAN" />
      </div>
    </footer>
  );
};

export default Footer;
