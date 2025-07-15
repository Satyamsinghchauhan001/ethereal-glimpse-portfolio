import { Card } from "@/components/ui/card";
import { slideInLeft, slideInRight, techStack } from "@/utils";
import profileImage from "@/assets/satyam.jpg";
import { motion } from "framer-motion";

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Profile Image */}
            <motion.div className="flex justify-center" variants={slideInLeft}>
              <div className="neu neu-hover rounded-3xl p-6 hover:rotate-1 transition-all duration-500 group">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-80 h-80 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div className="space-y-6" variants={slideInRight}>
              <motion.div variants={slideInRight}>
                <Card className="glass glass-hover p-6 border-white/10 hover:border-secondary/30 transition-all duration-500">
                  <h3 className="text-2xl font-semibold mb-4 text-secondary ">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        className="neu px-4 py-1 rounded-xl text-sm font-medium hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer hover:bg-primary/10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                          transition: { delay: index * 0.1 },
                        }}
                        viewport={{ once: false, amount: 0.8 }}
                        whileHover={{ scale: 1.1, rotate: 2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={slideInRight}>
                <Card className="relative glass glass-hover p-6 border-white/10 hover:border-primary/30 transition-all duration-500">
                  <h3 className="text-2xl font-semibold mb-4 text-primary ">
                    Who I Am
                  </h3>
                  <div className="max-h-96 overflow-scroll">
                    <p className="text-foreground/80 leading-relaxed mb-4 hover:text-foreground transition-colors duration-300">
                      I'm a frontend-focused full stack developer with over 6
                      years of professional experience across enterprise and
                      product-based environments. My journey began at Genpact,
                      where I spent 4+ years streamlining backend insurance
                      processes and developing a strong foundation in systems
                      thinking, problem-solving, and process optimization.
                      Transitioning into tech-driven innovation at Codeblock
                      Technologies, I've spent the last 2+ years building
                      modern, scalable applications using React, Next.js,
                      TypeScript, Tailwind CSS, and Firebase.
                    </p>
                    <p className="text-foreground/80 leading-relaxed hover:text-foreground transition-colors duration-300">
                      My strength lies in delivering seamless user experiences
                      through responsive, accessible, and aesthetically clean
                      UIs, backed by efficient architecture and real-time data
                      handling. Whether it's implementing SSR, building
                      component systems, integrating theming, or deploying
                      cross-platform apps via Capacitor, I bring a balance of
                      design sensitivity and technical depth. I'm passionate
                      about crafting products that not only work flawlessly but
                      also feel intuitive and engaging to users.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
