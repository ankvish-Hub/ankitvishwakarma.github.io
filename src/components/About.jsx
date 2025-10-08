import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row scroll-mt-32"
      id="about"
    >
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Hi, I’m <b>Ankit</b> — a passionate and growth-driven <b>Frontend Developer</b> and
          <b> Web Developer </b> who loves turning ideas into interactive, responsive,
          and elegant digital experiences.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I specialize in building modern web applications using technologies
          like <b>HTML, CSS, JavaScript, React, Next.js, MongoDB, Tailwind CSS.
          </b> I'm also learning Node.js and backend development to become
          a well-rounded Full-Stack Developer.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          With a strong foundation in <b>UI/UX design</b>, I pay special attention to
          usability and visual consistency — aiming to create interfaces that
          are not only functional but delightful to use.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          Beyond frontend and design, I’m deeply curious about <b>Artificial
          Intelligence and Machine Learning,</b> and I'm currently exploring how
          these technologies can be integrated into real-world applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I'm always open to learning<b> opportunities, internships, and
          collaborations </b>that challenge me and help me grow as a developer.
        </p>
      </motion.div>
    </div>
  );
}
