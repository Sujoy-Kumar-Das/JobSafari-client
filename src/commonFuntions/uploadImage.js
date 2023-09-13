export const uploadImage = async (file, setFirebaseError) => {
  try {
    setFirebaseError(" ");
    const imageFile = file[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_REACT_APP_image_upload_api_key
      }`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    if (data.success) {
      return data.data.display_url;
    } else {
      setFirebaseError(data.error.message);
    }
  } catch (error) {
    setFirebaseError(error.message);
  }
};
