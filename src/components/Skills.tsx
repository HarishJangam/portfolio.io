import { Card } from "@/components/ui/card";
import { Code, Database, Server, GitBranch, Shield, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["Java", "C++", "SQL", "Spring Boot", "Spring Security", "Hibernate", "JPA"],
    color: "text-blue-400"
  },
  {
    title: "API & Integration",
    icon: Server,
    skills: ["REST APIs", "SOAP", "OAuth2", "JWT", "Microservices", "Third-party API Integrations"],
    color: "text-green-400"
  },
  {
    title: "Data & Messaging",
    icon: Database,
    skills: ["MySQL", "JPA", "SQL Query Optimization", "Domain Modeling", "Data Consistency"],
    color: "text-purple-400"
  },
  {
    title: "DevOps & Delivery",
    icon: Settings,
    skills: ["Git", "Maven", "Jenkins", "AWS", "Datadog", "Linux", "Production Support"],
    color: "text-orange-400"
  },
  {
    title: "Testing & Quality",
    icon: Shield,
    skills: ["JUnit", "Mockito", "Exception Handling", "Request Validation", "Unit Testing"],
    color: "text-cyan-400"
  },
  {
    title: "Problem Solving",
    icon: GitBranch,
    skills: ["LeetCode (500+)", "GeeksforGeeks (180+)", "Data Structures", "Algorithms", "System Design", "OOP"],
    color: "text-pink-400"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-mobile md:text-section font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Backend skill set focused on microservices, API integrations, and performance optimization
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-4 md:p-6 bg-card-gradient border-border hover:border-primary/30 transition-all duration-300 hover:shadow-subtle-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary">
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-card-title-mobile md:text-card-title font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-secondary/60 text-secondary-foreground rounded-full border border-border group-hover:border-primary/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
