import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/lax.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center px-6 py-12 bg-gradient-to-b from-[#0e0e1e] to-[#09090f] text-white scroll-smooth"
    >
      {/* Left: Text */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          I'm <span className="text-cyan-400">Lax</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          A{" "}
          <span className="text-white font-semibold">MERN Stack Developer</span>{" "}
          passionate about crafting modern, fast, and user-friendly web
          applications.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl shadow-lg hover:brightness-110 transition-all text-center"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-500/10 transition-all text-center"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* Right: Photo */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-10 md:mb-0"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-1 shadow-xl">
          <img
            src={myPhoto}
            alt="Lax"
            className="w-full h-full object-cover rounded-full border-4 border-[#0e0e1e]"
          />
        </div>
      </motion.div>
    </section>
  );
}
