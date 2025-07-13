import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/utils";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="glass glass-hover p-6 border-white/10 h-full flex flex-col"
            >
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
