import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isNav, setIsNav] = useState(false);

  return (
    <div className="max-w-[2000px] p-6 mx-auto flex justify-between items-center">
      <div className="w-[100px] md:w-[120px] rounded-[30px] overflow-hidden">
        <img src={logo} alt="Pa Log" />
      </div>
      <button onClick={() => setIsNav(!isNav)}>
        {isNav ? (
          <IoIosCloseCircle size={30} className="fill-white" />
        ) : (
          <GiHamburgerMenu size={30} className="fill-white md:hidden" />
        )}
      </button>

      {/* Navbar with transition effect */}
      <ul
        className={`${
          isNav ? "top-36 opacity-100" : "top-[-100%] opacity-0"
        } absolute right-0 flex flex-col gap-y-10 h-screen w-[45%] text-center text-[26px] bg-[#0A0A0A] text-[#FED42D] z-10 transition-all duration-500 ease-in-out md:hidden `}
      >
        <li onClick={() => setIsNav(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setIsNav(false)}>
          <a href="#History">History</a>
        </li>
        <li onClick={() => setIsNav(false)}>
          <Link to="/about">About Us</Link>
        </li>
        <li onClick={() => setIsNav(false)}>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      {/* Desktop navbar */}
      <ul className="hidden md:flex justify-between items-center gap-x-11 text-[26px] text-[#FED42D]">
        <li onClick={() => setIsNav(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setIsNav(false)}>
          <a href="#History">History</a>
        </li>
        <li onClick={() => setIsNav(false)}>
          <Link to="/about">About Us</Link>
        </li>
        <li onClick={() => setIsNav(false)}>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
