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
        <div className="w-8/12 h-[80%] items-center flex justify-center gap-2 text-slate-600">
          <div className="flex flex-col justify-center items-center w-1/4 h-full gap-5">
            <img src="/assests/job-level.png" className="size-32"/>
            <p className="text-xl">Job Level</p>
          </div>
          <div className="flex flex-col justify-center items-center w-1/4 h-full gap-5">
            <img src="/assests/job-type.png" className="size-32"/>
            <p className="text-xl">Job Type</p>
          </div>
          <div className="flex-col justify-center items-center w-1/4 h-full bg-blue-400">
            <p className="text-xl">Employment Type</p>
          </div>
          <div className="flex-col justify-center items-center w-1/4 h-full bg-green-400">
            <p className="text-xl">Location</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
