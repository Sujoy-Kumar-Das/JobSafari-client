import Swal from "sweetalert2";

export const errorMessageHandeler = (message) => {
  Swal.fire({
    position: "top",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 1500,
    toast: true,
  });
};
