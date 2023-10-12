import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className=" text-lg font-bold">{blog.blog_title}</h2>
        <p className=" mt-1 text-base">
          {blog.blog.length > 80 ? (
            <span>
              {blog.blog.slice(0, 100)}
              <Link className=" btn-link ms-2">read more</Link>
            </span>
          ) : (
            blog.blog
          )}
        </p>
        <div className=" divider"></div>
        <div className=" flex justify-between items-center">
          <div className=" flex justify-between items-center space-x-2 w-3/5">
            <div className="avatar">
              <div className=" w-8">
                <img src={blog.photo} />
              </div>
            </div>
            <div>
              <p>{blog.name}</p>
              <p>{blog.email}</p>
            </div>
          </div>
          <div className=" flex items-end">
            <Link
              to={`/blog/detail/${blog._id}`}
              className="btn btn-primary btn-sm rounded"
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
