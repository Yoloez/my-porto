import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Cloud, Smartphone, GitBranch, Monitor, Zap } from "lucide-react";
import { LogoLoop } from "./LogoLoop";
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiKotlin, SiLaravel, SiGit, SiMysql, SiExpo, SiCss3, SiPhp } from "react-icons/si";
import { FaHtml5, FaJava } from "react-icons/fa6";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      color: "text-blue-400",
      skills: [
        { name: "React.js/Next.js", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 90 },
        { name: "React Native Expo", level: 80 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-green-400",
      skills: [
        { name: "Laravel", level: 90 },
        { name: "MySQL", level: 85 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-purple-400",
      skills: [
        { name: "React Native", level: 75 },
        { name: "Kotlin", level: 70 },
      ],
    },
    {
      title: "Tools",
      icon: Cloud,
      color: "text-orange-400",
      skills: [{ name: "Git/GitHub", level: 95 }],
    },
  ];

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <FaHtml5 />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiCss3 />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiKotlin />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiLaravel />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiGit />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiMysql />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiExpo />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiJavascript />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiPhp />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <FaJava />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  // Alternative with image sources
  const imageLogos = [
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
    { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
    { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
  ];
  // const technologies = ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "Tailwind CSS", "React Native", "Firebase"];

  return (
    <section id="skills" className="py-20 lg:px-8 px-0">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">The technologies and tools I master to create the best digital solutions.</p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient border-border/50 hover:glow-effect transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <category.icon className="h-8 w-8 mr-3 text-gradient" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-secondary" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-semibold mb-16">
            <span className="text-gradient">Technology </span>
            <span className="!text-white">Stack</span>
          </h1>
          <div style={{ height: "150px", position: "relative", overflow: "hidden" }}>
            <LogoLoop logos={techLogos} speed={70} direction="left" logoHeight={50} gap={70} pauseOnHover scaleOnHover fadeOut fadeOutColor="#ffffff" ariaLabel="Technology partners" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
