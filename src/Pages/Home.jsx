import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between max-w-[2000px] p-6 mx-auto">
      {/* Left Section */}
      <motion.div
        className="text-[#FAF5FF] text-center lg:text-left mx-auto lg:mx-0 lg:mt-20 2xl:mt-48 lg:w-[42%] 2xl:w-[50%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="text-4xl md:text-6xl 2xl:text-7xl font-bold italic">
          <h1>Experience the Essence of Memories with "ប៉ា" Perfume</h1>
        </div>
        <p className="text-lg md:text-xl 2xl:text-2xl text-[#DFDFDF] mt-4 mb-8 2xl:mb-14">
          Introducing “ប៉ា” Perfume, a fragrance that captures the essence of
          memories. With every spritz, be transported to cherished moments and
          feel the presence of your loved ones. Embrace the power of scent and
          create lasting memories with “ប៉ា” Perfume.
        </p>
        <a
          href="#Contact"
          className="text-2xl 2xl:text-3xl text-[#FFD500] font-[600] italic px-36 2xl:px-60 py-4 2xl:py-6 rounded-2xl border border-[#FFD500] hover:text-black hover:bg-[#FFD500] duration-200"
        >
          Shop Now
        </a>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="lg:w-[54%] 2xl:w-[40%]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="sm:h-[830px] w-[88%] md:w-full mx-auto">
          <spline-viewer
            loading-anim-type="spinner-big-dark"
            url="https://prod.spline.design/11KaBfTCshKbZBOf/scene.splinecode"
          ></spline-viewer>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
