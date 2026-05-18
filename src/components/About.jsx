import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row scroll-mt-32"
      id="about"
    >
      {/* Left Illustration */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      {/* Right Content */}
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
          I specialize in <b>Full Stack Development</b> with a strong focus on building responsive, scalable, and user-friendly web applications. I have hands-on experience with Frontend technologies including <b> HTML, CSS, JavaScript, React.js, and Tailwind CSS, along with Backend development using Node.js, Express.js, and MongoDB</b>.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I am also proficient in tools like <b>Git, GitHub, Vercel, and Postman</b>. With a solid foundation in  <b>data structures, algorithms, and computer networks</b>, I am committed to continuous learning and growth in the ever-evolving tech landscape. I'm actively seeking opportunities to contribute, learn, and grow as a developer.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I'm currently expanding into <b>AI and Machine Learning</b> — learning
          how to integrate intelligent features into real products. I believe
          the best Full Stack developers of tomorrow will understand both
          systems and models.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          I'm actively looking for{" "}
          <b>internships, freelance projects, and open-source collaborations</b>{" "}
          where I can contribute meaningfully, learn fast, and ship real things.
          Let's build something together.
        </p>
      </motion.div>
    </div>
  );
}
