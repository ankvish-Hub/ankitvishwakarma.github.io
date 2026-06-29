"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  // Navbar Links
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "about", label: "About Me" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 p-1
        transition-shadow duration-300
        ${hasShadow ? "shadow-md" : "shadow-none"}
        bg-white/30 backdrop-blur-md border-b border-white/40`}
    >
      <div className="container mx-auto flex justify-between items-center font-mono">
        
        {/* Logo */}
        <motion.img
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => scrollToSection("home")}
          className="h-20 cursor-pointer"
          src="/assets/logo.png"
          alt="Logo"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
          {navLinks.map((item) => (
            <motion.li
              key={item.id}
              className="group"
              whileHover={{ scale: 1.1 }}
            >
              <button onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>

              <motion.span
                className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex"
                layout
              ></motion.span>
            </motion.li>
          ))}
        </ul>

        {/* Resume Button */}
        <motion.a
          href="/Ankit_Vishwakarma_Resume.pdf"
          className="hidden relative lg:inline-block px-4 py-2 font-medium group"
          target="_blank"
          download
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>

          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>

          <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
            Resume <TbDownload size={16} />
          </span>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.2 }}
        >
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 right-0 h-full w-full
              bg-white backdrop-blur-md shadow border-l border-white"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              <HiX />
            </button>

            {/* Mobile Links */}
            <ul className="flex flex-col items-center mt-20 gap-y-6 font-semibold bg-white">
              {navLinks.map((item) => (
                <motion.li
                  key={item.id}
                  className="border-b"
                  whileHover={{ scale: 1.1 }}
                >
                  <button onClick={() => scrollToSection(item.id)}>
                    {item.label}
                  </button>
                </motion.li>
              ))}

              {/* Resume Button Mobile */}
              <motion.a
                href="/Ankit_Vishwakarma.pdf"
                className="relative inline-block px-4 py-2 font-semibold group"
                target="_blank"
                download
                whileHover={{ scale: 1.1 }}
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>

                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>

                <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
                  Resume <TbDownload size={16} />
                </span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}