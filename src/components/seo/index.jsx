import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = props => {
  const { description, lang, meta, img, title, keywords } = props
  const { site, file } = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            siteUrl
            description
            title
            keywords
            social {
              twitter
            }
          }
        }
        file(relativePath: { eq: "wulpers.png" }) {
          publicURL
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description
  const metaImg = img || site.siteMetadata.siteUrl + file.publicURL
  const metaKeywords = keywords || site.siteMetadata.keywords

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`${metaTitle}`}
      meta={[
        {
          name: "keywords",
          content: metaKeywords,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImg
            ? [
                {
                  property: "og:image",
                  content: metaImg,
                },
                {
                  name: "twitter:image",
                  content: metaImg,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  img: "",
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  img: PropTypes.string,
}

export default SEO
