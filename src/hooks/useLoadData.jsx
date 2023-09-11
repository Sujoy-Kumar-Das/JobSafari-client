import React  from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const useLoadData = (key, url) => {
  const { data,isLoading } = useQuery([url],{
    queryKey: [key],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        return data;
      } else {
        toast.error(data.message);
      }
    },
  });
  return [isLoading, data];
};

export default useLoadData;
