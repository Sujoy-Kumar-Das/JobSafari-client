import React from "react";
import homeCardImage1 from "../../../assets/homeCardImage1.svg";
import "./jobPost.css";

const JobPostCard = () => {
  return (
    <div className=" flex flex-col lg:flex-row-reverse justify-between items-center bg-base-200 shadow-xl w-full lg:h-[300px] p-5 rounded-xl">
      <img src={homeCardImage1} alt="" className=" jobPostimage" />
      <div className=" w-full">
        <h1 className=" text-4xl font-bold p-3 text-secondary">
          Hiring Solutions
        </h1>
        <p className=" text-lg p-3 text-secondary">
          Streamline Recruitment, Find Talent, and Grow Your Team Effectively.
        </p>
        <div className=" p-3">
          <button className=" btn btn-primary">Post a job</button>
        </div>
      </div>
    </div>
  );
};

export default JobPostCard;
