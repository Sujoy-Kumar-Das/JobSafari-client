import React from "react";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/loaders/Loader";
import Error from "../../shared/error/Error";
import { FaTrash } from "react-icons/fa";

const AllUsers = () => {
  const url = `http://localhost:5000/all-users`;
  const [isLoading, data] = useLoadData("all-users", url);
  if (isLoading) {
    return <Loader />;
  }
  if (!data.success) {
    return <Error message={data.message} />;
  }
  console.log(data);
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
                  <button className=" btn btn-sm btn-primary">
                    Make Admin
                  </button>
                </td>
                <td>
                  <button className=" btn btn-sm btn-error btn-outline">
                    <FaTrash />
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

export default AllUsers;
