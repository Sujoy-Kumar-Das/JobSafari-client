import React from "react";
import homeCardImage2 from "../../../assets/homeCardImage2.svg";
import   "./upload.css";

const UploadCvCard = () => {
  return (
    <div className=" flex flex-col lg:flex-row-reverse justify-between items-center bg-base-200 shadow-xl w-full lg:h-[300px] p-5 rounded-xl">
      <img src={homeCardImage2} alt="" className="imgae" />
      <div className=" w-full">
        <h1 className=" text-4xl font-bold p-3 text-secondary">
          In Favor of the Candidate
        </h1>
        <p className=" text-lg p-3 text-secondary">
          Unlocking Opportunities for Your Career.
        </p>
        <div className=" p-3">
          <button className=" btn btn-primary">Find a job</button>
        </div>
      </div>
    </div>
  );
};

export default UploadCvCard;
