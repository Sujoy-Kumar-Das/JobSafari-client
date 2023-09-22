import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useLoadData from "../../hooks/useLoadData";
import Error from "../shared/error/Error";
import Loader from "../shared/loaders/Loader";
import JobDetailCompo from "./JobDetailCompo";
import { AiOutlineHeart } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import CompannyDetailCompo from "./CompannyDetailCompo";
import { toast } from "react-toastify";

const JobDetail = () => {
  const { id } = useParams();
  const [showDetail, setShowDetail] = useState(true);

  const url = `http://localhost:5000/job-detail/${id}`; //   url for laod job detail

  const [isLoading, data] = useLoadData("/job-detail", url); // load data custom hook

  if (isLoading) {
    return <Loader></Loader>;
  }
  if (!data?.success) {
    return <Error message={data?.message}></Error>;
  }
  console.log(data.jobDetail[0]);
  return (
    <section className=" w-4/5 lg:w-2/5 mx-auto my-10 text-secondary">
      <div className=" flex justify-between items-start w-full">
        <div>
          <h1 className=" text-xl lg:text-3xl mb-1">
            {data?.jobDetail?.[0].job_title}
          </h1>
          <p className=" flex items-center gap-x-2">
            <span className=" text-xl">
              <FaHome />
            </span>
            <span className=" text-lg">{data?.jobDetail?.[0].company}</span>
          </p>
        </div>
        <p className=" text-2xl text-secondary">
          <AiOutlineHeart />
        </p>
      </div>
      <div className=" flex justify-between items-start mt-3">
        <h1
          onClick={() => setShowDetail(true)}
          className={`text-3xl cursor-pointer ${
            showDetail && "border-b-2 border-secondary"
          }`}
        >
          Job Details
        </h1>
        <h1
          onClick={() => setShowDetail(false)}
          className={`text-3xl cursor-pointer ${
            !showDetail && "border-b-2 border-secondary"
          }`}
        >
          Company Details
        </h1>
      </div>
      <div className="divider mt-1"></div>
      {showDetail ? (
        <JobDetailCompo data={data} />
      ) : (
        <CompannyDetailCompo data={data}></CompannyDetailCompo>
      )}
      <div className=" divider"></div>
      <div>
        <div className="flex justify-between items-start">
          <h1 className=" text-xl lg:text-2xl mb-1">Jobs Opening</h1>
          <button
            onClick={() => {
              toast.success("hello");
              console.log("hello")
            }}
            className=" btn btn-primary rounded-full"
          >
            Apply now
          </button>
        </div>
        <p className=" text-lg">{data?.jobDetail?.[0].job_title}</p>
      </div>
    </section>
  );
};

export default JobDetail;
