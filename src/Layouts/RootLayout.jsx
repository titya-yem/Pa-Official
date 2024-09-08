import { Outlet } from "react-router-dom";
import Navbar from "../Components/HomeNavbar";
import Product from "../Components/Product";
import Contact from "../Components/Footer/Contact";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Product />
      <Contact />
    </>
  );
};

export default RootLayout;
