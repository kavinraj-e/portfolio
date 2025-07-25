import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../Assets/Logo.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between bg-white"
    >
      {/* Left Text */}
      <div className="w-full md:w-1/2 mb-12 md:mb-0">
        <h2 className="text-2xl text-gray-700 mb-2">Hello I'm a</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Software{" "}
          <span className="text-green-500">
            <TypeAnimation
              sequence={["Designer.", 3000, "Developer.", 3000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Hi I'm Kavinraj E, a passionate Software Developer and Data Science enthusiast. Welcome to the portfolio world.
        </p>
        {/* Social Icons */}
        <div className="flex space-x-4 text-white">
          <a href="#" className="bg-green-500 hover:bg-green-600 p-3 rounded-full"><FaFacebook /></a>
          <a href="#" className="bg-green-500 hover:bg-green-600 p-3 rounded-full"><FaTwitter /></a>
          <a href="#" className="bg-green-500 hover:bg-green-600 p-3 rounded-full"><FaInstagram /></a>
          <a href="#" className="bg-green-500 hover:bg-green-600 p-3 rounded-full"><FaBehance /></a>
        </div>
      </div>

      {/* Right Animated Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.img
          src={logo}
          alt="Animated Profile"
          className="w-80 md:w-96"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        />
      </div>
    </section>
  );
}
