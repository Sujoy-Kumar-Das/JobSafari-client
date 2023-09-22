import React from "react";
import JobPostCard from "../../pages/shared/jobPostCard/JobPostCard";
const MapCardCompo = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <JobPostCard key={item._id} item={item}></JobPostCard>
      ))}
    </>
  );
};

export default MapCardCompo;
