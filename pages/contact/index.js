import React, { useState } from "react";
import Circles from "/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/xwpeelwy", {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
        mode: "cors",
      });
      if (response.ok) {
        setStatus("Thank you for your message!");
        form.reset();
      } else {
        const errorData = await response.json();
        setStatus(`Oops! ${errorData.error}`);
      }
    } catch (error) {
      setStatus("Oops! There was a problem submitting your form");
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let`s <span className="text-accent">Connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="textarea"
              required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let`s Talk
              </span>
              <BsArrowRight className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 text-[22px]" />
            </button>
          </motion.form>
          {status && <p className="mt-4 text-accent">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
