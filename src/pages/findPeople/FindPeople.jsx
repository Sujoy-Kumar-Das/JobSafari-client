import React from "react";
import useLoadData from "../../hooks/useLoadData";
import Error from "../shared/error/Error";
import Loader from "../shared/loaders/Loader";
import UserCard from "./UserCard";

const FindPeople = () => {
  const url = `http://localhost:5000/find-peoples`;
  const [isLoading, data] = useLoadData("/find-peoples", url);
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (!data?.success) {
    return <Error message={data.message}></Error>;
  }
  return (
    <section className="w-11/12 mx-auto mb-20 mt-10">
      <div className=" w-3/5 mx-auto mb-20 bg-base-200 rounded-full">
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.users.map((user) => (
          <UserCard key={user._id} user={user}></UserCard>
        ))}
      </div>
    </section>
  );
};

export default FindPeople;
