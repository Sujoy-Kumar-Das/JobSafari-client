// validate image file type
export const validateImage = (file) => {
  const allowedExtantions = ["image/png", "image/jpg", "image/jpeg"];
  if (!allowedExtantions.includes(file[0].type)) {
    return `File does not support. You provide ${file[0].type} file.But we accept only png,jpg or jpeg files.`;
  } else {
    return true;
  }
};
