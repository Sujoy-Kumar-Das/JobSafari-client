import React from "react";
import { Link } from "react-router-dom";
import "./homeCard.css";
const HomeCard = ({ image, title, subTitle, linkText, link }) => {
  return (
    <div className=" flex flex-col lg:flex-row-reverse justify-between items-center bg-base-200 shadow-xl w-full lg:h-[300px] p-5 rounded-xl">
      <img src={image} alt="" className="homeCardImg" />
      <div className=" w-full">
        <h1 className=" text-4xl font-bold p-3 text-secondary">{title}</h1>
        <p className=" text-lg p-3 text-secondary">{subTitle}</p>
        <div className=" p-3">
          <Link className=" btn btn-primary" to={`${link}`}>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
