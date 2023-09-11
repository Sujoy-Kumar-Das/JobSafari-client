import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { Link } from "react-router-dom";

const CompannyDetailCompo = ({ data }) => {
  return (
    <>
      <div className=" mt-4">
        <div className=" mt-3">
          <h1 className=" text-xl lg:text-2xl mb-1">Description</h1>
          <p className=" text-base">{data?.jobDetail?.[0].description}</p>
        </div>
        <div className=" divider"></div>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-10">
          <div className=" text-secondary">
            <p className=" text-lg ">Company Name</p>
            <p className=" text-sm">{data?.jobDetail?.[0].company}</p>
          </div>
          <div className=" text-secondary">
            <p className=" text-lg ">Categories</p>
            <p className=" text-sm">{data?.jobDetail?.[0].categories}</p>
          </div>
          <div className=" text-secondary">
            <p className=" text-lg ">Company size</p>
            <p className=" text-sm">{data?.jobDetail?.[0].company_size}</p>
          </div>
          <div className=" text-secondary">
            <p className=" text-lg ">Founded in</p>
            <p className=" text-sm">{data?.jobDetail?.[0].Founded_in}</p>
          </div>
          <div className=" text-secondary">
            <p className=" text-lg ">Location</p>
            <p className=" text-sm">{data?.jobDetail?.[0].location}</p>
          </div>

          <div className=" text-secondary">
            <p className=" text-lg ">Email</p>
            <p className=" text-sm">{data?.jobDetail?.[0].email}</p>
          </div>
          <div className=" flex gap-x-2 text-lg">
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaTwitter />
            </p>
            <p>
              <FaLinkedin />
            </p>
            <p>
              <FaInstagram />
            </p>
          </div>
        </div>
        <div className=" mt-5">
          <Link className=" btn btn-outline rounded-full lg:me-5 mb-3">
            visit www.{data?.jobDetail?.[0].company}.com
          </Link>
          <button className=" btn btn-primary rounded-full">
            Send message <AiOutlineSend />
          </button>
        </div>
      </div>
    </>
  );
};

export default CompannyDetailCompo;
