import React from "react";

const SocialInfo = ({ register, errors,resume }) => {
  return (
    <div id="social-info">
      <h1 className=" text-3xl lg:text-4xl font-bold text-secondary mb-5">
        Social Information
      </h1>
      <div className=" grid grid-cols-1  md:grid-cols-2 gap-x-5 gap-y-2">
        <div className="form-control">
          <label className="label">Facebook</label>
          <input
            type="url"
            placeholder="Enter Facebook Link"
            className={`input input-bordered ${
              errors?.name?.message &&
              " input-error placeholder-error border-error"
            }`}
            {...register("facebook", { required: "Facebook is required" })}
            defaultValue={resume?.social[0].link}
          />
          {errors?.facebook && (
            <p className=" mt-1 text-error">{errors?.facebook?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">Twiter </label>
          <input
            type="url"
            placeholder="Enter Twiter Link"
            className={`input input-bordered `}
            {...register("twiter")}
            defaultValue={resume?.social[1].link}
          />
        </div>
        <div className="form-control">
          <label className="label">Linkdin</label>
          <input
            type="url"
            placeholder="Enter Linkdin Link"
            className={`input input-bordered ${
              errors?.linkdin?.message &&
              " input-error placeholder-error border-error"
            }`}
            {...register("linkdin", {
              required: "Linkdin id is required.",
            })}
            defaultValue={resume?.social[2].link}
          />
          {errors?.linkdin && (
            <p className=" mt-1 text-error">{errors?.linkdin?.message}</p>
          )}
        </div>

        <div className="form-control">
          <label className="label">Github</label>
          <input
            type="url"
            placeholder="Enter Facebook Link"
            className={`input input-bordered `}
            {...register("github")}
            defaultValue={resume?.social[3].link}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialInfo;
