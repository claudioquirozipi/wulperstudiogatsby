import React from "react"

import Studio from "../view/studio"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Slyder from "../components/slyder"
import Footer from "../components/footer"

const Index = ({ data }) => {
  console.log("aquí data aaa", data.allStrapiPost.edges)
  return (
    <Layout>
      <SEO />
      <Studio />
      {data.allStrapiPost.edges.length >= 5 ? (
        <Slyder blogs={data.allStrapiPost.edges} />
      ) : null}
      <Footer />
    </Layout>
  )
}

export default Index

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
