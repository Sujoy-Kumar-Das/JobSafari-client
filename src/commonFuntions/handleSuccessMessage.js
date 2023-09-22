import { toast } from "react-toastify";

// handle success
export const handleSuccessMessage = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });
};
