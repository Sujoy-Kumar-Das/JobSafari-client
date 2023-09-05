import React from "react";
import JobPostCard from "./JobPostCard";
import UploadCvCard from "./UploadCvCard";

const HomeCard = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 my-20">
      <JobPostCard></JobPostCard>
      <UploadCvCard></UploadCvCard>
    </div>
  );
};

export default HomeCard;
