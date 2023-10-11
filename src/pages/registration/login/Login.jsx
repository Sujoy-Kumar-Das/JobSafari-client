import React, { useContext, useState } from "react";
import Socail from "../social/Socail";
import { useForm } from "react-hook-form";
import image from "../../../assets/loginBgImage.png";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { errorMessageHandeler } from "../../../commonFuntions/errorMessageHandeler";
import { successMessage } from "../../../commonFuntions/successMessage";
import LoadingButton from "../../../components/buttons/LoadingButton";

const Login = () => {
  // constexts
  const { loginUser } = useContext(AuthContextProvider);

  // states
  const [loading, setLoading] = useState(false);
  const [firebaseError, setFirebaseError] = useState("");

  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(); // use react hook from

  const location = useLocation(); // use locaion hook
  const from = location?.state?.from?.pathname || "/"; // get location where user want to go
  const navigate = useNavigate(); // use navigate hook

  // login handler

  const handleLogin = async (data) => {
    try {
      setFirebaseError("");
      setLoading(true);

      // login method
      const user = await loginUser(data.email, data.password);
      if (user.user) {
        successMessage(`${user?.user?.displayName} Loged in successfully.`);
        reset();
        navigate(from, { replace: true });
      } else {
        errorMessageHandeler("Something went wrong.Login failed.");
      }
    } catch (error) {
      setFirebaseError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <h1 className=" text-3xl text-center uppercase  font-bold">Login Now</h1>

      <div className=" flex lg:flex-row-reverse flex-col justify-around items-center">
        <div className=" w-full lg:w-1/2 flex justify-end">
          <img src={image} className=" w-full lg:w-4/5" />
        </div>
        <div className=" w-full lg:w-1/2">
          <form onSubmit={handleSubmit(handleLogin)}>
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
            {firebaseError && (
              <p className=" mt-1 text-error">
                {firebaseError === "Firebase: Error (auth/user-not-found)." &&
                  "Invalid email address.This email address had no account."}
              </p>
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
                {...register("password", { required: "Password Is Required" })}
              />
            </div>
            {errors?.password && (
              <p className=" mt-1 text-error">{errors?.password?.message}</p>
            )}
            {firebaseError && (
              <p className=" text-error mt-1">
                {firebaseError === "Firebase: Error (auth/wrong-password)." &&
                  "Wrong password"}
              </p>
            )}

            <LoadingButton loader={loading}>Login</LoadingButton>
          </form>
          <label className="label">
            <span className="label-text">
              Forgot Password ? want to{" "}
              <Link to={"/registration/reset-password"} className=" btn-link">
                reset now
              </Link>
            </span>
          </label>
          <label className="label">
            <span className="label-text">
              New to JobSafari?{" "}
              <Link to={"/resgistration/sing-up"} className=" btn-link">
                Create new account
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

export default Login;
