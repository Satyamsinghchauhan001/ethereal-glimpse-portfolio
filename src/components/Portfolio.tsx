import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import profileImage from "@/assets/profile-image.jpg";

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const techStack = [
    "React", "TypeScript", "Node.js", "Tailwind CSS", "MongoDB", "PostgreSQL"
  ];

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 2,
      name: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts",
      tech: ["React", "API Integration", "Tailwind CSS"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: "2s"}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-shadow">
              John Developer
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Full Stack Developer crafting modern web experiences with passion and precision
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="glass-strong glass-hover text-lg px-8 py-3 bg-primary/20 hover:bg-primary/30 border-primary/30"
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass glass-hover text-lg px-8 py-3 border-white/20 hover:bg-white/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
              >
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Passionate developer with expertise in modern web technologies
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="neu neu-hover rounded-3xl p-6 animate-scale-in">
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-80 h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* About Content */}
              <div className="space-y-6">
                <Card className="glass glass-hover p-6 border-white/10">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Who I Am</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    I'm a passionate full-stack developer with over 3 years of experience creating 
                    digital solutions that make a difference. I specialize in React, TypeScript, 
                    and Node.js, with a keen eye for modern UI/UX design.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open source projects, or sharing knowledge with the developer community.
                  </p>
                </Card>

                {/* Tech Stack */}
                <Card className="glass glass-hover p-6 border-white/10">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech) => (
                      <span 
                        key={tech}
                        className="neu px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card key={project.id} className="glass glass-hover p-6 border-white/10 h-full flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-primary">{project.name}</h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-secondary mb-2">Tech Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="neu-inset px-3 py-1 rounded-lg text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 glass border-white/20 hover:bg-white/10"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    GitHub
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-primary/20 hover:bg-primary/30 border-primary/30"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    Live Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="glass glass-hover p-6 border-white/10">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="neu w-12 h-12 rounded-xl flex items-center justify-center">
                        <span className="text-secondary">📧</span>
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-foreground/70">john@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="neu w-12 h-12 rounded-xl flex items-center justify-center">
                        <span className="text-secondary">💼</span>
                      </div>
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-foreground/70">linkedin.com/in/john</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="neu w-12 h-12 rounded-xl flex items-center justify-center">
                        <span className="text-secondary">🐙</span>
                      </div>
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-foreground/70">github.com/john</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="glass glass-hover p-6 border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="neu-inset bg-muted/50 border-0 focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="neu-inset bg-muted/50 border-0 focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="neu-inset bg-muted/50 border-0 focus:ring-2 focus:ring-primary/50 resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full glass-strong glass-hover bg-primary/20 hover:bg-primary/30 border-primary/30"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-foreground/60">
            © 2024 John Developer. Crafted with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;