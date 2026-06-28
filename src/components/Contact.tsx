import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-section-mobile md:text-section font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities in backend engineering, microservices, or API integrations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {/* Contact Information */}
            <Card className="p-4 md:p-8 bg-card-gradient border-border">
              <h3 className="text-card-title-mobile md:text-card-title font-bold text-card-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <p className="text-muted-foreground">jangamharish949@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 9505856020</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Bengaluru, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-medium text-card-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/HarishJangam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jangamharish/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-4 md:p-8 bg-card-gradient border-border">
              <h3 className="text-card-title-mobile md:text-card-title font-bold text-card-foreground mb-6">
                Quick Actions
              </h3>

              <div className="space-y-4">
                <Button
                  className="w-full justify-start bg-primary hover:bg-primary/90 text-primary-foreground shadow-accent-glow hover:shadow-accent-glow transition-all duration-300"
                  size="lg"
                  onClick={() => window.open("mailto:jangamharish949@gmail.com", "_self")}
                >
                  <Mail className="w-4 h-4 mr-3" />
                  Send Email
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  size="lg"
                  onClick={() => window.open("/resume", "_blank")}
                >
                  <Download className="w-4 h-4 mr-3" />
                  Download Resume
                </Button>

                <Button
                  variant="outline"
                  className="w-full justify-start border-border hover:border-primary/30 hover:bg-secondary transition-all duration-300"
                  size="lg"
                  onClick={() => window.open("tel:+919505856020", "_self")}
                >
                  <Phone className="w-4 h-4 mr-3" />
                  Call Now
                </Button>
              </div>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-secondary/50 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="font-medium text-card-foreground">Available for Opportunities</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Open to discussing backend engineering roles, microservices positions,
                  and challenging projects in travel tech or enterprise software.
                </p>
              </div>
            </Card>
          </div>

          {/* Professional Summary */}
          <Card className="p-4 md:p-8 bg-card-gradient border-border text-center">
            <h3 className="text-card-title-mobile md:text-card-title font-bold text-card-foreground mb-4">
              Professional Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Backend Engineer with 2.7+ years of experience designing and scaling high-traffic microservices
              and airline booking integrations. Specialized in Java, Spring Boot, distributed systems,
              third-party API integrations, and performance optimization for travel platforms serving
              millions of requests. Strong problem-solving skills with 500+ LeetCode and 180+ GeeksforGeeks solutions.
            </p>
          </Card>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
