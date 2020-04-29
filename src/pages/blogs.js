import React from "react"

import StudioBlog from "../view/blog"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const BlogsPage = ({ data }) => {
  // console.log("aquí data", data.allStrapiPost.edges)
  return (
    <Layout>
      <SEO />
      <StudioBlog data={data.allStrapiPost.edges} />
    </Layout>
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
