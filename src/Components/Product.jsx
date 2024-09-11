import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PaWord from "../assets/Pa Word.png";
import ProductLeft from "./ProductLeft";

const Product = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div id="Product" className="max-w-[1440px] mx-auto xl:mb-20">
      <motion.h1
        className="text-4xl md:text-6xl 2xl:text-7xl text-center italic mb-20 font-[500] text-[#FED42D]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        Product
      </motion.h1>
      <div className="flex flex-col items-center xl:flex-row xl:justify-between xl:mt-8 mx-auto">
        {/* Left Side */}
        <div
          ref={ref}
          className="flex flex-col justify-between items-center p-6 text-center xl:text-left xl:w-[50%] xl:mx-0 mx-auto xl:mb-32 text-[#FAF5FF]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <img
              className="w-60 mx-auto my-8"
              src={PaWord}
              alt="Pa Word illustration"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold italic">
              Introducing our Perfume: A Fragrance That Evokes Memories of
              father
            </h1>
            <p className="text-sm lg:text-[16px] text-[#DFDFDF] mt-4 mb-8 2xl:mb-14">
              Experience the essence of memories with our unique perfume “ប៉ា”
              inspired by Khmer-American heritage.
            </p>
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <ProductLeft />
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
