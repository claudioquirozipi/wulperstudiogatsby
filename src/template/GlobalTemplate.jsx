import React from "react"
import { Helmet } from "react-helmet"
import GlobalStyle from "../config/globalStyles"

const GlobalTemplate = props => {
  const { children } = props
  return (
    <div>
      <Helmet>
        <meta charset="utf-8" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./styleSass.css" />
        <title>Wulpers</title>
      </Helmet>
      <GlobalStyle />
      {children}
    </div>
  )
}

export default GlobalTemplate