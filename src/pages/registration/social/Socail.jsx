import React from "react";
import { BsFacebook, BsGoogle, BsInstagram } from "react-icons/bs";
const Socail = () => {
  return (
    <div className=" flex justify-center items-start gap-x-5">
      <p className=" btn btn-primary btn-circle text-xl ">
        <BsGoogle />
      </p>
      <p className=" btn btn-primary btn-circle text-xl">
        <BsFacebook />
      </p>
      <p className=" btn btn-primary btn-circle text-xl">
        <BsInstagram />
      </p>
    </div>
  );
};

export default Socail;
