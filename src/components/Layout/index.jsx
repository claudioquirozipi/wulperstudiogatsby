import React from "react"

import MetaTags from "react-meta-tags"
import GlobalStyle from "../../config/globalStyles"
import Helmet from "react-helmet"
import Seo from "../Seo"

const Layout = props => {
  const { children, title, description, img, keywords } = props
  return (
    <div>
      <Seo
        title={title}
        description={description}
        img={img}
        keywords={keywords}
      />
      <GlobalStyle />

      {children}
    </div>
  )
}

export default Layout
