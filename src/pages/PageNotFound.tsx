import React from "react";
import { Link } from "react-router-dom";

const PageNotFound: React.FC = () => {
  return (
    <>
      <div>404 PAGE NOT FOUND</div>
      <Link to="/">Return to Homepage</Link>
    </>
  );
};
export default PageNotFound;
