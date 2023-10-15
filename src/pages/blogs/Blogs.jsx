import React from "react";
import useLoadData from "../../hooks/useLoadData";
import Loader from "../shared/loaders/Loader";
import BlogCard from "./BlogCard";
import TittleCompo from "../../components/titleCompo/TittleCompo";

const Blogs = () => {
  // use load data custom hook for laod data
  const [isLoading, data, refetch] = useLoadData("blogs", "blogs");
  if (isLoading) {
    return <Loader />;
  }

  console.log(data);
  return (
    <>
      <TittleCompo title={"Blogs"}></TittleCompo>
      <section className="mt-8">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {data.blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
