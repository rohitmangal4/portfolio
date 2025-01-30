import react from "react";
import { motion } from "framer-motion";
import Image from "../assets/Error - 404-2.jpg"

const About = () => {
  return (
    <section id="about" className="section-padding bg-[#1c212a]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl md:text-4xl text-center font-bold mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/50 blur-2xl w-96"></div>
            <img
              src={Image}
              alt="About Me"
              className="relative rounded-lg w-96 glass-card h-96"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300">
              I'm a passionate developer with a keen eye for design and a love
              for creating seamless user experiences. With [X] years of
              experience in web development, I've had the opportunity to work on
              diverse projects that have shaped my expertise in modern web
              technologies.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me [your interests/hobbies]. I
              believe in continuous learning and staying updated with the latest
              industry trends.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-2 rounded-full bg-cyan-500 text-black font-medium hover:bg-[#21252c] border-2 border-cyan-500/20 hover:text-white transition-colors duration-300"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="px-6 py-2 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
