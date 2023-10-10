import React, { useContext } from "react";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import { useForm } from "react-hook-form";
import usePostData from "../../../hooks/usePostData";

const AddBlog = () => {
  const { user } = useContext(AuthContextProvider);
  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //   post data custom hook
  const [postLoader, postData] = usePostData("post-blog", reset);

  const handlePostBlog = async (data) => {
    const blog = {
      blog_title: data.blogTitle,
      blog: data.blog,
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
    };

    // call post data funtion
    await postData(blog);
  };
  return (
    <section className=" my-12 w-11/12 mx-auto">
      <h1 className=" text-3xl text-center  font-bold text-secondary">
        Hi {user.displayName} whats on your mind ? Let's share with other's..
      </h1>
      <form onSubmit={handleSubmit(handlePostBlog)} className=" mt-6">
        <div className="form-control">
          <label className="label">Blog's Title</label>
          <input
            type="text"
            placeholder={`${
              errors.blogTitle
                ? errors.blogTitle.message
                : "Enter Your Blog's Title"
            }`}
            className={`input input-bordered ${
              errors?.blogTitle?.message &&
              " input-error placeholder-error border-error"
            }`}
            {...register("blogTitle", {
              required: "Blog's title is required.",
            })}
          />
        </div>
        <div className="form-control">
          <label className="label">Blog</label>

          <textarea
            className={`textarea textarea-bordered w-full h-40 ${
              errors?.blog?.message &&
              " textarea-error placeholder-error border-error"
            }`}
            placeholder={`${
              errors.blog
                ? errors.blog.message
                : "Whats on your mind ? Let's share with other's."
            }`}
            {...register("blog", {
              required: "Blog is required.",
            })}
          ></textarea>
        </div>
        <div className=" lg:w-2/5 mx-auto mt-5 w-full">
          <button className=" btn btn-primary w-full ">
            {" "}
            {postLoader ? (
              <>
                Uploading Blog <span className=" loading loading-dots"></span>
              </>
            ) : (
              "Upload Blog"
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddBlog;
