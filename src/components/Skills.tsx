import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Cloud, Smartphone, GitBranch, Monitor, Zap } from "lucide-react";

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
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-purple-400",
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 75 },
        { name: "iOS Development", level: 70 },
        { name: "Android Development", level: 70 },
      ],
    },
    {
      title: "Tools",
      icon: Cloud,
      color: "text-orange-400",
      skills: [{ name: "Git/GitHub", level: 95 }],
    },
  ];

  const technologies = ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "Tailwind CSS", "React Native", "Firebase"];

  return (
    <section id="skills" className="py-20 lg:px-8 px-0">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Teknologi dan tools yang saya kuasai untuk menciptakan solusi digital terbaik</p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-gradient border-border/50 hover:glow-effect transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <category.icon className={`h-8 w-8 mr-3 ${category.color}`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default" style={{ animationDelay: `${index * 0.05}s` }}>
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
