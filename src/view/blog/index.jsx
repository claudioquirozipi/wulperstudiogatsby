import React from "react";
import { graphql } from "gatsby";

//Components
import NavCQ from "../../components/nav";
import BlogsCQ from "../../components/blog/blogsCQ";

function StudioBlog({ data }) {
  return (
    <>
      <NavCQ imgAlt="wulpers" imgUrl="/" links={[]} bgNav="#635FFC" />
      {data.length > 0 && data.map((e, i) => <BlogsCQ key={i} data={e} />)}
    </>
  );
}

export default StudioBlog;
