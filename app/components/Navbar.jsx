import { Ovo } from "next/font/google";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// Initialize the font
const ovo = Ovo({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        {/* hide nav menu on small screen */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : " bg-white/50 shadow-sm"
          }`}
        >
          <li>
            <a href="#top" className={`${ovo.className}`}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={`${ovo.className}`}>
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className={`${ovo.className}`}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className={`${ovo.className}`}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className={`${ovo.className}`}>
              Contact Me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 ${ovo.className}`}
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* ------- Mobile Menu ----------- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-15 " onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className={`${ovo.className}`} onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={`${ovo.className}`} onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`${ovo.className}`}
              onClick={closeMenu}
            >
              Services
            </a>
          </li>
          <li>
            <a href="#work" className={`${ovo.className}`} onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${ovo.className}`}
              onClick={closeMenu}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
