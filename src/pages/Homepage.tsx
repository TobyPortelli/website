import React from "react";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <>
      <div>Homepage</div>
      <Link to="/About">About</Link>
    </>
  );
};
export default Homepage;
