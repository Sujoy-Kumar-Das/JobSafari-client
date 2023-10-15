import React, { useState } from "react";
import { errorMessageHandeler } from "../commonFuntions/errorMessageHandeler";
import { successMessage } from "../commonFuntions/successMessage";
import Cookies from "js-cookie";

const usePUTData = (urlEndPoint, reset) => {
  const [putLoader, setPutLoader] = useState(false);

  const url = `https://job-safari-server-sujoy-kumar-das.vercel.app/${urlEndPoint}`;

  const putDataMethod = async (modifiedData) => {
    setPutLoader(true);

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: Cookies.get("accessToken"),
      },
      body: JSON.stringify(modifiedData),
    });

    const data = await res.json();

    if (!data.success) {
      errorMessageHandeler(data.message);
      setPutLoader(false);
    } else {
      successMessage(data.message);
      setPutLoader(false);
      reset && reset();
    }
  };

  return [putLoader, putDataMethod];
};

export default usePUTData;
