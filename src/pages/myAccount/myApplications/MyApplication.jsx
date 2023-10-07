import React, { useContext } from "react";
import useLoadData from "../../../hooks/useLoadData";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import Loader from "../../shared/loaders/Loader";
import Error from "../../shared/error/Error";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { errorMessageHandeler } from "../../../commonFuntions/errorMessageHandeler";
import { successMessage } from "../../../commonFuntions/successMessage";

const MyApplication = () => {
  const { user } = useContext(AuthContextProvider); // auth contex

  const url = `my-job-applications/${user?.email}`; // url for load my applications
  const [isLoading, data, refetch] = useLoadData("/post-application", url); // use load data custom hook

  // hadnleCancelJobAppliction
  const hadnleCancelJobAppliction = async (jobApplication) => {
    const result = await Swal.fire({
      title: `Are you sure ? You want to cancel the job application as a ${jobApplication.job_title} application.`,
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `Cancel`,
    });

    if (result.isConfirmed) {
      const res = await fetch(
        `http://localhost:5000/delete-my-job-application/${jobApplication._id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (!data.success) {
        errorMessageHandeler(data.message);
      } else {
        successMessage(data.message);
        refetch();
      }
    } else {
      Swal.fire(`You canceled the process.`);
    }
  };
  if (isLoading) {
    return <Loader />;
  }

  if (!data.success) {
    return <Error message={data.message} />;
  }

  return (
    <section className=" my-16 w-11/12 mx-auto">
      <h1 className=" text-3xl lg:text-5xl font-bold text-secondary mb-5 text-center">
        My Job Application's
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Carrer Level</th>
              <th>Detail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.jobApplications.map((jobApplication, index) => (
              <tr key={jobApplication._id} className="hover">
                <th>{index + 1}</th>
                <td>{jobApplication.job_title}</td>
                <td>{jobApplication.Career_level}</td>
                <td>
                  <Link
                    to={`/job-detail/${jobApplication._id}`}
                    className=" btn btn-xs btn-primary rounded-full"
                  >
                    Detail
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => hadnleCancelJobAppliction(jobApplication)}
                    className=" btn btn-xs btn-error rounded-full"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyApplication;
