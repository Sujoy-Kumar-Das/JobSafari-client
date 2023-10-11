import React, { useState } from "react";
import { errorMessageHandeler } from "../commonFuntions/errorMessageHandeler";
import { successMessage } from "../commonFuntions/successMessage";

const usePUTData = (urlEndPoint, reset) => {
  const [putLoader, setPutLoader] = useState(false);

  const url = `http://localhost:5000/${urlEndPoint}`;

  const putData = async (modifiedData) => {
    setPutLoader(true);

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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

  return [putLoader, putData];
};

export default usePUTData;
