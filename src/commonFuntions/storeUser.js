export const storeUsersInfo = async (name, email, role, setError) => {
  try {
    setError("");
    const usersInfo = {
      name,
      email,
      role,
    };
    const res = await fetch(`http://localhost:5000/store-user?email=${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usersInfo),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    setError(error.message);
  }
};
