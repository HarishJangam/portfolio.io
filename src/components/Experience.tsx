import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Award } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer I",
    company: "Wego",
    period: "Feb 2025 - Present",
    type: "Current Role",
    highlights: [
      "Developed and maintained airline booking integrations with multiple airlines and GDS providers (Sabre, Air Arabia, Hitit) using Java and Spring Boot",
      "Built end-to-end booking workflows including Search, Pricing, Revalidation, Booking, and Ticketing",
      "Built and optimized third-party API integration modules, reducing integration-related failures by approximately 10%",
      "Implemented asynchronous processing for multi-provider booking flows, improving response times by 10–12%",
      "Developed ancillary service integrations for seats, baggage, and meals, contributing to an estimated 8–10% increase in ancillary booking revenue"
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "SOAP", "Microservices", "AWS", "Datadog"],
    achievements: [
      "10% reduction in integration-related failures",
      "10–12% improvement in booking response times",
      "8–10% increase in ancillary booking revenue"
    ]
  },
  {
    title: "Associate Software Engineer",
    company: "Crio.Do",
    period: "Oct 2023 - Jan 2025",
    type: "1.3 Years",
    highlights: [
      "Developed and maintained RESTful APIs using Java, Spring Boot, Hibernate, and MySQL",
      "Diagnosed and resolved API validation, business logic, and data-related issues",
      "Reduced recurring defects by approximately 10–15% through systematic debugging and fixes",
      "Performed database operations and optimized SQL queries using JPA and MySQL",
      "Participated in production debugging, monitoring, and release activities"
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "JPA", "MySQL", "REST APIs", "JUnit"],
    achievements: [
      "10–15% reduction in recurring defects",
      "Improved application performance through SQL query optimization",
      "Contributed to smooth production deployments and release cycles"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-mobile md:text-section font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            2.7+ years of backend engineering building scalable microservices and airline booking integrations
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.title + exp.company}
              className="p-4 md:p-8 bg-card-gradient border-border hover:border-primary/30 transition-all duration-500 hover:shadow-subtle-glow"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3 className="text-card-title-mobile md:text-card-title font-bold text-card-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium text-lg mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Badge
                    variant="outline"
                    className={`${exp.type === 'Current Role' ? 'border-primary text-primary' : 'border-muted-foreground text-muted-foreground'}`}
                  >
                    {exp.type}
                  </Badge>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Key Contributions
                </h4>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              {exp.achievements && (
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="bg-secondary/30 p-3 rounded-lg border border-border">
                        <span className="text-sm text-card-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
