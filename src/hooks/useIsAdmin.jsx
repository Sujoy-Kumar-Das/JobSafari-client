import { useQuery } from "react-query";

const useIsAdmin = (email) => {
  const { data: isAdmin, isLoading: adminLoading } = useQuery({
    queryKey: ["is-admin"],
    queryFn: async () => {
      if (email) {
        const res = await fetch(
          `https://job-safari-server-sujoy-kumar-das.vercel.app/is-admin/${email}`
        );
        const adminRes = await res.json();
        return adminRes.admin;
      }
    },
  });
  return [isAdmin, adminLoading];
};

export default useIsAdmin;
