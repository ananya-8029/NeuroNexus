import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="h-[33rem] my-[5vmax]">
        <div className="text-[#436d31] h-[10%] flex flex-col justify-center items-center">
          <h2 className="text-[2.5rem]">What Clients Says</h2>
          <h4 className="font-light">
            Review our clients experience and their feedback about our services.
          </h4>
        </div>
        <div className="h-[90%]">
          <div className="w-80% px-[5vmax] h-full relative flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-6">
              <img
                src="https://picsum.photos/300/300?random=1"
                alt=""
                id="customerImg"
                className="ImgCard rounded-full h-[15vmax]"
              />
              <h3 id="customerName" className="text-[1.5vmax] font-bold">
                Customer Name
              </h3>
              <p
                id="customerMessage"
                className="w-[50%] text-center font-light text-[0.8vmax]"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="w-[80%] h-full absolute top-0 z-10">
              <button className="hover:scale-[1.4] transition duration-[0.5s] absolute top-1/2 right-0">
                <img src="/assests/btn-next.png" />
              </button>
              <button className="hover:scale-[1.4] transition duration-[0.5s]  absolute top-1/2 left-0">
                <img src="/assests/btn-prev.png" />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="card">
          <img
            src="https://picsum.photos/200/300?random=1"
            alt=""
            id="customerImg"
            className="ImgCard"
          />
          <h3 id="customerName">Customer Name</h3>
          <div className="review">
            <span className="star">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="star">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="star">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="star">
              <i className="fa-solid fa-star"></i>
            </span>
            <span className="star">
              <i className="fa-solid fa-star-half"></i>
            </span>
          </div>

          

          <a href="#" className="btn prevBtn">
            <i className="fa-solid fa-less-than"></i>
          </a>
          <a href="#" className="btn nextBtn">
            <i className="fa-solid fa-greater-than"></i>
          </a>
        </div> */}
      </div>
    </>
  );
};

export default Testimonial;
