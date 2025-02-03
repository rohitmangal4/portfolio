import React from "react";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";

const apiKey = import.meta.env.VITE_ACCESS_KEY;

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="section-padding bg-[#1c212a]">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl md:text-4xl mb-16 font-bold text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-start items-start gap-6 mb-16"
          >
            <h3 className="text-white text-2xl md:text-3xl font-semibold">
              Let's Connect
            </h3>
            <p className="text-white/70">
              I’m always open to new opportunities and collaborations. If you’re
              looking to work on exciting projects or discuss ideas, feel free
              to reach out—I’d love to connect!
            </p>
            <div className="flex justify-start gap-6 w-full mt-4">
              <a
                href="mangaleswarandev.official2001@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/70 flex justify-center items-center"
              >
                <MdOutlineMail className="w-7 h-7 text-cyan-400" />
              </a>
              <a
                href="https://github.com/rohitmangal4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/70 flex justify-center items-center"
              >
                <FiGithub className="w-7 h-7 text-cyan-400" />
              </a>
              <a
                href="www.linkedin.com/in/mangaleswaran-mn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-500/70 flex justify-center items-center"
              >
                <FaLinkedinIn className="w-7 h-7 text-cyan-400" />
              </a>
            </div>
          </motion.div>

          <div className="bg-[#0f141f]/30 border border-white/20 rounded-lg p-8 max-sm:p-4">
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
              onSubmit={onSubmit}
            >
              <h3 className="my-1 text-white/70 text-2xl font-semibold text-center">
                Contact
              </h3>
              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_ACCESS_KEY}
              />
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name *"
                className="w-full px-4 py-3 rounded-lg text-cyan-500 bg-white/5 border border-white/10 focus:border-cyan-500 focus:bg-cyan-500/5 outline-none transition-colors duration-300"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your Email *"
                className="w-full px-4 py-3 rounded-lg text-cyan-500 bg-white/5 border border-white/10 focus:border-cyan-500 focus:bg-cyan-500/5 outline-none transition-colors duration-300"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your Phone *"
                className="w-full px-4 py-3 rounded-lg text-cyan-500 bg-white/5 border border-white/10 focus:border-cyan-500 focus:bg-cyan-500/5 outline-none transition-colors duration-300"
              />
              <textarea
                name="message"
                required
                placeholder="Message *"
                rows={4}
                className="w-full px-4 py-3 rounded-lg text-cyan-500 bg-white/5 border border-white/10 focus:border-cyan-500 focus:bg-cyan-500/5 outline-none transition-colors duration-300"
              ></textarea>

              <button
                type="submit"
                className="w-full px-8 py-[10px] rounded-lg bg-cyan-500 text-black font-medium hover:text-white  hover:bg-cyan-500/20 hover:border border-cyan-500 transition-colors duration-300"
              >
                Submit Form
              </button>
            </motion.form>
            <span className="mt-10 text-white/40">{result}</span>
          </div>
        </div>
        <div className="mt-14">
          <hr className="w-full border border-white/20" />
          <div className="mt-4 text-white/70 flex justify-between  max-[520px]:flex-col items-center text-sm">
          <p>&copy; 2025 Mangaleswaran. All Rights Reserved.</p>
          <p>Built with by Mangaleswaran &#10084;</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
