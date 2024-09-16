import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Email from "./Email";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div id="Contact" className="max-w-[1440px] mx-auto">
      <motion.div
        ref={ref}
        className="flex flex-col lg:flex-row lg:justify-between items-center p-6 text-[#FAF5FF]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-full lg:w-[768px] px-4 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold italic mt-12 mb-6 text-[#FFD500]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            Contact
          </motion.h1>
          <form
            action="https://formsubmit.co/paofficial168@gmail.com"
            method="POST"
          >
            <div className="flex flex-col gap-6 text-sm lg:text-[16px] sm:w-[60%] lg:w-[70%] sm:mx-auto">
              <motion.input
                className="p-6 rounded-md text-black"
                type="email"
                name="Email"
                placeholder="Email"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              />
              <motion.textarea
                className="p-6 h-32 rounded-md text-black"
                type="message"
                name="Message"
                placeholder="Message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              />
              <motion.button
                className="p-4 rounded-md text-base lg:text-lg text-black italic font-[500] bg-[#FFD500] hover:bg-transparent hover:text-[#FFD500] hover:border hover:border-solid hover:border-[#FFD500] duration-200"
                type="submit"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                Send Email
              </motion.button>
            </div>
          </form>
        </motion.div>
        <Email />
      </motion.div>

      <motion.p
        className="text-[#FAF5FF] text-sm lg:text-[16px] text-center lg:text-left pb-8 lg:pl-[150px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        Copy Right & Reserved by “ប៉ា” Pa official
      </motion.p>
    </div>
  );
};

export default Contact;
