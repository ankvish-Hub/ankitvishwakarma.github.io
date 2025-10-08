import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
  id: 1,
  title: "AI-Resume Analyzer",
  description: "Build an AI-powered Resume Analyzer with React, React Router, and Puter.js! Implement seamless auth, upload and store resumes, and match candidates to jobs using smart AI evaluations. Get custom feedback and ATS scores tailored to each listing—all wrapped in a clean, reusable UI.",
  image: "/assets/AI-Resume-Analyzer.png",
  link: "https://ai-resume-analyzerr.vercel.app/"
  },
  {
  id: 2,
  title: "MarketPulse - Stock Market App — Alerts, Charts, AI Insights",
  description: "Stock Market app built with Next.js, Shadcn, Better Auth, and Inngest. Track prices, set alerts, explore insights, manage watchlists, and automate workflows for notifications and analytics.",
  image: "/assets/dashboard.png",
  link: "https://market-pulse-stock-tracker-app.vercel.app"
  },
  {
      id: 3,
      title: "Focus On Today",
      description: "The app provides a simple and intuitive interface where users can add tasks, mark them as completed. The app is built using HTML, CSS, and Javascript, and it utilizes local storage to persist tasks across sessions.",
      image: "/assets/Focus.png",
      link: "https://focus-on-today0.netlify.app/"
    },
  {
      id: 4,
      title: "Weather App",
      description: "Developed a responsive weather app that lets users search real-time weather by city name using the OpenWeather API. Designed a clean, mobile-friendly UI with error handling for invalid inputs and optimized components for fast, smooth performance.",
      image: "/assets/weather.png",
      link: "https://focus-on-today0.netlify.app/"
    }
    
    
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
