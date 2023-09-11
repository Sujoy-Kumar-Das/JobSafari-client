import React from "react";
import { useForm } from "react-hook-form";

const SearchComponent = ({
  setJobPosts,
  setError,
  setLoader,
  setSearchResult,
}) => {
// react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // search form handler
  const searchFormHandler = async (data) => {
    setLoader(true);
    setError("");
    const location = data.location;
    const jobTitle = data.jobTitle;
    const url = `http://localhost:5000/search-job?jobTitle=${jobTitle}&location=${location}`;
    const res = await fetch(url);
    const jobsData = await res.json();
    if (!jobsData?.success) {
      setError(jobsData?.message);
      setJobPosts([]);
      setLoader(false);
      return;
    }
    setJobPosts([...jobsData.jobs]);
    setLoader(false);
    setSearchResult(true);
  };
  return (
    <form
      onSubmit={handleSubmit(searchFormHandler)}
      className="  grid grid-cols-3 gap-x-3 "
    >
      <div>
        <input
          type="text"
          placeholder={`${
            errors?.jobTitle ? errors?.jobTitle?.message : "Job Title"
          }`}
          className=" input rounded-s-full ps-5 bg-base-200 w-full"
          {...register("jobTitle", { required: "Please Enter A Job Title." })}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={`${
            errors?.location ? errors?.location?.message : "Location"
          }`}
          className="bg-base-200 input border-s-2 border-e-2 border-t-0  border-b-0 border-gray-500 rounded-none w-full"
          {...register("location", {
            required: "Location help you for better seacrh",
          })}
        />
      </div>
      <div className=" w-full flex justify-center items-center">
        <button className=" btn btn-primary w-full rounded-full flex p-1">
          <span>Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hidden lg:block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchComponent;
