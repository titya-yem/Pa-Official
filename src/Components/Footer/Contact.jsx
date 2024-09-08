import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Email from "./Email";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div id="Contact" className="max-w-[2000px] mx-auto">
      <motion.div
        ref={ref}
        className="flex flex-col lg:flex-row lg:justify-between items-center p-6 text-[#FAF5FF]"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="w-full lg:w-[768px] px-4 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl 2xl:text-7xl font-bold italic mt-12 mb-6 text-[#FFD500]"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Contact
          </motion.h1>
          <div className="flex flex-col gap-6 text-xl">
            <motion.input
              className="p-6 lg:p-8 rounded-md"
              type="text"
              name="Name"
              placeholder="Name"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            />
            <motion.input
              className="p-6 lg:p-8 rounded-md"
              type="email"
              name="Email"
              placeholder="Email"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            />
            <motion.button
              className="p-6 rounded-md text-2xl 2xl:text-3xl text-black italic font-[500] bg-[#FFD500] hover:bg-transparent hover:text-[#FFD500] hover:border hover:border-solid hover:border-[#FFD500] duration-200"
              type="submit"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              Send Email
            </motion.button>
          </div>
        </motion.div>
        <Email />
      </motion.div>

      <motion.p
        className="text-[#FAF5FF] text-lg lg:text-2xl p-12 lg:py-12 text-center lg:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        Copy Right & Reserved by “ប៉ា” Pa official
      </motion.p>
    </div>
  );
};

export default Contact;
