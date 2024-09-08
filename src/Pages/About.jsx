import { motion } from "framer-motion";
import BgImage from "../assets/About section.png";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <div className="relative">
        <motion.div
          className="h-24 w-full bg-gradient-to-r from-[#EDEDED] to-[#F3F3F3] rounded-t-lg mx-auto z-[-1]"
          variants={itemVariants}
        ></motion.div>
        <motion.div
          className="absolute inset-0 flex justify-center mt-6 md:mt-2 2xl:mt-6"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-[600] italic text-[#FFD500]">
            About Us
          </h1>
        </motion.div>
        <motion.img
          className="max-h-[1440px] w-full mx-auto rounded-b-lg z-[-1]"
          src={BgImage}
          alt="Pa perfume set"
          variants={itemVariants}
        />
        <motion.div
          className="absolute inset-0 flex mt-6 2xl:mt-auto justify-center lg:*:w-3/4 xl:*:w-3/4 2xl:*:w-3/5 text-black z-[1] p-6"
          variants={itemVariants}
        >
          <div className="text-lg md:text-xl 2xl:text-2xl text-center mt-4 2xl:mt-20">
            <h1 className="text-2xl lg:text-4xl 2xl:text-5xl font-[600] md:mb-2 lg:mb-6 2xl:mt-4">
              Experience the essence of memories with our brand new perfume,
              “ប៉ា”
            </h1>
            <p>
              At our company, we strive to create perfumes that capture the
              essence of memories, allowing you to relive special moments with
              every application.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
