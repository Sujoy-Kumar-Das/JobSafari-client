import Cookies from "js-cookie";
import { useState } from "react";
import { successMessage } from "../commonFuntions/successMessage";
import { errorMessageHandeler } from "../commonFuntions/errorMessageHandeler";

const useDelete = () => {
  // loading state
  const [deleteLoader, setDeleteLoader] = useState(false);

  //   delete funtion
  const deleteMethod = async (urlEndPoint, refetch) => {
    const url = `http://localhost:5000/${urlEndPoint}`;

    setDeleteLoader(true);

    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        authorization: Cookies.get("accessToken"),
      },
    });
    const data = await res.json();

    if (data.success) {
      successMessage(data.message);
    } else {
      errorMessageHandeler(data.message);
      setDeleteLoader(false);
    }

    setDeleteLoader(false);
    refetch();
  };
  return [deleteLoader, deleteMethod];
};

export default useDelete;
