import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, ArrowLeft, MapPin, Phone, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with actions - hidden in print */}
      <div className="no-print sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <Button onClick={handlePrint} size="sm">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="bg-card border-border print:border-0 print:shadow-none">
          <CardContent className="p-8 print:p-6">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                HARISH JANGAM
              </h1>
              <p className="text-lg text-primary font-semibold mb-4">
                JAVA BACKEND DEVELOPER
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Bengaluru, India
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  +91 9505856020
                </div>
                <a href="https://www.linkedin.com/in/jangamharish/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href="https://github.com/HarishJangam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  jangamharish949@gmail.com
                </div>
              </div>
            </div>

            <Separator className="mb-6" />

            {/* Professional Summary */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">PROFESSIONAL SUMMARY</h2>
              <p className="text-muted-foreground leading-relaxed">
                Backend Engineer with 2.7+ years of experience designing and scaling high-traffic microservices
                and airline booking integrations. Specialized in Java, Spring Boot, distributed systems,
                third-party API integrations, and performance optimization for travel platforms serving
                millions of requests.
              </p>
            </section>

            <Separator className="mb-6" />

            {/* Technical Skills */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">TECHNICAL SKILLS</h2>
              <div className="space-y-2 text-muted-foreground">
                <div><strong>Languages:</strong> Java, C++, SQL</div>
                <div><strong>Frameworks & Libs:</strong> Spring Boot, Spring Security, Hibernate, JPA, JUnit, Mockito</div>
                <div><strong>API & Integration:</strong> REST APIs, SOAP, OAuth2, JWT, Microservices</div>
                <div><strong>Tools:</strong> MySQL, Postman, Git, Maven, Jenkins, AWS, Datadog, Linux</div>
              </div>
            </section>

            <Separator className="mb-6" />

            {/* Experience */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">PROFESSIONAL EXPERIENCE</h2>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Software Engineer I | Wego</h3>
                  <span className="text-sm text-muted-foreground">Feb 2025 - Present</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2 italic">Bengaluru</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Developed and maintained airline booking integrations with multiple airlines and GDS providers (Sabre, Air Arabia, Hitit) using Java and Spring Boot.</li>
                  <li>Supported end-to-end booking workflows including Search, Pricing, Revalidation, Booking, and Ticketing.</li>
                  <li>Built and optimized third-party API integration modules, reducing integration-related failures by approximately 10%.</li>
                  <li>Implemented asynchronous processing for multi-provider booking flows, improving response times by 10–12%.</li>
                  <li>Developed ancillary service integrations for seats, baggage, and meals, contributing to an estimated 8–10% increase in ancillary booking revenue.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Associate Software Engineer | Crio.Do</h3>
                  <span className="text-sm text-muted-foreground">Oct 2023 - Jan 2025</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2 italic">Bengaluru</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Developed and maintained RESTful APIs using Java, Spring Boot, Hibernate, and MySQL.</li>
                  <li>Diagnosed and resolved API validation, business logic, and data-related issues, reducing recurring defects by approximately 10–15%.</li>
                  <li>Performed database operations and optimized SQL queries using JPA and MySQL.</li>
                  <li>Participated in production debugging, monitoring, and release activities.</li>
                </ul>
              </div>
            </section>

            <Separator className="mb-6" />

            {/* Projects */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">PROJECTS</h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">E-Commerce Application | Java, Spring Boot, JPA</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>Developed User Service and Product Service using Java, Spring Boot, and MySQL following microservice architecture principles.</li>
                  <li>Implemented authentication and authorization using Spring Security, OAuth2, and JWT.</li>
                  <li>Designed and developed RESTful APIs following the MVC architecture pattern.</li>
                  <li>Implemented exception handling, request validation, and unit test cases using JUnit.</li>
                </ul>
              </div>
            </section>

            <Separator className="mb-6" />

            {/* Achievements */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-foreground mb-3">ACHIEVEMENTS</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Solved 500+ problems on LeetCode.</li>
                <li>Solved 180+ problems on GeeksforGeeks.</li>
                <li>Strong understanding of Data Structures, Algorithms, OOP, and System Design fundamentals.</li>
              </ul>
            </section>

            <Separator className="mb-6" />

            {/* Education */}
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">EDUCATION</h2>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Bachelor of Technology (B.Tech) — Computer Science and Engineering</h3>
                  <p className="text-muted-foreground">Christu Jyothi Institute Of Technology And Science, Hyderabad, India</p>
                </div>
                <span className="text-sm text-muted-foreground">Aug 2018 - Aug 2022</span>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
