import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "Code Alpha",
    role: "Full stack Developer Intern",
    period: "july 2026 – Aug 2026",
    description:
      "Building and contributing to multiple full-stack applications focused on authentication, collaboration, and real-time communication. Gained practical experience in frontend development, backend API integration, database management, secure user workflows, and scalable application architecture..",
    logo: "Code Alpha",
  },
  {
    id: 2,
    company: "Cognifyz Technologies",
    role: "Frontend Developer Intern",
    period: "Feb 2025 – Mar 2025",
    description:
      "Built a real-time weather application using the OpenWeather API, featuring city-based search, error handling for invalid inputs, and a clean mobile-responsive UI. Focused on component optimization for smooth performance across devices.",
    logo: "/assets/cognifyz.png",
  },
  {
    id: 3,
    company: "Prodigy Infotech",
    role: "Web Developer Intern",
    period: "Jan 2025 – Feb 2025",
    description:
      "Developed fully responsive web pages by translating UI designs into functional React components. Improved load times by optimizing images and removing unused CSS. Managed codebase and collaborated with the team using Git and GitHub.",
    logo: "/assets/Prodigy-InfoTech.png",
  },
];

export default function Experience() {
  return (
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

      <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="bg-black p-6 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 12, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center gap-3">
              <div className="flex items-center gap-4">
                {/* <img className="w-20 h-8 object-contain rounded" src={exp.logo}  alt={exp.company} /> */}
                <div>
                  <h2 className="font-semibold text-white text-lg lg:text-xl">{exp.role}</h2>
                  <p className="text-[#A1A1AA] text-sm">{exp.company}</p>
                </div>
              </div>
              <span className="text-[#D4D4D8] font-semibold text-sm lg:text-base">{exp.period}</span>
            </div>
            <p className="text-[#D4D4D8] mt-5 text-sm/6 lg:text-base font-light">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
