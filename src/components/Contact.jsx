import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d33lvlx",
        "template_0rzv1gp",
        formRef.current,
        "On0m-NaZUT3WHu8YI",
      )
      .then(() => {
        toast.success(
          "Message sent successfully! I'll get back to you soon.",
          {
            position: "top-right",
            autoClose: 3000,
          },
        );

        formRef.current.reset();
      })

      .catch((error) => {
        console.log("FULL ERROR:", error);

        toast.error("Failed to send message. Please try again!", {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  const socialLinks = [
    {
      Icon: BiLogoGmail,
      href: "mailto:ankvish1102@gmail.com",
    },
    {
      Icon: IoLogoLinkedin,
      href: "https://www.linkedin.com/in/ankit-vishwakarma-77ab89235/",
    },
    {
      Icon: BsGithub,
      href: "https://github.com/ankvish-Hub",
    },
  ];

  return (
    <motion.div
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:my-16 lg:px-28 my-8 px-5"
    >
      {/* Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl lg:text-4xl text-center"
      >
        Contact <span className="font-extrabold">Me</span>
      </motion.h2>

      <div className="flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row gap-10">
        {/* Contact Form */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-[40%] w-full"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full space-y-4"
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="border-2 px-5 py-3 border-black rounded text-sm w-full"
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="border-2 px-5 py-3 border-black rounded text-sm w-full"
            />

            <input
              name="website"
              type="text"
              placeholder="Your Website (optional)"
              className="border-2 px-5 py-3 border-black rounded text-sm w-full"
            />

            <textarea
              name="message"
              placeholder="How can I help? *"
              required
              className="resize-none border-2 px-5 py-3 h-32 border-black rounded text-sm w-full"
            ></textarea>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-between gap-4 flex-col lg:flex-row"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-5 py-3 rounded font-medium"
              >
                Get In Touch
              </motion.button>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#000",
                      color: "#fff",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-3 rounded border-2 border-black"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </form>
        </motion.div>
        <ToastContainer />

        {/* Right Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full"
        >
          <div className="font-extrabold text-2xl lg:text-5xl space-y-2">
            <h2>
              Let's{" "}
              <span
                className="text-white"
                style={{ WebkitTextStroke: "1px black" }}
              >
                talk
              </span>{" "}
              for
            </h2>
            <h2>Something special</h2>
          </div>

          <p className="text-[#71717A] text-sm lg:text-base mt-6 leading-7">
            I seek to push the limits of creativity to create highly engaging,
            user-friendly, and memorable interactive experiences.
          </p>

          {/* Contact Details */}
          <div className="font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-4">
            <motion.a
              whileHover={{ x: 5 }}
              href="mailto:ankvish1102@gmail.com"
              className="flex items-center gap-2 group"
            >
              <span className="border-2 border-transparent group-hover:border-black rounded-full p-1 transition-all">
                <IoMdMail className="w-5 h-5" />
              </span>
              ankvish1102@gmail.com
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href="tel:8928838109"
              className="flex items-center gap-2 group"
            >
              <span className="border-2 border-transparent group-hover:border-black rounded-full p-1 transition-all">
                <FaPhone className="w-4 h-4" />
              </span>
              +91 8928838109
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
