import React from "react";
import { FaCode, FaLaptopCode, FaBrain, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiFlutter, SiTailwindcss, SiJavascript } from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white px-6 md:px-20 py-24 flex flex-col items-center justify-center text-center"
    >
      {/* Heading */}
      <h2 className="text-5xl font-bold text-gray-900 mb-8">
        About <span className="text-green-600">Me</span>
      </h2>

      {/* Description */}
      <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mb-12">
        I'm <span className="font-semibold text-gray-900">Kavinraj E</span>, a passionate software developer and
        data science enthusiast. I enjoy turning complex problems into simple,
        beautiful, and intuitive solutions.
      </p>

      {/* Qualities */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mb-16">
        <div className="flex flex-col items-center">
          <FaCode className="text-green-600 text-5xl mb-4" />
          <p className="text-gray-800 text-lg font-medium">Clean Code</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLaptopCode className="text-green-600 text-5xl mb-4" />
          <p className="text-gray-800 text-lg font-medium">MERN & Flutter</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBrain className="text-green-600 text-5xl mb-4" />
          <p className="text-gray-800 text-lg font-medium">Data Science</p>
        </div>
      </div>

      {/* Skills */}
      <h3 className="text-4xl font-semibold text-gray-900 mb-8">
        My <span className="text-green-600">Skills</span>
      </h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl">
        <div className="flex flex-col items-center">
          <FaReact className="text-blue-500 text-4xl" />
          <p className="text-sm mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-green-700 text-4xl" />
          <p className="text-sm mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <SiMongodb className="text-green-600 text-4xl" />
          <p className="text-sm mt-2">MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <SiFlutter className="text-blue-600 text-4xl" />
          <p className="text-sm mt-2">Flutter</p>
        </div>
        <div className="flex flex-col items-center">
          <SiJavascript className="text-yellow-500 text-4xl" />
          <p className="text-sm mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-cyan-500 text-4xl" />
          <p className="text-sm mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPython className="text-blue-400 text-4xl" />
          <p className="text-sm mt-2">Python</p>
        </div>
      </div>
    </section>
  );
}
