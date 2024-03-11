import React from "react";
import { Italiana } from "@next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });

const Footer = () => {
  return (
    <>
      <div className="flex h-[14vmax] w-full bg-[#4F6F52]">
        <div className="w-1/4 flex justify-center items-center border-r-2 border-[#405842]">
          <div className="w-[80%] h-[80%] flex justify-center items-center">
            <div className={italiana.className}>
              <p className="text-7xl text-[#f1f0f0]">
                Career <br /> Craft
              </p>
            </div>
          </div>
        </div>
        <div className="w-3/4"></div>
      </div>
    </>
  );
};

export default Footer;
