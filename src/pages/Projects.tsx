import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/utils";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const Projects = () => {
  // Project images for carousel
  const projectImages = [
    "photo-1488590528505-98d2b5aba04b",
    "photo-1461749280684-dccba630e2f6", 
    "photo-1581091226825-a6a2a5aee158",
    "photo-1486312338219-ce68d2c6f44d",
    "photo-1531297484001-80022131f5a1",
    "photo-1487058792275-0ad4aaf24ca7"
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={item}>
              <Card className="glass glass-hover p-0 border-white/10 h-full flex flex-col overflow-hidden">
                {/* Image Carousel */}
                <div className="relative h-48 overflow-hidden">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    plugins={[
                      Autoplay({
                        delay: 3000 + (index * 500), // Stagger autoplay for different cards
                        stopOnInteraction: false,
                      }),
                    ]}
                    className="w-full h-full"
                  >
                    <CarouselContent className="h-full">
                      {projectImages.slice(0, 3).map((image, imgIndex) => (
                        <CarouselItem key={imgIndex} className="h-full">
                          <div className="relative h-full">
                            <img
                              src={`https://images.unsplash.com/${image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`}
                              alt={`${project.name} preview ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {project.name}
                    </h3>
                    <p className="text-foreground/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-secondary mb-2">
                        Tech Used:
                      </h4>
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
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary/20 hover:bg-primary/30 border-primary/30"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
