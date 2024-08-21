import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isHome, setIsHome] = useState(true);
  const [navWhere, setNavWhere] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (navWhere === "home") setIsHome(true);
    else setIsHome(false);
  }, [navWhere]);

  const handleActiveLink = (nav) => {
    setNavWhere(nav);
  };

  return (
    <div
      className={`overflow-hidden h-[80px] w-screen font-kanit text-black flex items-center fixed inset-0 z-50 duration-500 ease-in-out ${
        isHome
          ? ` bg-none border-none shadow-none`
          : `border bg-[#F7F8FF] border-b-gray-200 shadow-md`
      }`}
      style={{ transitionProperty: "background-color" }}
    >
      <nav className="container mx-auto px-8 md:px-8 py-8 lg:px-[100px] flex justify-between items-center text-gray-500 ">
        <Link
          to="home"
          spy={true}
          hashSpy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          onSetActive={() => handleActiveLink("home")}
          className="text-2xl font-semibold cursor-pointer select-none text-black"
        >
          Dale<span className="text-secondary">Dev</span>
        </Link>
        <div className="flex">
          <Link
            to="home"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onSetActive={() => handleActiveLink("home")}
            className={
              navWhere === "home"
                ? `hidden lg:flex mr-14 cursor-pointer text-secondary`
                : `hidden lg:flex mr-14 cursor-pointer `
            }
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            onSetActive={() => handleActiveLink("about")}
            className={
              navWhere === "about"
                ? `hidden lg:flex mr-14 cursor-pointer text-secondary`
                : `hidden lg:flex mr-14 cursor-pointer `
            }
          >
            About
          </Link>

          <Link
            to="skill"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-20}
            duration={1000}
            onSetActive={() => handleActiveLink("skill")}
            className={
              navWhere === "skill"
                ? `hidden lg:flex mr-14 cursor-pointer text-secondary`
                : `hidden lg:flex mr-14 cursor-pointer `
            }
          >
            Skills
          </Link>

          <Link
            to="project"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onSetActive={() => handleActiveLink("project")}
            className={
              navWhere === "project"
                ? `hidden lg:flex mr-14 cursor-pointer text-secondary`
                : `hidden lg:flex mr-14 cursor-pointer `
            }
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            onSetActive={() => handleActiveLink("contact")}
            className={
              navWhere === "contact"
                ? `hidden lg:flex mr-14 cursor-pointer text-secondary`
                : `hidden lg:flex mr-14 cursor-pointer `
            }
          >
            Contact
          </Link>
          <button
            onClick={() => setIsNavOpen(true)}
            className={`cursor-pointer hover:text-secondary flex lg:hidden text-3xl ${
              isNavOpen ? `hidden` : `flex`
            }`}
          >
            {" "}
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>

      <nav
        className={`text-gray-500  w-full h-screen py-8 fixed top-0 right-0 z-50 bg-primary shadow-lg transition-all duration-1000 ease text-3xl md:text-6xl  ${
          isNavOpen ? `translate-x-0 opacity-100` : `translate-x-full opacity-0`
        }`}
      >
        <div className="flex justify-end pb-8 pr-6">
          <button
            onClick={() => setIsNavOpen(false)}
            className={`cursor-pointer text-3xl hover:text-secondary `}
          >
            <MdOutlineClose />
          </button>
        </div>

        <div className="flex flex-col w-full gap-y-6 text-center ">
          <Link
            to="home"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onSetActive={() => handleActiveLink("home")}
            onClick={() => setIsNavOpen(false)}
            className={
              navWhere === "home"
                ? ` cursor-pointer text-secondary`
                : ` cursor-pointer `
            }
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            onSetActive={() => handleActiveLink("about")}
            onClick={() => setIsNavOpen(false)}
            className={
              navWhere === "about"
                ? `cursor-pointer text-secondary`
                : `cursor-pointer`
            }
          >
            About
          </Link>

          <Link
            to="skill"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-20}
            duration={1000}
            onSetActive={() => handleActiveLink("skill")}
            onClick={() => setIsNavOpen(false)}
            className={
              navWhere === "skill"
                ? `cursor-pointer text-secondary`
                : ` cursor-pointer`
            }
          >
            Skills
          </Link>

          <Link
            to="project"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onSetActive={() => handleActiveLink("project")}
            onClick={() => setIsNavOpen(false)}
            className={
              navWhere === "project"
                ? ` cursor-pointer text-secondary`
                : `cursor-pointer `
            }
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            hashSpy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            onSetActive={() => handleActiveLink("contact")}
            onClick={() => setIsNavOpen(false)}
            className={
              navWhere === "contact"
                ? `cursor-pointer text-secondary`
                : ` cursor-pointer `
            }
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
