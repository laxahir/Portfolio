import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 bg-gradient-to-b from-[#0e0e1e] to-[#09090f] text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Get In Touch<span className="text-cyan-400">.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Feel free to reach out for collaborations or just a friendly hello 👋
        </p>

        {/* Contact Box */}
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-purple-600/20 border border-cyan-500/20 rounded-2xl p-6 hover:shadow-cyan-400/30 shadow-md transition-all duration-300"
          >
            <FaEnvelope size={28} className="text-cyan-400 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-300 mt-2">laxahir50@gmail.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500/20 via-pink-600/10 to-cyan-600/20 border border-purple-500/20 rounded-2xl p-6 hover:shadow-purple-400/30 shadow-md transition-all duration-300"
          >
            <FaPhone size={28} className="text-purple-400 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-300 mt-2">+91 93281 57199</p>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          href="../../src/resume/Laxman_RESUME.pdf" // <- Place your resume in public folder as 'resume.pdf'
          download
          className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:brightness-110 transition-all shadow-md"
        >
          <FaDownload />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
