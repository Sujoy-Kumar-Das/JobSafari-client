import React, { useEffect, useState } from "react";
import Error from "../shared/error/Error";
import Loader from "../shared/loaders/Loader";
import useLoadData from "../../hooks/useLoadData";
import MapCardCompo from "../../components/MapCardCompo/MapCardCompo";
import SearchComponent from "../shared/searchComponent/SearchComponent";
import Pagination from "../shared/pagination/Pagination";
const AllJobPosts = () => {
  // current page state
  const [currentPage, setCurrentPage] = useState(1);

  // items show per page
  const itemsPerPage = 6;

  // all jobs url
  const url = `http://localhost:5000/job-posts?perPageItem=${itemsPerPage}&currentPage=${currentPage}`;
  // get data custom hook
  const [isLoading, data] = useLoadData("/job-posts", url);
  const totalData = data?.count;
  const totalPage = Math.ceil(totalData / itemsPerPage);
  return (
    <section>
      <div className=" my-2 lg:my-5 w-full lg:w-3/5  mx-auto  bg-base-200 rounded-full flex justify-center items-center p-1">
        <SearchComponent
          fristDataName="Job Title"
          secondDataName="Location"
        ></SearchComponent>
      </div>
      <h1 className=" text-3xl lg:text-5xl font-bold text-secondary mb-5">
        Recent Job posts
      </h1>
      {isLoading ? (
        <Loader />
      ) : !data?.success ? (
        <Error message={data?.message} />
      ) : (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <MapCardCompo items={data?.jobPosts}></MapCardCompo>
        </div>
      )}

      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPage={totalPage}
      ></Pagination>
    </section>
  );
};

export default AllJobPosts;
