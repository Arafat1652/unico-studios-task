import { MdArrowDropDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "./nav.css";
import { FaDotCircle } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="w-[860px] mx-auto mt-2">
      <header className="inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-unic font-mont py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-center">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <h1 className="flex justify-center items-start text-white font-extrabold text-2xl mr-16">
                    UNIC <FaDotCircle className="mt-1" size={10} />
                </h1>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <NavLink
                to="/"
                className="mx-4 inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:underline "
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="mx-4 inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:underline "
              >
                About Us
              </NavLink>
              <NavLink
                to="/service"
                className="flex justify-center items-center gap-1 rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:underline "
              >
                Services <MdArrowDropDown size={20} />
              </NavLink>
              <NavLink
                to="/work"
                className="mx-4 inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:underline "
              >
                Our Work
              </NavLink>
              <NavLink
                to="/contact"
                className="mx-4 inline-block rounded-lg px-2 py-1 text-sm font-medium text-white transition-all duration-200 hover:underline "
              >
                Contact Us
              </NavLink>
            </div>
  
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
