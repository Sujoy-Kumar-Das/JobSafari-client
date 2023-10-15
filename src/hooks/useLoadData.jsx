import { useQuery } from "react-query";
import Cookies from "js-cookie";

const useLoadData = (key, urlEndPoint) => {
  const url = `http://localhost:5000/${urlEndPoint}`;
  const { data, isLoading, refetch } = useQuery([urlEndPoint], {
    queryKey: [key],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          authorization: Cookies.get("accessToken"),
        },
      });
      const data = await res.json();
      return data;
    },
  });
  return [isLoading, data, refetch];
};

export default useLoadData;
