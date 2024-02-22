import React from "react";
import Header from "./Header";
import { DM_Serif_Display, Poppins } from "@next/font/google";

const dm_serif_diplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

const Home = () => {
  return (
    <>
      <div className="h-svh bg-cover bg-landing_page_bg">
        <Header />
        <div className="w-full flex justify-center">
          <div className="w-[65.5%]">
            <div className={dm_serif_diplay.className}>
              <p className="mt-16 leading-tight text-[5rem] text-[#4F6F52]">
                Unlock <br /> Your Career <br />
                Potential Today
              </p>
              <p className="my-5 text-lg text-[#2c3d2e]">
                <span className={poppins.className}>
                  Discover limitless career possibilities and <br /> unlock your
                  potential today with CareerCraft. Your dream job awaits!
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 flex items-center justify-center">
        <div className="w-8/12 h-[80%] items-center flex justify-center gap-2 text-slate-400">
          <div className="flex flex-col justify-center items-center w-1/4 h-full gap-5">
            <img src="/assests/job-level.png" className="size-32" />
            <p className="text-xl">Job Level</p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/4 h-full gap-5">
            <img src="/assests/job-type.png" className="size-32" />
            <p className="text-xl">Job Type</p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/4 h-full gap-5">
            <img src="/assests/employment_type.png" className="size-32" />
            <p className="text-xl">Employment Type</p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/4 h-full gap-5">
            <img src="/assests/location.png" className="size-32" />
            <p className="text-xl">Location</p>
          </div>
        </div>
      </div>
      <div className="h-72 flex bg-[#F4F2EE]">
        <div className="relative w-1/2">
          <img src="/assests/img1.jpg" className="top-[-6%] left-[15%] absolute h-[20rem] w-[36rem]" />
        </div>
        <div className="w-1/2 font-light flex items-center justify-start text-2xl">
          <p className="w-[70%] leading-loose">Our mission is to empower individuals like you to unlock your full
          career potential and seize exciting opportunities.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
