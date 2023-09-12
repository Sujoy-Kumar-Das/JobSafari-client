import React from "react";
import image from "../../../assets/loginBgImage.png";
import { useForm } from "react-hook-form";
import Socail from "../social/Socail";
import { validateImage } from "../../../commonFuntions/validatedImage";
const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSinup = (data, reset) => {
    console.log(data);
  };

  // validate password validation
  const validatedPassword = (password) => {
    if (!password) {
      return "Password is required";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one digit";
    }
    if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
      return "Password must contain at least one special charecter";
    }
    return true;
  };

  return (
    <section className=" mt-10 w-4/5 mx-auto">
      <div className=" flex lg:flex-row-reverse flex-col justify-around items-center">
        <div className=" w-full lg:w-1/2 flex justify-end">
          <img src={image} className=" w-full lg:w-4/5" />
        </div>
        <div className=" w-full lg:w-1/2">
          <form onSubmit={handleSubmit(handleSinup)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className={`input input-bordered ${
                  errors?.name?.message &&
                  " input-error placeholder-error border-error"
                }`}
                {...register("name", { required: "Name Is Required." })}
              />
            </div>
            {errors?.name && (
              <p className=" mt-1 text-error">{errors?.name?.message}</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className={`input input-bordered ${
                  errors?.email?.message &&
                  " input-error placeholder-error border-error"
                }`}
                {...register("email", {
                  required: "Email Address Is Required",
                })}
              />
            </div>
            {errors?.email && (
              <p className=" mt-1 text-error">{errors?.email?.message}</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className={`input input-bordered ${
                  errors?.password?.message &&
                  " input-error placeholder-error border-error"
                }`}
                {...register("password", {
                  required: "Password Is Required",
                  validate: validatedPassword,
                })}
              />
            </div>
            {errors?.password && (
              <p className=" mt-1 text-error">{errors?.password?.message}</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Photo</span>
              </label>
              <input
                type="file"
                className={`file-input file-input-bordered text-secondary w-full ${
                  errors?.photo?.message
                    ? " file-input-error text-error"
                    : "file-input-secondary"
                }`}
                {...register("photo", {
                  required: "Photo Is Required",
                  validate: validateImage,
                })}
              />
            </div>
            {errors?.photo && (
              <p className=" mt-1 text-error">{errors?.photo?.message}</p>
            )}
            <input
              type="submit"
              value="Sing up"
              className=" btn btn-primary w-full mt-5"
            />
          </form>
          <div className="divider">OR</div>
          <Socail />
        </div>
      </div>
    </section>
  );
};

export default SingUp;
