import React, { useContext } from "react";
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import { storeUsersInfo } from "../../../commonFuntions/storeUser";
import { errorMessageHandeler } from "../../../commonFuntions/errorMessageHandeler";
import { successMessage } from "../../../commonFuntions/successMessage";
const Socail = ({ setFirebaseError }) => {
  // constexts
  const { singInWithGoogle, singInWithFacebook } =
    useContext(AuthContextProvider);

  // google handler
  const handleGoogleSingIn = async () => {
    try {
      const user = await singInWithGoogle();
      const userData = {
        name: user.user.displayName,
        email: user.user.email,
        image: user.user.photoURL,
        role: "Job Seeker",
        post: "not mentioned",
      };
      const result = await storeUsersInfo(userData);
      if (result?.success) {
        successMessage(result.message);
      } else {
        errorMessageHandeler(result.message);
      }
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
