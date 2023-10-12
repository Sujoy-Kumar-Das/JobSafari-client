import React, { useContext } from "react";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/loaders/Loader";
import Error from "../../shared/error/Error";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useDelete from "../../../hooks/useDelete";

const MyBlogs = () => {
  const { user, loading } = useContext(AuthContextProvider);

  // use laod data custom hook
  const [isLoading, data, refetch] = useLoadData(
    "my-blogs",
    `my-blogs?email=${user.email}`
  );

  // user delete custom hook for delete items
  const [deleteLoader, deleteMethod] = useDelete();

  //   handle delete blog
  const handleDeleteBlog = async (blog) => {
    const result = await Swal.fire({
      title: `Are you sure ? You want to delete ${blog.blog_title}?`,
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    });
    if (result.isConfirmed) {
      // delete user custom hook method
      await deleteMethod(`delete-blog/${blog._id}`, refetch);
    } else {
      Swal.fire("You Canceled the deletation.");
    }
  };

  if (isLoading || loading) {
    return <Loader />;
  }

  if (!data.success) {
    return <Error message={data.message} />;
  }

  console.log(data);
  return (
    <section className=" mt-16 mx-auto w-11/12">
      <h1 className=" text-3xl text-center  font-bold">My Blogs</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.myBlogs.map((myBlog, index) => (
              <tr className=" hover">
                <th>{index + 1}</th>
                <td>{myBlog.blog_title}</td>
                <td>
                  <Link className=" btn btn-sm btn-primary rounded">
                    Detail
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteBlog(myBlog)}
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
  );
};

export default MyBlogs;
