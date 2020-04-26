import React from "react"

import Studio from "../view/studio"
import Layout from "../components/Layout"
import img from "../../static/favicon.ico"

const Index = () => (
  <Layout
    title="Wulpers Studio - UI/UX for digital projects"
    description="We are a digital studio capable of transforming an idea into a mindblowing project."
    img={img}
    keywords="App design, UI, UX, Software development, Sofware factory, Software interfase. Diseño de apps, diseño de interfases, experiencia de usuario, empresa de software,"
  >
    <Studio />
  </Layout>
)

export default Index
