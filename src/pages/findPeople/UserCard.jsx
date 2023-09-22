import React from "react";
import { FaPlus } from "react-icons/fa";

const UserCard = ({ user }) => {
  const { name, role, post, image } = user;
  return (
    <div className="card bg-base-100 shadow-xl text-secondary w-96 h-96">
      <figure className="px-10 pt-10">
        <img src={image} alt={`${name} image`} className="rounded-xl w-[150px] " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        {role && <p>Role : {role}</p>}
        {post && <p>Post : {post}</p>}
        <div className="card-actions">
          <button className="btn btn-primary">
            Add
            <span>
              <FaPlus />
            </span>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
