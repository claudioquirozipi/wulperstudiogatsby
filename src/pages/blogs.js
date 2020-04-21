import React from "react"
import StudioBlog from "../view/blog"

import NormalTemplate from "../template/NormalTemplat"

const BlogsPage = ({ data }) => {
  console.log("aquí data", data.allStrapiPost.edges)
  return (
    <NormalTemplate>
      <StudioBlog data={data.allStrapiPost.edges} />
    </NormalTemplate>
  )
}

export default BlogsPage

export const query = graphql`
  query {
    allStrapiPost(filter: { public: { eq: true } }) {
      edges {
        node {
          title
          image {
            url
          }
          url
          keywords
          description
          id
          article
        }
      }
    }
  }
`
