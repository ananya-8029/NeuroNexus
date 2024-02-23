import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="h-[33rem]">
        <div className="text-[#436d31] h-1/3 flex flex-col justify-center items-center">
          <h2 className="text-[2.5rem]">What Clients Says</h2>
          <h4 className="font-light">
            Review our clients experience and their feedback about our services.
          </h4>
        </div>
        <div className="bg-blue-400 h-2/3">
          <div className="w-80% bg-red-300 h-full">
            <div className="w-full h-full relative">
              <button className="absolute top-1/2 right-0">
                <img src="/assests/btn-next.png" />
              </button>
              <button className="absolute top-1/2 left-0">
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

          <p id="customerMessage">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

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
