import React from "react";
import { Helmet } from "react-helmet-async";

const TittleCompo = ({ title }) => {
  return (
    <Helmet>
      <title>JobSafari | {title}</title>
    </Helmet>
  );
};

export default TittleCompo;
