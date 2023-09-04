import React from "react";
import image from "../../../assets/girlimage.png";
const Banner = () => {
  return (
    <section id="home" className="">
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
              <form className="  grid grid-cols-3 gap-x-3">
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
                <div className=" w-full flex justify-center">
                  <input
                    type="submit"
                    value=" Search"
                    className=" btn btn-primary w-4/5 rounded-full"
                  />
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
