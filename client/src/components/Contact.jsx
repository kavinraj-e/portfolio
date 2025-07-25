import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded-md"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded-md"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded-md"
        ></textarea>
        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
