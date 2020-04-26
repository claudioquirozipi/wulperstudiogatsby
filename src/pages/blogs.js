import React from "react"

import StudioBlog from "../view/blog"
import Layout from "../components/Layout"
import img from "../../static/favicon.ico"

const BlogsPage = ({ data }) => {
  console.log("aquí data", data.allStrapiPost.edges)
  return (
    <Layout
      title="Wulpers Studio - UI/UX for digital projects"
      description="We are a digital studio capable of transforming an idea into a mindblowing project."
      img={img}
      keywords="App design, UI, UX, Software development, Sofware factory, Software interfase. Diseño de apps, diseño de interfases, experiencia de usuario, empresa de software,"
    >
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
