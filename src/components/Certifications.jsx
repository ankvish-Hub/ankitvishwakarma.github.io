import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Namaste JavaScript",
      issuer: "NamasteDev",
      link: "/assets/certificate.webp", 
      date: "June 2026",
    },

    {
      id: 2,
      title: "AWS - Solutions Architecture Job Simulation",
      issuer: "Forage",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_zz3mDT8SJjFMCeL7b_1751981716204_completion_certificate.pdf",
      date: "July 2025",
    },
    {
      id: 3,
      title: "DataCom - Software Development",
      issuer: "Forage",
      link: "https://www.theforage.com/completion-certificates/gCW7Xki5Y3vNpBmnn/L3NcyCoAjLno9d3T9_gCW7Xki5Y3vNpBmnn_zz3mDT8SJjFMCeL7b_1753363895210_completion_certificate.pdf",
      date: "July 2025",
    },
    {
      id: 4,
      title: "SQL (Basic) Certificate",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/56369e0ca5f3",
      date: "Ju1y 2025",
    },
    {
      id: 5,
      title: "Accenture Nordics - Software Engineering Job Simulation",
      issuer: "Forage",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_zz3mDT8SJjFMCeL7b_1751551067691_completion_certificate.pdf",
      date: "June 2025",
    },
    {
      id: 6,
      title: "Deloitte Australia - Technology  Job Simulation",
      issuer: "Forage",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_zz3mDT8SJjFMCeL7b_1751462292744_completion_certificate.pdf",
      date: "June 2025",
    },
  ];
  return (
    <div className="w-full my-8 py-8 lg:my-16 lg:py-16" id="certifications">
      <motion.h2
        className="text-2xl lg:text-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        License & <span className="font-extrabold">Certifications</span>
      </motion.h2>
      <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-6">
        {certifications.map((cert) => (
          <motion.a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border-2 border-black rounded p-4 hover:bg-black hover:text-white transition-all cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: cert.id * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
              <div>
                <div className="font-bold text-lg">{cert.title}</div>
                <div className="text-sm text-gray-500">{cert.issuer}</div>
              </div>
              <div className="text-xs text-gray-400 lg:text-right">
                {cert.date}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
