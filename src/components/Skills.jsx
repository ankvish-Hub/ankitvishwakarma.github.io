import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs,  FaGithub,  FaMagic, FaTools, FaCode } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";
import { SiMongodb, SiVercel, SiApollographql, SiFramer, } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    // { id: 1, name: "HTML & CSS", icon: <FaHtml5 size={36} /> },
    { id: 2, name: "JavaScript", icon: <FaJs size={36} /> },
    { id: 3, name: "React", icon: <FaReact size={36} /> },
    { id: 4, name: "Node.js", icon: <FaNodeJs size={36} /> },
    { id: 5, name: "MongoDB", icon: <SiMongodb size={36} /> },
    { id: 7, name: "Next.js", icon: <RiNextjsFill size={36} /> },
    { id: 8, name: "Tailwind", icon: <RiTailwindCssFill size={36} /> },
    { id: 9, name: "Figma", icon: <CgFigma size={36} /> },
    { id: 10, name: "Git & GitHub", icon: <FaGithub size={36} /> },
    { id: 11, name: "RESTful APIs", icon: <SiApollographql size={36} /> },
    { id: 13, name: "CI/CD", icon: <FaTools size={36} /> },
    { id: 12, name: "Vercel", icon: <SiVercel size={36} /> },
    { id: 14, name: "UI/UX", icon: <MdDesignServices size={36} /> },
    { id: 15, name: "Prompt Engineering", icon: <FaMagic size={36} /> },
    { id: 16, name: "Framer Motion", icon: <SiFramer size={36} /> },
    { id: 17, name: "Data Structures & Algorithms", icon: <FaCode size={36} /> },
    // { id: 18, name: "TypeScript", icon: <SiTypescript size={36} /> },
  ]);
  const [experiences] = useState([
    {
      id: 1,
      company: "Cognifyz Technologies",
      role: "Frontend Developer",
      period: "Feb 2025 - March 2025",
      description:
        "Built an intuitive weather application that allows users to search for real-time weather information by city name. Developed a responsive weather app that lets users search real-time weather by city name using the OpenWeather API. Designed a clean, mobile-friendly UI with error handling for invalid inputs and optimized components for fast, smooth performance.",
      logo: "/assets/cognifyz.png",
    },
    {
      id: 2,
      company: "Prodigy Infotech",
      role: "Web Developer",
      period: "Jan 2025 - Feb 2025",
      description:
        "Designed and developed fully responsive web pages for multiple projects, integrating UI designs into functional components. Optimized images and minimized unused CSS to improve website load time. Used GitHub for version control and seamless team collaboration.",
      logo: "/assets/Prodigy-InfoTech.png",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-20 h-8 rounded" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
