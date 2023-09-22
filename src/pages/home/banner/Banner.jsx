import React from "react";
import image from "../../../assets/girlimage.png";
import { Link } from "react-router-dom";
import SearchComponent from "../../shared/searchComponent/SearchComponent";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section
      className=" my-10"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
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
            <div className=" my-2 lg:my-5  mx-auto  bg-base-200 rounded-full flex justify-center items-center p-1">
              <SearchComponent
                fristDataName="Job Title"
                secondDataName="Location"
              ></SearchComponent>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
