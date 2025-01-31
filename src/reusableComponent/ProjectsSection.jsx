import react from "react";
import { motion, delay } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import Image from "../assets/Error - 404-2.jpg"

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and TypeScript",
      image: Image,
      tags: ["React", "TypeScript", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Two",
      description: "Full-stack e-commerce platform with advanced features",
      image: Image,
      tags: ["Next.js", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Project Three",
      description: "Real-time chat application with modern UI",
      image: Image,
      tags: ["React", "Socket.io", "Express"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-[#21252c]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl md:text-4xl text-center font-bold mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opavity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card rounded-lg overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center gap-9">
                    <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-cyan-500/20 border border-cyan-500 flex justify-center items-center rounded-full"
                    >
                        <LuExternalLink className="h-5 w-5 text-cyan-400/80"/>
                    </a>
                    <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 bg-cyan-500/20 border border-cyan-500 flex justify-center items-center rounded-full"
                    >
                        <FiGithub className="h-5 w-5 text-cyan-400/80"/>
                    </a>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-white text-lg font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-md mb-2">
                  {project.description}
                </p>
                <div className="flex justify-start items-center mb-4 gap-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 text-sm text-cyan-400 bg-cyan-500/10 border  border-cyan-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
