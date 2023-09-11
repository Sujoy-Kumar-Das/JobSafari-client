import React, { useEffect, useState } from "react";
import useLoadData from "../../hooks/useLoadData";
import Loader from "../shared/loaders/Loader";
import SearchComponent from "../shared/searchComponent/SearchComponent";
import AllJobPostCard from "./AllJobPostCard";
import Error from "../shared/error/Error";
import InfiniteScroll from "react-infinite-scroll-component";

const AllJobPosts = () => {
  const [jobPosts, setJobPosts] = useState([]); // for store all jobs
  const [error, setError] = useState(""); //errors
  const [loader, setLoader] = useState(false); // searching page loader state
  const [page, setPage] = useState(1); // page state
  const [hasMore, setHasMore] = useState(true); // is more data available state
  const [searchResult, setSearchResult] = useState(false); // searching for hidden scroll loader and end text
  const itemsPerPage = 6;

  // all jobs url
  const url = `http://localhost:5000/job-posts?page=${page}&itemsPerPage=${itemsPerPage}`;

  // fetch initial data funtion
  const initialData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    if (data.jobPosts.length === 0) {
      setHasMore(false);
    } else {
      if (!data.success) {
        setError(data.message);
      } else {
        setJobPosts([...jobPosts, ...data.jobPosts]);
        setPage(page + 1);
      }
    }
  };

  // call fetch initial data funtion
  useEffect(() => {
    initialData();
  }, []);

  // laod more data for next funtion
  const loadMoreData = async () => {
    initialData();
  };
  return (
    <section className=" w-11/12 mx-auto mb-20 mt-10">
      <div className=" my-2 lg:my-5 w-3/5 mx-auto  bg-base-200 rounded-full flex justify-center items-center p-1">
        <SearchComponent
          setJobPosts={setJobPosts}
          setError={setError}
          setLoader={setLoader}
          setSearchResult={setSearchResult}
        ></SearchComponent>
      </div>
      {error ? (
        <div className=" text-error font-bold text-3xl flex items-center justify-center  h-[40vh]">
          <p>{error}</p>
        </div>
      ) : (
        <>
          <h1 className=" text-3xl lg:text-5xl font-bold text-secondary mb-5">
            Recent Job posts
          </h1>
          {loader ? (
            <Loader></Loader>
          ) : (
            <InfiniteScroll
              dataLength={jobPosts.length}
              next={loadMoreData}
              hasMore={hasMore}
              loader={
                <div
                  className={`flex justify-center w-full my-10 ${
                    searchResult && " hidden"
                  }`}
                >
                  <span className="loading loading-spinner text-primary"></span>
                </div>
              }
              endMessage={
                <p
                  className={`text-3xl font-bold text-warning text-center mt-5 ${
                    searchResult && " hidden"
                  }`}
                >
                  You caught up all job post's.
                </p>
              }
            >
              <div className=" grid grid-cols-1 lg:grid-cols-3 w-full gap-x-5 gap-y-10">
                {jobPosts?.map((jobPost) => (
                  <AllJobPostCard
                    key={jobPost._id}
                    jobPost={jobPost}
                  ></AllJobPostCard>
                ))}
              </div>
            </InfiniteScroll>
          )}
        </>
      )}
    </section>
  );
};

export default AllJobPosts;
