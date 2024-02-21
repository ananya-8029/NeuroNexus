import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-4/5 justify-evenly py-1.5 text-slate-500">
        <img src="/assests/LOGO.png" className="size-28" />
        <div className="flex items-center gap-9 text-xl ">
          <div>
            <p>Home</p>
          </div>
          <div>
            <p>Jobs</p>
          </div>
          <div>
            <p>Companies</p>
          </div>
          <div>
            <p>Testimonials</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-[#4F6F52] text-white w-24 h-8">Login</button>
          <button className="w-20">Post Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
