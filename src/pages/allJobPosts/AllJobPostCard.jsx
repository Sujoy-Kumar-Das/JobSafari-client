import React from "react";
import { Link } from "react-router-dom";

const AllJobPostCard = ({ jobPost }) => {
  const { _id, company, job_title, experience } = jobPost;
  return (
    <div className="bg-base-100 border-2 border-secondary rounded-lg text-secondary flex justify-center items-end ">
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>
          {company} looking for a {job_title} with {experience}.
        </p>
        <div className="flex  justify-end">
          <Link to={`/job-detail/${_id}`}>
            <button className="btn btn-primary">View Job</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllJobPostCard;
