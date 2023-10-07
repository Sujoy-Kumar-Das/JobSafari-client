import { useEffect, useState } from "react";

const useIsAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/is-admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, adminLoading];
};

export default useIsAdmin;
