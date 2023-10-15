import React, { useContext } from "react";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/loaders/Loader";
import Error from "../../shared/error/Error";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import { successMessage } from "../../../commonFuntions/successMessage";
import { errorMessageHandeler } from "../../../commonFuntions/errorMessageHandeler";
import useDelete from "../../../hooks/useDelete";
import Cookies from "js-cookie";

const AllUsers = () => {
  // contexts
  const { user } = useContext(AuthContextProvider);

  // user delete custom hook for delete items
  const [deleteLoader, deleteMethod] = useDelete();

  // use load data custom hook for load data
  const [isLoading, data, refetch] = useLoadData(
    "all-users",
    `all-users?email=${user.email}`
  );

  // handle admin
  const handleAdmin = async (user, value, text) => {
    const result = await Swal.fire({
      title: `Are you sure you want to ${text} admin ${user.name}`,
      showDenyButton: true,
      confirmButtonText: "YES",
      denyButtonText: `Cancel`,
    });
    if (result.isConfirmed) {
      const res = await fetch(`http://localhost:5000/make-admin/${user._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          admin: value,
          authorization: Cookies.get("accessToken"),
        },
      });
      const data = await res.json();

      if (data.success) {
        refetch();
        successMessage(data.message);
      } else {
        errorMessageHandeler(data.message);
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
    <section className=" mt-20 w-11/12 mx-auto">
      <h1 className=" text-3xl text-center uppercase  font-bold">All Users</h1>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Post</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.image} alt={`${user.name} image`} />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.post ? user.post : "NOT MENTIONED"}</td>
                <td>
                  {user.admin ? (
                    <button
                      onClick={() => {
                        handleAdmin(user, false, "remove");
                      }}
                      className=" btn btn-error btn-sm rounded"
                    >
                      Remove Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        handleAdmin(user, true, "admin");
                      }}
                      className=" btn btn-sm btn-primary rounded"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllUsers;
