import React from "react";
import image from "../../../assets/girlimage.png";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className=" my-10">
      <div className=" lg:h-screen w-full flex justify-center items-center ">
        <div className=" flex lg:flex-row-reverse flex-col justify-around items-center">
          <div className=" w-full lg:w-1/2 flex justify-end">
            <img src={image} className=" w-full lg:w-4/5" />
          </div>
          <div className=" w-full lg:w-1/2 mt-5 lg:mt-0">
            <h1 className=" text-3xl lg:text-5xl font-bold text-secondary">
              Your Career Starts Here,Find Your Dream Job Today!
            </h1>
            <p className="py-6 text-secondary">
              Start your career journey with{" "}
              <strong className=" font-extrabold">JobSafari</strong>, where your
              dream job is just a click away. We connect you to tailored
              opportunities that match your skills and passions. Don't
              wait—begin your path to success today!
            </p>

            <Link to={"/job-search"} className=" btn btn-primary rounded-full">
              Find Your Dream Job{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
