import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center opacity-75 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default PageLoader;
