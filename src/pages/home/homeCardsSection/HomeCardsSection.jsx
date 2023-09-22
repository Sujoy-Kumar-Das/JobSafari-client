import React from "react";
import HomeCard from "./HomeCard";
import homeCardImage1 from "../../../assets/homeCardImage1.svg";
import homeCardImage2 from "../../../assets/homeCardImage2.svg";

const HomeCardsSection = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 my-20">
      <HomeCard
        image={homeCardImage1}
        title="Hiring Solutions"
        subTitle="Streamline Recruitment, Find Talent, and Grow Your Team Effectively."
        linkText="Post a job"
        link="/post-job"
      />

      <HomeCard
        image={homeCardImage2}
        title="In Favor of the Candidate"
        subTitle="Unlocking Opportunities for Your Career."
        linkText="Find a job"
        link="/job-search"
      />
    </div>
  );
};

export default HomeCardsSection;
