import { useQuery } from "react-query";

const usePostData = (key, url, bodyData) => {
  console.log(url)
  const { data: postResponse, isLoading } = useQuery([key, url], {
    queryFn: async () => {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyData),
      });
      const data = await res.json();
      return data;
    },
  });
  return [isLoading, postResponse];
};

export default usePostData;
