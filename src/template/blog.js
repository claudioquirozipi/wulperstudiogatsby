import React from "react"
import { graphql } from "gatsby"
import { url } from "../config/constans"

const ArticleTemplate = ({ data }) => {
  console.log("data", data)
  return (
    <div>
      <img
        src={url + data.strapiPost.image[0].url}
        alt={data.strapiPost.title}
      />
      <h1>{data.strapiPost.title}</h1>
      <p>{data.strapiPost.article}</p>
    </div>
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
