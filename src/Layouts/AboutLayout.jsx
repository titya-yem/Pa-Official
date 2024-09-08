import { Outlet } from "react-router-dom";
import AboutNavbar from "../Components/AboutNavbar";
import About from "../Pages/About";
import History from "../Components/History";
import Contact from "../Components/Footer/Contact";

const AboutLayout = () => {
  return (
    <div>
      <AboutNavbar />
      <Outlet />
      <About />
      <History />
      <Contact />
    </div>
  );
};

export default AboutLayout;
