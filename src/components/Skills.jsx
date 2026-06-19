import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaGithub, FaCode, FaHtml5, FaDatabase, FaNetworkWired , FaWindows } from "react-icons/fa";
import { RiTailwindCssFill,  } from "react-icons/ri";
import { MdDesignServices, MdApi } from "react-icons/md";
import { SiMongodb, SiVercel,   SiGithubactions, SiExpress, SiRender, SiPostman, SiOpenai, SiClaude,  } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";





const allSkills = {
  frontend: [
    { id: 1,  name: "HTML & CSS",    icon: <FaHtml5 size={32} />,           color: "text-orange-500" },
    { id: 2,  name: "JavaScript",    icon: <FaJs size={32} />,              color: "text-yellow-400" },
    { id: 3,  name: "React",         icon: <FaReact size={32} />,           color: "text-cyan-400"   },
    { id: 4,  name: "Tailwind CSS",  icon: <RiTailwindCssFill size={32} />, color: "text-sky-400"    },
    { id: 5,  name: "UI Design",  icon: <MdDesignServices size={32} />,  color: "text-pink-500"   },
    
  ],
  backend: [
    { id: 6, name: "Node.js",      icon: <FaNodeJs size={32} />,   color: "text-green-600" },
    { id: 7, name: "Express.js",   icon: <SiExpress size={32} />,  color: "text-gray-600"  },
    { id: 8, name: "MongoDB",      icon: <SiMongodb size={32} />,  color: "text-green-500" },
    { id: 9, name: "REST APIs",    icon: <MdApi size={32} />,      color: "text-orange-400"},
  ],
  tools: [
    { id: 10, name: "Git & GitHub", icon: <FaGithub size={32} />,        color: "text-black"      },
    { id: 11, name: "CI/CD",        icon: <SiGithubactions size={32} />, color: "text-red-500"    },
    { id: 12, name: "Vercel",       icon: <SiVercel size={32} />,        color: "text-black"      },
    { id: 13, name: "VS Code",      icon: <VscVscode size={32} />,       color: "text-blue-500"   },
    { id: 14, name: "Render",       icon: <SiRender size={32} />,        color: "text-green-500"  }, 
    { id: 15, name: "Postman",      icon: <SiPostman size={32} />,       color: "text-orange-500" },
    { id: 16, name: "ChatGPT", icon: <SiOpenai size={32} />, color: "text-green-500" },
    { id: 17, name: "Claude", icon: <SiClaude size={32} />, color: "text-orange-500" },
  

  ],
  "IT Construct": [
    { id: 18, name: "DSA",          icon: <FaCode size={32} />,          color: "text-violet-600" },
    { id: 19, name: "DBMS", icon: <FaDatabase size={32} />,     color: "text-blue-500"   },
    { id: 20, name: "Computer Networks", icon: <FaNetworkWired size={32} />, color: "text-green-500" },
    { id: 21, name: "Operating Systems", icon: <FaWindows size={32} />, color: "text-blue-400" },
  ],
};

const tabs = [
  { key: "all",      label: "All" },
  { key: "frontend", label: " Frontend" },
  { key: "backend",  label: " Backend" },
  { key: "tools",    label: " Tools & Others" },
  { key: "IT Construct", label: "IT Construct" },
];

const categoryMeta = {
  frontend: { label: "Frontend",        count: allSkills.frontend.length },
  backend:  { label: "Backend",         count: allSkills.backend.length  },
  tools:    { label: "Tools & Others",  count: allSkills.tools.length    },
  "IT Construct" : { label: "IT Construct", count: allSkills["IT Construct"].length },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const visibleSections =
    activeTab === "all"
      ? Object.entries(allSkills)
      : [[activeTab, allSkills[activeTab]]];

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

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-200
                ${activeTab === tab.key
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-black hover:bg-gray-100"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skill Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {visibleSections.map(([categoryKey, items]) => (
              <div key={categoryKey} className="mt-10 lg:mt-14">
                {/* Category heading — only show in "all" tab */}
                {activeTab === "all" && (
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="text-base font-bold uppercase tracking-widest text-gray-400">
                      {categoryMeta[categoryKey].label}
                    </h3>
                    <span className="text-xs border border-gray-300 text-gray-400 rounded-full px-2 py-0.5">
                      {categoryMeta[categoryKey].count}
                    </span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center">
                  {items.map((skill) => (
                    <motion.div
                      key={skill.id}
                      className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded-lg p-3 h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 flex flex-col items-center justify-center gap-2"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: skill.id * 0.03 }}
                      viewport={{ once: true }}
                    >
                      <span className={skill.color}>{skill.icon}</span>
                      <p className="text-sm text-center font-bold">{skill.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      
    </div>
  );
}