import React from "react";
import { FaCode, FaLaptopCode, FaCloudUploadAlt } from "react-icons/fa";

export default function Services() {
  return (
    <section
      id="services"
      className="h-screen  bg-white py-24 px-6 md:px-16 text-center flex flex-col justify-center items-center"
    >
      <h2 className="text-5xl font-bold text-gray-900 mb-16">
        My <span className="text-green-600">Services</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {/* Web Design */}
        <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300">
          <FaLaptopCode className="text-green-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Web Design
          </h3>
          <p className="text-gray-600">
            Beautiful, user-friendly UI/UX designs tailored to your business needs.
          </p>
        </div>

        {/* Web Development */}
        <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300">
          <FaCode className="text-green-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Web Development
          </h3>
          <p className="text-gray-600">
            Full-stack web apps built with modern technologies like React, Node.js, and MongoDB.
          </p>
        </div>

        {/* Cloud Deployment */}
        <div className="bg-gray-100 rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300">
          <FaCloudUploadAlt className="text-green-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Cloud Deployment
          </h3>
          <p className="text-gray-600">
            Deploy your projects to scalable cloud platforms like Vercel, Netlify, and AWS.
          </p>
        </div>
      </div>
    </section>
  );
}
