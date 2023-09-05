import React from "react";
import downloadMobileAppImage from "../../../assets/downloadMobileApp.png";
const DownloadMobileApp = () => {
  return (
    <section className=" my-10">
      <div className=" lg:h-screen w-full flex justify-center items-center bg-base-200 p-5 ">
        <div className=" flex lg:flex-row flex-col justify-around items-center">
          <div className=" w-full lg:w-1/2 flex justify-start">
            <img src={downloadMobileAppImage} className=" w-full lg:w-4/5" />
          </div>
          <div className=" w-full mt-5 lg:mt-0">
            <h1 className=" text-3xl lg:text-5xl font-bold text-secondary">
              Download Our Mobile App Today!
            </h1>
            <p className="py-6 text-secondary">
              Unlock Your Career Potential with Our Job Search App
            </p>
            <div>
              <button className=" btn btn-primary">
                <span>Downlaod Now</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadMobileApp;
