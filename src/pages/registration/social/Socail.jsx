import React, { useContext } from "react";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import usePUTData from "../../../hooks/usePUTData";
import { useLocation, useNavigate } from "react-router-dom";
const Socail = ({ setFirebaseError }) => {
  // constexts
  const { singInWithGoogle, singInWithFacebook } =
    useContext(AuthContextProvider);

  const location = useLocation(); // use locaion hook
  const from = location?.state?.from?.pathname || "/"; // get location where user want to go
  const navigate = useNavigate(); // use navigate hook

  // use put data custom hook for put method
  const [putLoader, putDataMethod] = usePUTData(`store-user`);

  // google handler
  const handleGoogleSingIn = async () => {
    try {
      const user = await singInWithGoogle();
      const userData = {
        name: user.user.displayName,
        email: user.user.email,
        image: user.user.photoURL,
        role: "Job Seeker",
        post: "Not mentioned",
      };

      // store user
      putDataMethod(userData);

      navigate(from, { replace: true });
    } catch (error) {
      setFirebaseError(error.message);
    }
  };

  // facebook handler
  const handleFacebookSingIn = async () => {
    try {
      const user = await singInWithFacebook();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" flex justify-center items-start gap-x-5">
      <button
        onClick={handleGoogleSingIn}
        className=" btn btn-primary btn-circle text-xl "
      >
        <BsGoogle />
      </button>
      <button
        onClick={handleFacebookSingIn}
        className=" btn btn-primary btn-circle text-xl"
      >
        <BsFacebook />
      </button>
      <button className=" btn btn-primary btn-circle text-xl">
        <BsTwitter />
      </button>
    </div>
  );
};

export default Socail;
