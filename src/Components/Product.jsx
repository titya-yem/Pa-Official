import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PaWord from "../assets/Pa Word.png";
import ProductLeft from "./ProductLeft";

const Product = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div id="Product" className="max-w-[2000px] my-28 mx-auto">
      <motion.h1
        className="text-4xl md:text-6xl 2xl:text-7xl text-center italic font-[500] text-[#FED42D]"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
      >
        Product
      </motion.h1>
      <div className="flex flex-col items-center xl:flex-row xl:justify-between xl:mt-8 mx-auto">
        {/* Left Side (Text & Image) */}
        <div
          ref={ref}
          className="flex flex-col justify-between items-center p-6 text-center xl:text-left xl:w-[50%] xl:mx-0 mx-auto xl:mb-32 text-[#FAF5FF]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img
              className="w-60 lg:w-80 xl:w-96 mx-auto my-8"
              src={PaWord}
              alt="Pa Word illustration"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold italic">
              Introducing our Perfume: A Fragrance That Evokes Memories of
              father
            </h1>
            <p className="text-lg md:text-xl 2xl:text-2xl text-[#DFDFDF] mt-4 mb-8 2xl:mb-14">
              Experience the essence of memories with our unique perfume “ប៉ា”
              inspired by Khmer-American heritage.
            </p>
          </motion.div>
        </div>

        {/* Right Side (ProductLeft Component) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <ProductLeft />
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
