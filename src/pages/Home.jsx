import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        {/* Left Section */}
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          {/* Animated Headings */}
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, ease: "easeInOut" },
              },
            }}
          >
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Hello,{" "}
              <TypeAnimation
                sequence={[
                  "I am Ankit Vishwakarma",
                  1000,
                  "I am a Full Stack Developer",
                  1000,
                ]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              <span className="font-extrabold">Full Stack</span>{" "}
              <span
                className="text-white font-extrabold"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Developer
              </span>
            </motion.h2>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
              Based In <span className="font-extrabold">India.</span>
            </motion.h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            className="text-[#71717A] text-sm lg:text-base mt-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Passionate about technology, I specialize in <b>Full Stack Developer</b> who builds fast,
          scalable, and visually refined web applications. I care deeply about
          the craft — clean code on the backend, pixel-perfect UI on the
          frontend.
          </motion.p>

          {/* Hire Me + Open to Opportunities */}
          <motion.div
            className="flex items-center gap-4 mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            {/* Hire Me Button */}
            <a
              href="mailto:ankvish1102@gmail.com"
              className="px-5 py-2 rounded-full bg-black text-white font-medium hover:scale-105 transition-transform duration-300"
            >
              Hire Me
            </a>

            {/* Open to Opportunities */}
            <div className="flex items-center gap-2 bg-green-100 px-5 py-2 rounded-full">
              <span className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></span>
              <span className="text-green-800 font-medium">
                Open to Opportunities
              </span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-x-9 mt-10 lg:mt-14"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {[
              { Icon: BiLogoGmail, href: "https://mail.google.com/mail/u/0/", target: "_blank" },
              { Icon: IoLogoLinkedin, href: "https://www.linkedin.com/in/ankit-vishwakarma-77ab89235/", target: "_blank" },
              // { Icon: IoLogoTwitter, href: "https://x.com/Ankit13201529?t=fLi0QMBj-Z6Z7FOZ4KXNnQ&s=09", target: "_blank" },
              { Icon: BsGithub, href: "https://github.com/ankvish-Hub", target: "_blank" },
              { Icon: SiLeetcode, href: "https://leetcode.com/u/_Ankit_Vishwakarma/", target: "_blank" },
            ].map(({ Icon, href, target }, index) => (
              <motion.a
                key={index}
                href={href}
                target={target}
                className="bg-white p-2 lg:p-3 rounded border-2 border-black"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          className="lg:w-[55%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img className="h-full w-full" src="/assets/hero-vector.svg" alt="Hero Vector" />
        </motion.div>
      </div>
    </div>
  );
}
