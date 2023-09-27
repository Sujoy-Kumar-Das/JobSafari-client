import { toast } from "react-toastify";

// handle error
export const handleerrorMessageHandeler = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
  });
};
