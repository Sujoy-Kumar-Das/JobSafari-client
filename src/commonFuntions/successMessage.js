import Swal from "sweetalert2";

export const successMessage = (message) => {
  Swal.fire({
    position: "top",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
    toast: true,
  });
};
