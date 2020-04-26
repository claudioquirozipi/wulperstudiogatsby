import React from "react"
import { graphql } from "gatsby"

import { url } from "../config/constans"
import Layout from "../components/Layout"
import NavCQ from "../components/nav"
import BlogCQ from "../components/blog/blogCQ"

const ArticleTemplate = ({ data }) => {
  console.log("data", data)
  return (
    <Layout
      title={data.strapiPost.title}
      description={data.strapiPost.description}
      img={url + data.strapiPost.image.url}
      keywords={data.strapiPost.keywords}
    >
      <NavCQ imgAlt="wulpers" imgUrl="/" links={[]} bgNav="#635FFC" />
      <BlogCQ>
        <img
          src={url + data.strapiPost.image[0].url}
          alt={data.strapiPost.title}
        />
        <h1>{data.strapiPost.title}</h1>
        <p>{data.strapiPost.article}</p>
      </BlogCQ>
    </Layout>
  )
}
export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($url: String!) {
    strapiPost(url: { eq: $url }) {
      article
      image {
        url
      }
      description
      keywords
      public
      title
      url
    }
  }
`
