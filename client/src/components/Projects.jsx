import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MERN Blog Platform",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    image: "https://via.placeholder.com/300x200.png?text=Blog+App",
    github: "https://github.com/yourname/mern-blog",
    live: "https://mern-blog.vercel.app",
  },
  {
    title: "E-Commerce App",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    image: "https://via.placeholder.com/300x200.png?text=E-Commerce",
    github: "https://github.com/yourname/ecom-app",
    live: "https://ecom-app.vercel.app",
  },
  {
    title: "Portfolio Site",
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://via.placeholder.com/300x200.png?text=Portfolio",
    github: "https://github.com/yourname/portfolio",
    live: "https://yourportfolio.vercel.app",
  },
  {
    title: "Food Ordering App",
    stack: ["Flutter", "Firebase", "Node.js"],
    image: "https://via.placeholder.com/300x200.png?text=Food+App",
    github: "https://github.com/yourname/food-app",
    live: "https://food-app.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-24 px-6 md:px-16 text-center">
      <h2 className="text-5xl font-bold text-gray-900 mb-16">
        My <span className="text-green-600">Projects</span>
      </h2>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl shadow-lg max-w-3xl mx-auto p-6 text-left"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl mb-4 w-full h-60 object-cover"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-900">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {project.stack.join(", ")}
            </p>
            <div className="flex gap-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-700 hover:text-black transition"
              >
                <FaGithub className="mr-1" /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-green-700 hover:text-green-900 transition"
              >
                <FaExternalLinkAlt className="mr-1" /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
