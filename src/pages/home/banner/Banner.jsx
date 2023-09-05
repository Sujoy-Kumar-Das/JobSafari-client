import React from "react";
import image from "../../../assets/girlimage.png";
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
            <div className=" mt-2 lg:mt-5 h-16 bg-base-200 rounded-full flex justify-center items-center p-2">
              <form className="  grid grid-cols-3 gap-x-3 ">
                <div>
                  <input
                    type="text"
                    placeholder="Job Title"
                    className=" input rounded-s-full ps-5 bg-base-200 w-full"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Location"
                    className="bg-base-200 input border-s-2 border-e-2 border-t-0  border-b-0 border-gray-500 rounded-none w-full"
                  />
                </div>
                <div className=" w-full flex justify-center items-center">
                  <button className=" btn btn-primary w-full rounded-full flex">
                    <span>Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 hidden lg:block"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
