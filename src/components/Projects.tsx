import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Trophy, TrendingUp } from "lucide-react";
import ProjectDialog from "./ProjectDialog";

const projects = [
  {
    title: "Airline Booking Integration Platform",
    client: "Wego",
    description: "Built and maintained airline booking integrations with multiple airlines and GDS providers, supporting end-to-end booking workflows for a global travel platform.",
    impact: [
      "10% reduction in integration-related failures",
      "10–12% improvement in booking response times",
      "End-to-end workflows: Search, Pricing, Booking, Ticketing"
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "SOAP", "Microservices", "AWS"],
    type: "Enterprise Integration",
    status: "Live & Scaling"
  },
  {
    title: "Ancillary Services Integration",
    client: "Wego",
    description: "Developed ancillary service integrations for seats, baggage, and meals, standardizing airline API responses into internal domain models.",
    impact: [
      "8–10% increase in ancillary booking revenue",
      "Standardized multi-airline API responses",
      "Seamless add-on booking experience"
    ],
    technologies: ["Java", "Spring Boot", "REST APIs", "Domain Modeling", "MySQL"],
    type: "Revenue Optimization",
    status: "Production"
  },
  {
    title: "E-Commerce Application",
    client: "Personal Project",
    description: "Developed a microservices-based e-commerce platform with User Service and Product Service, secured with OAuth2 and JWT authentication.",
    impact: [
      "Microservice architecture with separate services",
      "Secure authentication and authorization",
      "RESTful APIs with comprehensive test coverage"
    ],
    technologies: ["Java", "Spring Boot", "Spring Security", "OAuth2", "JWT", "MySQL", "JUnit"],
    type: "Full-Stack Backend",
    status: "Completed"
  },
  {
    title: "RESTful API Development",
    client: "Crio.Do",
    description: "Developed and maintained RESTful APIs supporting feature enhancements and backend application functionality with optimized database operations.",
    impact: [
      "10–15% reduction in recurring defects",
      "Improved application stability and performance",
      "Optimized SQL queries for data consistency"
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "JPA", "MySQL", "REST APIs"],
    type: "API Development",
    status: "Production"
  }
];

type ProjectWithDetails = typeof projects[0] & {
  problem: string;
  solution: string;
  metrics: string[];
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectWithDetails | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject({
      ...project,
      problem: getProjectProblem(project.title),
      solution: getProjectSolution(project.title),
      metrics: getProjectMetrics(project.title)
    });
    setIsDialogOpen(true);
  };

  const getProjectProblem = (title: string) => {
    switch (title) {
      case "Airline Booking Integration Platform":
        return "Wego needed reliable integrations with multiple airlines and GDS providers (Sabre, Air Arabia, Hitit) to support end-to-end flight booking at scale, but inconsistent API responses and integration failures were impacting booking success rates.";
      case "Ancillary Services Integration":
        return "Travel platforms often miss ancillary revenue opportunities because airline APIs for seats, baggage, and meals have inconsistent formats and require complex normalization before they can be offered to users.";
      case "E-Commerce Application":
        return "Building a secure, scalable e-commerce backend required separating user and product concerns into independent services while ensuring authenticated access and reliable API operations.";
      case "RESTful API Development":
        return "The backend application faced recurring API validation errors, business logic bugs, and data inconsistencies that affected application stability and user experience.";
      default:
        return "Complex business challenges requiring scalable technical solutions.";
    }
  };

  const getProjectSolution = (title: string) => {
    switch (title) {
      case "Airline Booking Integration Platform":
        return "Developed Java and Spring Boot integration modules for multiple airlines and GDS providers, implementing asynchronous processing for multi-provider booking flows and standardizing responses into internal domain models.";
      case "Ancillary Services Integration":
        return "Built ancillary service integration modules for seats, baggage, and meals, mapping diverse airline API responses into a unified internal domain model to enable seamless add-on bookings.";
      case "E-Commerce Application":
        return "Designed User Service and Product Service following microservice architecture, implemented Spring Security with OAuth2 and JWT, and built RESTful APIs with exception handling, validation, and JUnit test coverage.";
      case "RESTful API Development":
        return "Developed and maintained RESTful APIs using Java, Spring Boot, Hibernate, and MySQL. Systematically diagnosed and resolved validation, logic, and data issues while optimizing SQL queries through JPA.";
      default:
        return "Innovative technical solutions leveraging modern backend technologies and best practices.";
    }
  };

  const getProjectMetrics = (title: string) => {
    switch (title) {
      case "Airline Booking Integration Platform":
        return [
          "10% reduction in integration-related failures",
          "10–12% improvement in response times",
          "Multi-provider async booking flows",
          "Full booking lifecycle support"
        ];
      case "Ancillary Services Integration":
        return [
          "8–10% increase in ancillary revenue",
          "Standardized multi-airline responses",
          "Seats, baggage, and meals integration",
          "Unified domain model architecture"
        ];
      case "E-Commerce Application":
        return [
          "Microservice architecture implemented",
          "OAuth2 and JWT secured endpoints",
          "Comprehensive unit test coverage",
          "MVC pattern RESTful APIs"
        ];
      case "RESTful API Development":
        return [
          "10–15% reduction in recurring defects",
          "Improved SQL query performance",
          "Enhanced application stability",
          "Smooth production deployments"
        ];
      default:
        return [];
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-mobile md:text-section font-bold text-foreground mb-4">
            Key Projects & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Backend solutions delivering measurable impact in travel integrations and scalable API development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="p-4 md:p-6 bg-card-gradient border-border hover:border-primary/30 transition-all duration-500 hover:shadow-subtle-glow group h-full cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-card-title-mobile md:text-card-title font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium">{project.client}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    {project.status}
                  </Badge>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Impact Metrics */}
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  Business Impact
                </h4>
                <div className="space-y-2">
                  {project.impact.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Trophy className="w-3 h-3 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-card-foreground mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary/60 text-secondary-foreground rounded border border-border group-hover:border-primary/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Type */}
              <div className="flex justify-between items-center">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20"
                >
                  {project.type}
                </Badge>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <ProjectDialog
        project={selectedProject}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </section>
  );
};

export default Projects;
