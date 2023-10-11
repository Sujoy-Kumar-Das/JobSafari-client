import React from "react";

const LoadingButton = ({ children, loader }) => {
  return (
    <button className={`btn w-full mt-5 btn-primary`}>
      {loader ? (
        <>
          {children}
          <span className="loading loading-dots"></span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default LoadingButton;
