import React, { useContext } from "react";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/loaders/Loader";
import Error from "../../shared/error/Error";
import { Link } from "react-router-dom";
import useDelete from "../../../hooks/useDelete";
import Swal from "sweetalert2";
import TittleCompo from "../../../components/titleCompo/TittleCompo";

const MyJobPosts = () => {
  // auth context
  const { user } = useContext(AuthContextProvider);

  //   use load data custom hook for load data
  const [isLoading, data, refetch] = useLoadData(
    "my-job-posts",
    `my-job-posts?email=${user?.email}`
  );

  //   use delete custom hook for delete data
  const [deleteLoader, deleteMethod] = useDelete();

  //   hadle delete my job post
  const handleDeleteMyJobPost = async (jobPost) => {
    const result = await Swal.fire({
      title: `Are you sure ? You want to delete ${jobPost.job_title} post ?`,
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    });
    if (result.isConfirmed) {
      // delete user custom hook method
      await deleteMethod(`delete-my-job-post/${jobPost._id}`, refetch);
    } else {
      Swal.fire("You Canceled the deletation.");
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  if (!data.success) {
    return (
      <>
        {" "}
        <Error message={data.message} />
        <TittleCompo title={"My Job Posts"}></TittleCompo>
      </>
    );
  }
  return (
    <>
      <TittleCompo title={"My Job Posts"}></TittleCompo>
      <section className=" mt-20 w-11/12 mx-auto">
        <h1 className=" text-3xl text-center uppercase  font-bold">
          All Users
        </h1>
        <div className="overflow-x-auto mt-10">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Carrer Level</th>
                <th>Posted Date</th>
                <th>Deadline</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.myJobPosts.map((myJobPost, index) => (
                <tr key={myJobPost._id}>
                  <th>{index + 1}</th>
                  <td>{myJobPost.job_title}</td>
                  <td>{myJobPost.Career_level}</td>
                  <td>{myJobPost.datePosted}</td>
                  <td>{myJobPost.deadline}</td>
                  <td>
                    <Link
                      to={`/job-detail/${myJobPost._id}`}
                      className=" btn btn-sm btn-primary rounded"
                    >
                      Detail
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteMyJobPost(myJobPost)}
                      className=" btn btn-sm btn-error rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default MyJobPosts;
