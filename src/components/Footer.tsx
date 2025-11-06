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
      <div className="container mx-auto px-6 py-8">
        <div className="border-t border-border/50  mt-2 flex flex-col md:flex-row justify-between items-center">
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
