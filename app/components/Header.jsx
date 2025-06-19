import { Ovo } from "next/font/google";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

// Initialize the font
const ovo = Ovo({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="Profile image"
          className="rounded-full w-32"
        />
        <h3
          className={`flex items-end gap-2 text-xl md:text-2xl mb-3 ${ovo.className}`}
        >
          Hi! I'm Justin Tay
          <Image src={assets.hand_icon} alt="" className="w-6" />
        </h3>
        <h1 className={`text-3xl sm:text-6xl lg:text-[66px] ${ovo.className}`}>
          Data analyst and full-stack software developer based in Hamilton.
        </h1>
        <p className={`max-w-2xl mx-auto ${ovo.className}`}>
          I'm a data-driven data analyst and a full-stack developer from Borneo,
          Sarawak, Malaysia with 3 years of experience working across multiple
          industry.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            contact me
            <Image
              src={assets.right_arrow_white}
              alt="contact me"
              className="w-4"
            />
          </a>
          <a
            href="/sample-resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            my resume
            <Image src={assets.download_icon} alt="cv resume" className="w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
