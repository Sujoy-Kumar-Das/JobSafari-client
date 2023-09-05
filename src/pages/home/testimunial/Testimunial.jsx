import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/loaders/Loader";
// import required modules
// import { Pagination } from "swiper";
const Testimunial = ({ setHomePageLader }) => {
  const url = "http://localhost:5000/testimonials";
  const [loader, data] = useLoadData("/testimonials", url);

  let slidePerView = 1;
  if (window.innerWidth >= 1024) {
    slidePerView = 4; // Large devices (e.g., desktop)
  } else if (window.innerWidth >= 768) {
    slidePerView = 2; // Medium devices (e.g., tablets)
  }
  if (loader) {
    return <Loader></Loader>;
  }

  return (
    <section className=" my-20">
      <div className="text-center mb-5 text-secondary">
        <h1 className=" text-3xl lg:text-5xl font-bold ">
          What our customers says
        </h1>
        <p className="py-6">Don't take our word for it, take theirs!</p>
      </div>

      <Swiper
        slidesPerView={slidePerView}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-full"
      >
        {data?.testimonials?.map((testimonial) => (
          <SwiperSlide key={testimonial._id}>
            <div className=" border-black border-2 mb-10 card pt-5 h-96 text-secondary rounded-md hover:bg-gray-100 transition-all duration-500">
              <div className=" flex justify-center items-center avatar">
                <div className="w-24 rounded-full">
                  <img src={testimonial.image_url} />
                </div>
              </div>
              <div className="card-body">
                <h2 className="card-title">{testimonial.name} </h2>
                <h2>{testimonial.job_title}</h2>
                <p>{testimonial.testimonial}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimunial;
