import React from "react"
import { Link } from "gatsby"
import { url } from "../../config/constans"
// Styled-Components
import { BlogsContainer, TitleBlog } from "./styled"

function BlogsCQ(props) {
  const { data } = props

  return (
    <>
      <TitleBlog>{data.node.title}</TitleBlog>
      <BlogsContainer bgLink={"#635FFC"}>
        <div key={1}>
          <img src={url + data.node.image[0].url} alt="" />
          <h2>{data.node.title}</h2>
          <p>{data.node.description}</p>
          <Link to={`blogs/${data.node.url}`}>Go to</Link>
        </div>
      </BlogsContainer>
    </>
  )
}

export default BlogsCQ
