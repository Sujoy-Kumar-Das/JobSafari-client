import React, { useContext } from "react";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/loaders/Loader";
import Error from "../../shared/error/Error";
import { AiFillCheckCircle } from "react-icons/ai";

const MyProfile = () => {
  const { user } = useContext(AuthContextProvider);
  const url = `user-data?email=${user?.email}`;
  const [isLoading, data] = useLoadData("user-data", url);
  if (isLoading) {
    return <Loader></Loader>;
  }
  if (!data?.success) {
    return <Error message={data?.message} />;
  }
  return (
    <section className="  mt-10 w-full lg:w-11/12 mx-auto">
      <div className="bg-base-300 rounded-t-3xl">
        <div className=" flex items-center gap-x-3 ps-10 pt-10 relative top-24  ">
          <img
            className="rounded-full w-32 border-4 border-blue-700 "
            src={data?.user?.image}
          />

          <div>
            <p className=" text-lg flex items-center gap-x-2">
              <span>{data?.user?.name}</span>{" "}
              {user.emailVerified && (
                <span className=" text-blue-700 ">
                  <AiFillCheckCircle></AiFillCheckCircle>
                </span>
              )}
            </p>
            <p className=" uppercase">{data?.user?.post}</p>
          </div>
        </div>
      </div>
      <div className=" mt-36  w-4/5 mx-auto">
        <div className="overflow-x-auto ">
          <table className="table">
            <tbody className=" text-center">
              <tr>
                <th className=" ">Name</th>
                <td className=" ">{data?.user?.name}</td>
              </tr>
              <tr>
                <th>Post</th>
                <td>{data?.user?.post}</td>
              </tr>
              <tr>
                <th>Role</th>
                <td>{data?.user?.role}</td>
              </tr>

              <tr>
                <th>Email</th>
                <td>{data?.user?.email}</td>
              </tr>
              <tr>
                <th>Verified</th>
                <td>
                  {user?.emailVerified ? (
                    <button className=" btn btn-secondary btn-disabled btn-sm rounded">
                      Verified
                    </button>
                  ) : (
                    <button className=" btn btn-sm btn-primary">
                      Verify Now
                    </button>
                  )}
                </td>
              </tr>
              <tr>
                <th>Action</th>
                <td><button className=" btn btn-error btn-sm rounded">Delete Account</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
