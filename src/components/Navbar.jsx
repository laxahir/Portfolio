import React from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full bg-gradient-to-r from-[#0f0f1d]/80 to-[#09090f]/80 backdrop-blur-md px-6 py-4 shadow-md border-b border-cyan-600/30"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400 tracking-wide">Lax</h1>

        <ul className="hidden md:flex gap-8 text-white font-medium">
          {navLinks.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="relative cursor-pointer"
            >
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-cyan-400"
              >
                {link.label}
              </a>
              <motion.span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-400 origin-left scale-x-0"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
