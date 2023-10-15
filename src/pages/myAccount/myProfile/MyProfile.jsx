import React, { useContext } from "react";
import { AuthContextProvider } from "../../../contexts/AuthContext/AuthContext";
import useLoadData from "../../../hooks/useLoadData";
import Loader from "../../shared/loaders/Loader";
import Error from "../../shared/error/Error";
import { AiFillCheckCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import useDelete from "../../../hooks/useDelete";
import { useNavigate } from "react-router-dom";
import { successMessage } from "../../../commonFuntions/successMessage";
import TittleCompo from "../../../components/titleCompo/TittleCompo";

const MyProfile = () => {
  const { user, verifyEmail, userDelete } = useContext(AuthContextProvider); // auth context

  // use navigae hook
  const navigae = useNavigate();
  // use load data custom hook
  const [isLoading, data, refetch] = useLoadData(
    "user-data",
    `user-data?email=${user?.email}`
  );

  // user delete custom hook for delete items
  const [deleteLoader, deleteMethod] = useDelete();

  // verify email address
  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => {
        successMessage("Check Your email and verify.");
      })
      .catch((error) => console.log(error));
  };

  // handle delete account
  const handleDeleteAccount = async (userData) => {
    const result = await Swal.fire({
      title: `Are you sure ? You want to delete your account.`,
      showDenyButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    });
    if (result.isConfirmed) {
      // delete user custom hook method
      await deleteMethod(`delete-user/${userData._id}`, refetch);
      navigae("/");
      await userDelete();
    } else {
      Swal.fire("You Canceled the deletation.");
    }
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (!data?.success) {
    return <Error message={data?.message} />;
  }

  return (
    <>
      <TittleCompo title={"My Profile"}></TittleCompo>
      <section className="  mt-10 w-full lg:w-11/12 mx-auto">
        <div className="bg-base-300 rounded-t-3xl">
          <div className=" flex items-center gap-x-3 ps-10 pt-10 relative top-20  ">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={data?.user?.image} />
              </div>
            </div>

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
        <div className=" mt-28  w-4/5 mx-auto">
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
                      <button
                        onClick={handleVerifyEmail}
                        className=" btn btn-sm btn-primary"
                      >
                        Verify Now
                      </button>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Action</th>
                  <td>
                    <button
                      onClick={() => handleDeleteAccount(data.user)}
                      className=" btn btn-error btn-sm rounded"
                    >
                      {deleteLoader ? (
                        <span className=" loading loading-spinner"></span>
                      ) : (
                        "Delete Account"
                      )}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProfile;
