import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useLoadData from "../../../hooks/useLoadData";
import SearchComponent from "../searchComponent/SearchComponent";
import MapCardCompo from "../../../components/MapCardCompo/MapCardCompo";
import Loader from "../loaders/Loader";
import Error from "../error/Error";
import Pagination from "../pagination/Pagination";

const SearchResultCompo = () => {
  // states
  const [currentPage, setCurrentPage] = useState(1);

  // use location hook
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  //   get query parameters for search
  const param1 = queryParams.get("param1");
  const param2 = queryParams.get("param2");

  // items show per page
  const itemsPerPage = 6;

  // load data url
  const url = `job-posts?perPageItem=${itemsPerPage}&currentPage=${currentPage}&jobTitle=${param1}&location=${param2}`;

  //   load data by custom hook
  const [isLoading, data] = useLoadData("/job-posts", url);

  // total page
  const totalPage = Math.ceil(data?.count / itemsPerPage);

  if (!param1 || !param2) {
    return (
      <Navigate to={"/job-posts"} replace>
        {" "}
      </Navigate>
    );
  }
  return (
    <section className=" w-11/12 mx-auto mb-20 mt-10">
      <div className=" my-2 lg:my-5 w-3/5 mx-auto  bg-base-200 rounded-full flex justify-center items-center p-1">
        <SearchComponent
          fristDataName={"Job Title"}
          secondDataName={"Location"}
        ></SearchComponent>
      </div>

      {isLoading ? (
        <Loader></Loader>
      ) : !data?.success ? (
        <Error message={data?.message}></Error>
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

export default SearchResultCompo;
