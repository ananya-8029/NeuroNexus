import React from "react";

const JobListing = () => {
  return (
    <>
      <div className=" h-[90vh] my-[4vmax] py-[2vmax] flex flex-col justify-center items-center">
        <h1 className="text-[2.5rem] text-[#436d31] font-bold py-[1vmax]">
          Job Listing
        </h1>
        <div className="bg-[#F7F7F7] w-full h-[90%] flex flex-col items-center py-[1vmax]">
          <div className="bg-white h-[10vmax] w-[95%] flex justify-center items-center gap-10">
            <img
              src="https://picsum.photos/300/300?random=1"
              className="rounded-full h-[5vmax]"
            />
            <div>
              <h1 className="text-[1.8vmax] font-light">Company A</h1>
              <p className="text-[0.9vmax] font-thin">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard dummy
                text ever since the 1500s,
              </p>
            </div>
            <div>
                <button className="bg-[#6F9573] w-[10vmax] h-[4vmax] rounded-lg text-[1.2vmax] text-white font-light hover:scale-[1.1] transition duration-300">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobListing;
