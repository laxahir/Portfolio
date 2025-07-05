import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Replace these with actual image imports or URLs
import chatImg from "../../src/assets/chat-app.webp";
import portfolioImg from "../../src/assets/portfolio.jpeg";
import shopImg from "../../src/assets/shop.jpg";
import milkImg from "../../src/assets/milk.jpg";
import youtube from "../../src/assets/youtube.png";
import moneyConverterImg from "../../src/assets/money.webp";

const projects = [
  {
    title: "Realtime Chat App",
    description:
      "A real-time chat application built with MERN stack and Tailwind CSS, featuring dynamic group and private messaging, emoji support, and responsive design.",
    tech: ["#MERN", "#Socket.io", "#TailwindCSS"],
    image: chatImg,
    github: "https://github.com/laxahir/CHAT-App",
    live: "https://lax-chatapp.onrender.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills, built with JavaScript, React, and styled using Tailwind CSS for a modern UI.",
    tech: ["#React", "#JavaScript", "#TailwindCSS"],
    image: portfolioImg,
    github: "https://github.com/yourname/portfolio",
    live: "https://portfolio.example.com",
  },
  {
    title: "Shop Application",
    description:
      "An e-commerce shop application developed with MERN stack and Tailwind CSS, including product listings, shopping cart, and admin dashboard for order management.",
    tech: ["#MERN", "#TailwindCSS"],
    image: shopImg,
    github: "https://github.com/laxahir/Shop",
    live: "https://shopapp.example.com",
  },
  {
    title: "YouTube Clone",
    description:
      "A responsive YouTube clone built using React JS and CSS. It replicates the core features of YouTube including video listing, search functionality, and a dynamic video player.",
    tech: ["#ReactJS", "#CSS", "#RapidAPI"],
    image: youtube,
    github: "https://github.com/laxahir/YouTube",
    live: "https://youtube-clone.example.com",
  },
  {
    title: "Money Converter",
    description:
      "A modern currency converter app built with React JS and Tailwind CSS that allows users to convert between multiple currencies using real-time exchange rates via a public API.",
    tech: ["#ReactJS", "#TailwindCSS", "#ExchangeRateAPI"],
    image: moneyConverterImg,
    github: "https://github.com/laxahir/Money-Converter",
    live: "https://money-converter.example.com",
  },
  {
    title: "Milk Delivery Site",
    description:
      "A simple informational website for a local milk delivery service, built using HTML and CSS with a clean and responsive design.",
    tech: ["#HTML", "#CSS"],
    image: milkImg,
    github: "https://github.com/laxahir/CSS/tree/main/milk/milk",
    live: "https://milkdelivery.example.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 px-6 bg-gradient-to-b from-[#0e0e1e] to-[#09090f] text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
          My Projects<span className="text-cyan-400">.</span>
        </h2>

        {/* Scrollable container showing first 3 cards, scroll to see fourth */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-600 py-4">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="flex-none w-[300px] bg-[#161c2d] rounded-2xl overflow-hidden shadow-lg p-4 hover:shadow-cyan-500/20 transition-all relative snap-center"
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-black bg-opacity-60 rounded-full text-white hover:bg-opacity-80 transition"
                  >
                    <FaExternalLinkAlt size={14} />
                  </a>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-black bg-opacity-60 rounded-full text-white hover:bg-opacity-80 transition"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-4">{proj.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-sm font-medium text-cyan-300 hover:text-white transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
