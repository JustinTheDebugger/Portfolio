import React from "react";
import { Github } from "lucide-react";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className={`text-center mb-2 text-lg font-ovo`}>My portfolio</h4>
      <h2 className={`text-center text-5xl font-ovo`}>May latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        A collection of projects where data meets design as well as built to
        solve real problems.
      </p>
      <div className="grid gridAutoFit my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-1 my-20 text-sm text-gray-700">
        {/* Shared styles extracted into a variable or utility class would be ideal for larger apps */}
        <a
          href="#"
          className="w-max flex items-center justify-center gap-2 border border-gray-700 rounded-full py-3 px-10 hover:bg-lightHover duration-500"
        >
          Show more
          <Image
            src={assets.right_arrow_bold}
            alt="show more"
            className="w-4"
          />
        </a>

        <a
          href="https://github.com/JustinTheDebugger"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline mt-2"
        >
          <Github className="w-4 h-4" />
          See projects on GitHub
        </a>
      </div>
    </div>
  );
};

export default Work;
