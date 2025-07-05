import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Web Developer",
    icon: "🌐",
  },
  {
    title: "React Developer",
    icon: "⚛️",
  },
  {
    title: "Backend Developer",
    icon: "🛠️",
  },
  {
    title: "Full Stack Developer",
    icon: "🧩",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 bg-gradient-to-b from-[#0e0e1e] to-[#09090f] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <p className="text-md text-gray-400 uppercase tracking-widest mb-1">
          INTRODUCTION
        </p>
        <h2 className="text-5xl font-extrabold mb-6 leading-tight text-white">
          Overview<span className="text-blue-500">.</span>
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed mb-14 max-w-4xl">
          I'm a skilled software developer with experience in JavaScript, and
          expertise in frameworks like{" "}
          <span className="font-semibold text-white">
            React, Node.js, Express.js and MongoDB
          </span>
          . I'm a quick learner and collaborate closely with clients to create{" "}
          <span className="font-semibold text-white">
            efficient, scalable, and user-friendly
          </span>{" "}
          solutions that solve real-world problems. Let's work together to bring
          your ideas to life!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-lg border border-transparent bg-gradient-to-br from-[#1f1f38] to-[#09090f] p-6 hover:border-[#00ffd1] transition-all duration-300 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-600/20 opacity-0 hover:opacity-100"
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="text-5xl">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white text-center">
                  {skill.title}
                </h3>
              </div>

              {/* Glow Border Effect */}
              <div className="absolute inset-0 rounded-2xl z-[-1] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-600/20 opacity-0 hover:opacity-100 transition duration-500 blur-lg" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
