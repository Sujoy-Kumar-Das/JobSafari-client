import React, { useContext, useState } from "react";
import image from "../../../assets/loginBgImage.png";
import { useForm } from "react-hook-form";
import Socail from "../social/Socail";
import { validateImage } from "../../../commonFuntions/validatedImage";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import { uploadImage } from "../../../commonFuntions/uploadImage";
import { Link, useLocation, useNavigate } from "react-router-dom";
import usePUTData from "../../../hooks/usePUTData";

const SingUp = () => {
  // states
  const [firebaseError, setFirebaseError] = useState(""); // fire base errors state
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

  const location = useLocation(); // use locaion hook
  const from = location?.state?.from?.pathname || "/"; // get location where user want to go
  const navigate = useNavigate(); // use navigate hook

  // use put data custom hook for put method
  const [putLoader, putDataMethod] = usePUTData(`store-user`, reset);

  // contexts
  const { createUser, updateUserInfo } = useContext(AuthContextProvider);

  // handle sinup
  const handleSignup = async (data) => {
    try {
      setLoading(true);
      setFirebaseError("");

      // Create user and upload image in parallel
      const [userCreation, imageUrl] = await Promise.all([
        createUser(data.email, data.password),
        uploadImage(data.photo, setFirebaseError),
      ]);
      // User information for updated profile
      const userInfo = {
        displayName: data.name,
        photoURL: imageUrl,
      };
      // Update user information
      await updateUserInfo(userInfo);

      // user data for store
      const userData = {
        name: data.name,
        email: data.email,
        image: imageUrl,
        role: userType,
        post: data.post,
      };
      // Store user information
      putDataMethod(userData);
      navigate(from, { replace: true });
      setAccpet(false);
    } catch (error) {
      setFirebaseError(error.message);
      console.log(error);
    } finally {
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

  return (
    <section className="pb-5">
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
              <label className="label">Name</label>
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
            {userType === "Job Seeker" && (
              <>
                <div className="form-control">
                  <label className="label">Post</label>
                  <input
                    type="text"
                    placeholder="Enter Your Post"
                    className={`input input-bordered ${
                      errors?.post?.message &&
                      " input-error placeholder-error border-error"
                    }`}
                    {...register("post", { required: "Post Is Required." })}
                  />
                </div>
                {errors?.post && (
                  <p className=" mt-1 text-error">{errors?.post?.message}</p>
                )}
              </>
            )}

            <div className="form-control">
              <label className="label">Email</label>
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
              className={` btn  w-full mt-5 btn-primary `}
              disabled={!accept}
            >
              {loading ? (
                <>
                  <span>Creating Account</span>
                  <span className=" loading loading-dots loading-sm"></span>
                </>
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
          <Socail setFirebaseError={setFirebaseError} />
        </div>
      </div>
    </section>
  );
};

export default SingUp;
