import { useContext, useState } from "react";
import { validateImage } from "../../../../commonFuntions/validatedImage";
import { AuthContextProvider } from "../../../../contexts/AuthContext/AuthContext";

const PersonalInfo = ({ register, errors, resume }) => {
  const { user } = useContext(AuthContextProvider);

  return (
    <div id="personal-info">
      <h1 className=" text-3xl lg:text-4xl font-bold text-secondary mb-5">
        Personal Information
      </h1>
      <div className="form-control">
        <label className="label">Career Objective</label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Career Objective"
          {...register("careerObjective")}
          defaultValue={resume?.careerObjective}
        ></textarea>
        {errors?.email && (
          <p className=" mt-1 text-error">{errors?.email?.message}</p>
        )}
      </div>
      <div className=" grid grid-cols-1  md:grid-cols-2 gap-x-5 gap-y-2">
        <div className="form-control">
          <label className="label">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            defaultValue={user?.displayName}
            className={`input input-bordered ${
              errors?.name?.message &&
              " input-error placeholder-error border-error"
            }`}
            {...register("name", { required: "Name Is Required." })}
          />
          {errors?.name && (
            <p className=" mt-1 text-error">{errors?.name?.message}</p>
          )}
        </div>

        <div className="form-control">
          <label className="label">Address</label>
          <input
            type="address"
            placeholder="Enter Your Address"
            className={`input input-bordered ${
              errors?.address?.message &&
              " input-error placeholder-error border-error"
            }`}
            {...register("address", {
              required: " Address Is Required",
            })}
            defaultValue={resume?.address}
          />
          {errors?.email && (
            <p className=" mt-1 text-error">{errors?.address?.message}</p>
          )}
        </div>

        <div className="form-control">
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            defaultValue={user?.email}
            className={`input input-bordered ${
              errors?.email?.message &&
              " input-error placeholder-error border-error"
            }`}
            {...register("email", {
              required: "Email Address Is Required",
            })}
          />
          {errors?.email && (
            <p className=" mt-1 text-error">{errors?.email?.message}</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">Phone</label>
          <input
            type="tel"
            placeholder="Enter Your Phone Number"
            defaultValue={resume?.mobile}
            className={`input input-bordered ${
              errors?.email?.message &&
              " input-error placeholder-error border-error"
            }`}
            {...register("mobile", {
              required: "Phone Number Is Required",
            })}
          
          />
          {errors?.mobile && (
            <p className=" mt-1 text-error">{errors?.mobile?.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
