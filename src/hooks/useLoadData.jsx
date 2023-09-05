import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const useLoadData = (key, url) => {
  const [loader, setLoader] = useState(false);

  const { data } = useQuery({
    queryKey: "/job-posts",
    queryFn: async () => {
      setLoader(true);
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setLoader(false);
        return data;
      } else {
        toast.error(data.message);
        setLoader(false);
      }
    },
  });
  return [loader, data];
};

export default useLoadData;
