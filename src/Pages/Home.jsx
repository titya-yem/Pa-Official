import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row lg:justify-between max-w-[1440px] p-8 lg:h-[700px] mx-auto">
      {/* Left Section */}
      <motion.div
        className="text-[#FAF5FF] text-center md:text-left mx-auto lg:mt-28 xl:mt-20 md:mx-0 lg:h-[400px] md:w-[50%] xl:w-[50%]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold italic">
          <h1>Experience the Essence of Memories with "ប៉ា" Perfume.</h1>
        </div>
        <p className="text-sm lg:text-[16px] text-[#DFDFDF] mt-4 mb-8 2xl:mb-14">
          Introducing "ប៉ា" Perfume, a fragrance that captures the essence of
          memories. With every spritz, be transported to cherished moments and
          feel the presence of your loved ones. Embrace the power of scent and
          create lasting memories with “ប៉ា” Perfume.
        </p>
        <a
          href="#Contact"
          className="lg:text-lg text-[#FFD500] font-[600] italic px-32 md:px-20 lg:px-28 xl:px-40 py-4 2xl:py-6 rounded-2xl border border-[#FFD500] hover:text-black hover:bg-[#FFD500] duration-200"
        >
          Shop Now
        </a>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="relative lg:w-[45%] h-[550px] mx-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
      >
        <spline-viewer
          class="spline"
          loading-anim-type="spinner-big-dark"
          url="https://prod.spline.design/11KaBfTCshKbZBOf/scene.splinecode"
        ></spline-viewer>
      </motion.div>
    </div>
  );
};

export default Home;
