import React from "react";
import Navbar from "./home-components/navbar";
import { useParams } from "react-router-dom";
import BlogPage from "./blogpage";

const BlogLinks = () => {
  const params = useParams();
  return (
    <div>
      <Navbar />
      <BlogPage blogId={params.blogId} />
    </div>
  );
};

export default BlogLinks;
