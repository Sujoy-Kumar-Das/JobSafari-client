import { useState } from "react";
import { errorMessageHandeler } from "../commonFuntions/errorMessageHandeler";
import { successMessage } from "../commonFuntions/successMessage";
import Cookies from "js-cookie";

const usePostData = (url, reset) => {
  const [postLoader, setPostLoader] = useState(false);
  const baseUrl = `http://localhost:5000/${url}`;

  const postData = async (bodyData) => {
    setPostLoader(true);

    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: Cookies.get("accessToken"),
      },
      body: JSON.stringify(bodyData),
    });

    const data = await res.json();

    if (!data.success) {
      errorMessageHandeler(data.message);
      setPostLoader(false);
    } else {
      successMessage(data.message);
      setPostLoader(false);
      reset && reset();
    }
  };

  return [postLoader, postData];
};

export default usePostData;
