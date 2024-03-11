import React from "react";
import { Italiana } from "@next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: ["400"] });

const Header = () => {
  return (
    <div className="h-32 flex justify-center items-center">
      <div className="flex w-4/5 justify-evenly py-1.5 text-slate-500">
        {/* <img src="/assests/LOGO.png" className="size-28" /> */}
        <div className={italiana.className}>
          <p className="text-5xl text-[#3A4D39]">
            Career <br /> Craft
          </p>
        </div>
        <div className="flex items-center gap-9 text-xl cursor-pointer">
          <div className="hover:scale-[1.1] transition duration-300 ease-in-out">
            <p>Home</p>
          </div>
          <div className="hover:scale-[1.1] transition duration-300 ease-in-out">
            <p>Jobs</p>
          </div>
          <div className="hover:scale-[1.1] transition duration-300 ease-in-out">
            <p>Companies</p>
          </div>
          <div className="hover:scale-[1.1] transition duration-300 ease-in-out">
            <p>Testimonials</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#4F6F52] text-white w-24 h-8 transition duration-150 hover:bg-[#628a66]">
            Login
          </button>
          <button className="w-20 hover:text-[#253427]">Post Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
