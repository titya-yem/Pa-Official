import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FounderImg from "../assets/Founder img.jpg";

const History = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div id="History" className="max-w-[1440px] p-6 my-20 mx-auto">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-5xl 2xl:text-7xl font-[600] italic text-center mt-16 mb-10 text-[#FFD500]"
      >
        History
      </motion.h1>
      <div className="flex flex-col lg:flex-row lg:gap-60 justify-center items-center px-6">
        <motion.img
          ref={ref}
          className="w-1/2 md:max-w-[30%] rounded-md"
          src={FounderImg}
          alt="Founder image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-sm lg:text-[16px] w-full md:*w-2/4 xl:w-1/3 *:leading-6 *:mt-6 md:*:mt-8 text-center *:mx-auto lg:text-left text-[#FAF5FF]"
        >
          <p>
            Introducing "ប៉ា" a fragrance that captures the deep bond between
            father and child, inspired by the Khmer-American experience. More
            than just a scent, "ប៉ា" evokes cherished memories of love,
            tradition, and the enduring influence of fathers.
          </p>
          <p>
            Each spritz of "ប៉ា" recalls the comforting scent of a father’s
            cologne and the warmth of family gatherings. It’s a tribute to the
            men who shaped us, embodying their strength, wisdom, and unwavering
            support.
          </p>
          <p>
            Wearing "ប៉ា" is like embracing the past, bringing to life moments
            of laughter, lessons learned, and a father’s gentle love. Let "ប៉ា"
            be part of your daily ritual, a timeless reminder of the love and
            legacy that fathers leave behind.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default History;
