import React from "react"

import GlobalStyle from "../../config/globalStyles"

const Layout = props => {
  const { children } = props
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}

export default Layout
