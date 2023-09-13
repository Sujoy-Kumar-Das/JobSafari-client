import React, { useContext, useState } from "react";
import image from "../../../assets/loginBgImage.png";
import { useForm } from "react-hook-form";
import Socail from "../social/Socail";
import { validateImage } from "../../../commonFuntions/validatedImage";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import { uploadImage } from "../../../commonFuntions/uploadImage";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { storeUsersInfo } from "../../../commonFuntions/storeUser";

const SingUp = () => {
  // states
  const [firebaseError, setFirebaseError] = useState(""); // fire base errors state
  const [error, setError] = useState(""); // errors state
  const [userType, setUserType] = useState("Job Seeker"); // users type state
  const [loading, setLoading] = useState(false);
  const [accept, setAccpet] = useState(false);

  // react form hook
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // contexts
  const { createUser, updateUserInfo } = useContext(AuthContextProvider);

  // handle sinup
  const handleSignup = async (data) => {
    try {
      // reset errors
      setLoading(true);
      setFirebaseError("");
      setError("");

      // create user method
      const user = await createUser(data.email, data.password);

      // upload image
      const imageUrl = await uploadImage(data.photo, setFirebaseError);

      // user information for updaed profile
      const usersInfo = {
        displayName: data.name,
        photoURL: imageUrl,
      };

      // update user method
      await updateUserInfo(usersInfo);

      // store user
      await storeUsersInfo(data.name, data.email, userType, setError);
      console.log(user);
      // reset states
      setLoading(false);
      setAccpet(false);

      // reset form
      reset();
    } catch (error) {
      setFirebaseError(error.message);
      setLoading(false);
      setAccpet(false);
    }
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

  // store user

  return (
    <section className=" w-11/12 lg:w-4/5 mx-auto mt-10">
      <h1 className=" text-3xl text-center uppercase  font-bold">Singup Now</h1>

      <div className=" flex lg:flex-row-reverse flex-col justify-around items-center">
        <div className=" w-full lg:w-1/2 flex justify-end">
          <img src={image} className=" w-full lg:w-4/5" />
        </div>
        <div className=" w-full lg:w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Choose Your Account Type</span>
            </label>
            <div className="flex space-x-4">
              <button
                className={`${
                  userType === "Job Seeker" && "btn-primary"
                } btn w-1/2 focus:outline-none`}
                onClick={() => setUserType("Job Seeker")}
              >
                Job Seeker
              </button>
              <button
                className={`${
                  userType === "Recruiter" && "btn-primary"
                } btn w-1/2 focus:outline-none`}
                onClick={() => setUserType("Recruiter")}
              >
                Recruiter
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  {userType === "Job Seeker"
                    ? "Job Seeker's Name"
                    : "Recruiter's Name "}
                </span>
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
                <span className="label-text">
                  {" "}
                  <span className="label-text">
                    {userType === "Job Seeker"
                      ? "Job Seeker's Email"
                      : "Recruiter's Email "}
                  </span>
                </span>
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
            {firebaseError ===
            "Firebase: Error (auth/email-already-in-use)." ? (
              <p className=" text-error mt-1">
                This email address already had an account
              </p>
            ) : (
              firebaseError
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
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
                <span className="label-text ">Photo</span>
              </label>
              <input
                type="file"
                className={`file-input file-input-bordered  w-full ${
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

            <div className="form-control mt-2">
              <label className=" flex gap-x-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={accept}
                  onChange={() => setAccpet(!accept)}
                  className="checkbox checkbox-sm"
                />
                <p className="label-text">
                  accept our{" "}
                  <Link className=" btn-link">terms and conditions</Link>{" "}
                </p>
              </label>
            </div>
            <button
              className={` btn  w-full mt-5 ${
                accept ? "btn-primary" : "btn-disabled"
              }`}
            >
              {loading ? (
                <span className=" loading loading-spinner"></span>
              ) : (
                "Sing up"
              )}
            </button>
          </form>
          <label className="label">
            <span className="label-text">
              Already have an account? Please{" "}
              <Link to={"/resgistration/sing-in"} className=" btn-link">
                Login now
              </Link>
            </span>
          </label>
          <div className="divider">OR</div>
          <Socail />
        </div>
      </div>
    </section>
  );
};

export default SingUp;
