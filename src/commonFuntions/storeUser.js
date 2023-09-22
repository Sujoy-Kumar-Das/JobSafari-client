import toast from "react-hot-toast";

export const storeUsersInfo = async (userData) => {
  try {
    const res = await fetch(
      `http://localhost:5000/store-user?email=${userData.email}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    toast.error(error.message);
  }
};
