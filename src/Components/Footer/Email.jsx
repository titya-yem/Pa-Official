import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

const Email = () => {
  return (
    <div>
      <div className="flex flex-col gap-6 text-xl">
        <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-bold italic text-center mt-12 lg:mt-auto lg:mb-20 text-[#FFD500]">
          Email
        </h1>
        <div className="flex flex-col gap-6 justify-between items-center lg:items-baseline text-2xl md:text-3xl 2xl:text-4xl *:flex *:items-center *:gap-4 lg:*:gap-8 text-text-[#FAF5FF]">
          <div>
            <MdOutlineMailOutline size={30} className="fill-red-600" />
            <a className="underline" href="mailto:">
              thitya.yem.photo@gmail.com
            </a>
          </div>
          <div>
            <CiLocationOn size={30} className="fill-green-500" />
            <span>Minnesota, USA.</span>
          </div>
          <div>
            <FaFacebook size={30} className="fill-blue-500" />
            <a
              className="underline"
              href="https://www.facebook.com/profile.php?id=61563239913904"
            >
              Pa Official
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
