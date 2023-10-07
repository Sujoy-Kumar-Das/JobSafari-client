import { useQuery } from "react-query";

const useLoadData = (key, url) => {
  const baseUrl = `http://localhost:5000/${url}`;
  const { data, isLoading,refetch } = useQuery([url], {
    queryKey: [key],
    queryFn: async () => {
      const res = await fetch(baseUrl);
      const data = await res.json();
      return data;
    },
  });
  return [isLoading, data,refetch];
};

export default useLoadData;
