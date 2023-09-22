import { toast } from "react-toastify";

// handle error
export const handleErrorMessage = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
  });
};
