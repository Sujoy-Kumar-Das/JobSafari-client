import React from "react";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/loaders/Loader";
import RecentJobCard from "./RecentJobCard";
import { Link } from "react-router-dom";

const RecentJobPost = () => {
  // get job url
  const url = `http://localhost:5000/job-posts?limit=3`;
  // laod all job custom hook
  const [loader, data] = useLoadData("/job-posts", url);

  if (loader) {
    return <Loader></Loader>;
  }
  return (
    <section className=" my-10">
      <h1 className=" text-3xl lg:text-5xl font-bold text-left mb-5 text-secondary">
        Recent Job Post's
      </h1>
      <div className=" w-full flex flex-col lg:flex-row justify-between items-center gap-5">
        <div className=" grid grid-cols-1 lg:grid-cols-3 w-full gap-x-5 gap-y-10">
          {data?.jobPosts?.map((jobPost) => (
            <RecentJobCard key={jobPost._id} jobPost={jobPost}></RecentJobCard>
          ))}
        </div>
        <div>
          <Link to={`/job-serarch`}>
            <button className=" btn btn-primary btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentJobPost;
