import React from "react";
import { Link } from "react-router-dom";

const RecentJobCard = ({ jobPost }) => {
  console.log(jobPost);
  const { _id, company, job_title, experience } = jobPost;
  return (
    <div className="bg-base-100 shadow-xl rounded-lg text-secondary ">
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>
          {company} looking for a {job_title} with {experience}.
        </p>
        <div className="card-actions justify-end">
          <Link to={`/show-detail/${_id}`}>
            <button className="btn btn-primary">View Job</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentJobCard;
