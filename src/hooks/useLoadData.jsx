import { useQuery } from "react-query";
import Cookies from "js-cookie";

const useLoadData = (key, url) => {
  const baseUrl = `http://localhost:5000/${url}`;
  const { data, isLoading, refetch } = useQuery([url], {
    queryKey: [key],
    queryFn: async () => {
      const res = await fetch(baseUrl, {
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
