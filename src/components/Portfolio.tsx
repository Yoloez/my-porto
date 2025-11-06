import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import tgdemo from "@/assets/tgd-laptop.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Tempo Gala Dinner",
      description:
        "This website provides a simple and convenient way to register for our free dinner events. After completing the registration, each participant will automatically receive a unique QR code. The QR code will be used for verification during re-registration at the event, ensuring a smooth and efficient check-in process.",
      image: tgdemo,
      technologies: ["PHP Native", "MySQL", "Tailwind CSS"],
      liveUrl: "https://tgd.kmmuslimpogung.com/public/index.php?page=login",
      githubUrl: "https://github.com/Yoloez/TGD",
    },
    {
      title: "Orbyt Cafeteria Website",
      description:
        "This cafeteria website offers a seamless way for customers to browse the menu and place their orders online. With just a few clicks, you can choose your favorite meals, customize your order, and enjoy a faster, more convenient dining experience.",
      image: project2,
      technologies: ["PHP Native", "HTML", "CSS", "MySQL", "JavaScript", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "https://github.com/Yoloez/Projek-UAS",
    },
    {
      title: "SIA Global Nusantara",
      description: "A comprehensive information system designed to streamline and enhance the management of educational institutions, providing efficient solutions for administrative tasks, student data management, and academic processes.",
      image: project3,
      technologies: ["Expo", "Laravel", "React Native", "MySQL", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/Yoloez/FE-SIA-GLOBAL/tree/features/chat",
    },
    {
      title: "BMI & BMR Calculator",
      description: "A web application that helps users calculate their Body Mass Index (BMI) and Basal Metabolic Rate (BMR) based on their personal information and activity level.",
      image: project4,
      technologies: ["Next Js", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://bmi-bmr.vercel.app/",
      githubUrl: "",
    },
    {
      title: "My Portfolio Website",
      description: "A personal portfolio website to showcase my projects, skills, and experience as a developer.",
      image: project5,
      technologies: ["React JS", "Tailwind CSS", "TypeScript", "Vite", "Vercel", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-0 lg:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Several projects that I have worked on with great passion and dedication</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient border-border/50 overflow-hidden group hover:glow-effect transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 w-max">
                      <Button size="sm" variant="secondary" className="flex-1 w-max hover:bg-white hover:text-black ">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
