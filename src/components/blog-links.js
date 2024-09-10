import React from "react";
import Navbar from "./home-components/navbar";
import { Link, useParams } from "react-router-dom";

const BlogLinks = () => {
  const params = useParams();

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default BlogLinks;
