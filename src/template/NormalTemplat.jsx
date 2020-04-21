import React from "react"
import GlobalTemplate from "./GlobalTemplate"
const NormalTemplate = props => {
  const { children } = props
  return <GlobalTemplate>{children}</GlobalTemplate>
}

export default NormalTemplate
