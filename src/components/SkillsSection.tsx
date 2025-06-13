import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code, Database, Globe, Laptop, Server, Wrench } from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number;
    tags?: string[];
  }[];
}

const SkillsSection = ({ id = "skills" }: { id?: string }) => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Laptop className="h-6 w-6" />,
      skills: [
        { name: "React", level: 75, tags: ["Framework", "UI"] },
        { name: "JavaScript", level: 80, tags: ["Language"] },
        { name: "HTML/CSS", level: 85, tags: ["Markup", "Styling"] },
        { name: "Tailwind CSS", level: 70, tags: ["Framework", "Styling"] },
        { name: "Bootstrap", level: 75, tags: ["Framework"] },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Laravel", level: 80, tags: ["Framework"] },
        { name: "PHP", level: 85, tags: ["Language"] },
        { name: "Node.js", level: 65, tags: ["Runtime"] },
        { name: "REST API", level: 75, tags: ["API"] },
        { name: "MVC Architecture", level: 80, tags: ["Pattern"] },
      ],
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MySQL", level: 80, tags: ["SQL"] },
        { name: "PostgreSQL", level: 70, tags: ["SQL"] },
        { name: "Database Design", level: 75, tags: ["Design"] },
        { name: "Eloquent ORM", level: 80, tags: ["ORM"] },
      ],
    },
    {
      name: "Tools & Others",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 75, tags: ["Version Control"] },
        { name: "Composer", level: 80, tags: ["Package Manager"] },
        { name: "npm/Yarn", level: 75, tags: ["Package Manager"] },
        { name: "Postman", level: 70, tags: ["API Testing"] },
        { name: "VS Code", level: 85, tags: ["IDE"] },
      ],
    },
  ];

  return (
    <section id={id} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My technical skills as an amateur full-stack developer, focusing on
            Laravel and React development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden border bg-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="space-y-2">
                        <Progress value={skill.level} className="h-2" />
                        {skill.tags && (
                          <div className="flex flex-wrap gap-2 mt-1">
                            {skill.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      {skillIndex < category.skills.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Responsive Design",
              "Problem Solving",
              "Team Collaboration",
              "Learning Mindset",
              "Code Review",
              "Documentation",
              "Debugging",
              "Web Security",
              "Performance Optimization",
              "Clean Code",
            ].map((skill, index) => (
              <Badge key={index} className="px-3 py-1 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
