import React from "react";
import {
  FaCalendar,
  FaCalendarAlt,
  FaGlobe,
  FaGraduationCap,
  FaHeart,
  FaHome,
  FaSquare,
} from "react-icons/fa";
import { FaCarRear, FaLocationDot, FaSackDollar } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";

const JobDetailCompo = ({ data }) => {
  return (
    <>
      <div className=" mt-4">
        <h3 className=" text-2xl text-secondary mb-5">Job role insights</h3>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10">
          <div className=" flex gap-x-2 items-center justify-start">
            <p className=" text-xl p-2 border-2 rounded-full">
              <FaCalendarAlt />
            </p>
            <div className=" text-base">
              <p className=" flex gap-x-2">Date Posted</p>
              <p className=" text-sm">{data?.jobDetail?.[0].deadline}</p>
            </div>
          </div>
          <div className=" flex gap-x-2 items-center">
            <p className=" text-xl p-2 border-2 rounded-full">
              <FaCalendarAlt />
            </p>
            <div className=" text-base">
              <p className=" flex gap-x-2">Closing date</p>
              <p className=" text-sm">{data?.jobDetail?.[0].deadline}</p>
            </div>
          </div>
          <div className=" flex gap-x-2 items-center">
            <p className=" text-xl p-2 border-2 rounded-full">
              <FaLocationDot />
            </p>
            <div className=" text-base">
              <p className=" flex gap-x-2">Hiring location</p>
              <p className=" text-sm">{data?.jobDetail?.[0].location}</p>
            </div>
          </div>
          <div className=" flex gap-x-2 items-center justify-start">
            <p className=" text-xl p-2 border-2 rounded-full">
              <FaSackDollar />
            </p>
            <div className=" text-base">
              <p className=" flex gap-x-2">Offered salary</p>
              <p className=" text-sm">{data?.jobDetail?.[0].salary}</p>
            </div>
          </div>
          <div className=" flex gap-x-2 items-center">
            <p className=" text-xl p-2 border-2 rounded-full">
              <FaSquare />
            </p>
            <div className=" text-base">
              <p className=" flex gap-x-2">Career level</p>
              <p className=" text-sm">{data?.jobDetail?.[0].Career_level}</p>
            </div>
          </div>
          <div className=" flex gap-x-2 items-center ">
            <p className=" text-xl p-2 border-2 rounded-full">
              <FaGraduationCap />
            </p>
            <div className=" text-base">
              <p className=" flex gap-x-2">Qualification</p>
              <p className=" text-sm">{data?.jobDetail?.[0].education}</p>
            </div>
          </div>
          <div className=" flex gap-x-2 items-center">
            <p className=" text-xl p-2 border-2 rounded-full">
              <FaGlobe />
            </p>
            <div className=" text-base">
              <p className=" flex gap-x-2">Experience</p>
              <p className=" text-sm">{data?.jobDetail?.[0].experience}</p>
            </div>
          </div>
          <div className=" flex gap-x-2 items-center">
            <p className=" text-xl p-2 border-2 rounded-full">
              <FaGlobe />
            </p>
            <div className=" text-base">
              <p className=" flex gap-x-2">Quantity</p>
              <p className=" text-sm">{data?.jobDetail?.[0].quantity} person</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" divider"></div>
      <div className=" mt-4">
        <h1 className=" text-xl lg:text-3xl mb-1">Description</h1>
        <div className=" mt-3">
          <h3 className=" text-2xl mb-2">Overview</h3>
          <p className=" text-base">{data?.jobDetail?.[0].description}</p>
        </div>
        <div className=" mt-3">
          <h3 className=" text-2xl mb-2">Requirements</h3>
          <ul>
            {data?.jobDetail?.[0].requirements?.map((requirement, index) => (
              <li className="list-disc	" key={index}>
                {requirement}
              </li>
            ))}
          </ul>
        </div>
        <div className=" mt-3">
          <h3 className=" text-2xl mb-2">Skills & Experience</h3>
          <ul>
            {data?.jobDetail?.[0].skills?.map((skill, index) => (
              <li className="list-disc	" key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default JobDetailCompo;
