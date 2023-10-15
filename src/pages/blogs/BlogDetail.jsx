import React from "react";
import { useParams } from "react-router-dom";
import useLoadData from "../../hooks/useLoadData";
import Loader from "../shared/loaders/Loader";
import Error from "../shared/error/Error";
import { AiFillLike } from "react-icons/ai";
import TittleCompo from "../../components/titleCompo/TittleCompo";

const BlogDetail = () => {
  // user params hook for get id
  const { id } = useParams();

  //   use load data custom hook for load data
  const [isLoading, data, refetch] = useLoadData(
    "blog-detail",
    `blog/detail/${id}`
  );

  if (isLoading) {
    return <Loader />;
  }

  if (!data.success) {
    return <Error message={data.message} />;
  }
  return (
    <>
      <TittleCompo title={"Blog Detail"}></TittleCompo>
      <section>
        <div className="bg-gray-100 p-8">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-4">
              {data.blog.blog_title}
            </h1>

            <div className="flex items-center space-x-4 mb-4">
              <img
                src={data.blog.photo}
                alt={`${data.blog.name} image`}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-lg font-semibold">{data.blog.name}</p>
                <p className="text-gray-500">{data.blog.email}</p>
              </div>
            </div>

            <p className="text-lg leading-7">{data.blog.blog}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
