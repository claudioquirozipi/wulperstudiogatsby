import React from "react"

//Componets
import Seo from "../../components/seo"
import Header from "./header"
import CorteDeSeccion from "./cortedeseccion"
import ImgText from "./imgtext"
import Form from "./form"
import Slyder from "./slyder"
import Footer from "./footer"

//Assets
import img from "../../static/img/header/logo.svg"

function Studio() {
  return (
    <>
      {/* <Seo
        title="Wulpers Studio - UI/UX for digital projects"
        description="We are a digital studio capable of transforming an idea into a mindblowing project."
        img={img}
        keywords="App design, UI, UX, Software development, Sofware factory, Software interfase.
                Diseño de apps, diseño de interfases, experiencia de usuario, empresa de software,"
      /> */}
      <Header />
      <CorteDeSeccion />
      <ImgText />
      <Form />
      {/* {data && data.posts.length >= 5 ? <Slyder blogs={data.posts} /> : null} */}
      <Footer />
    </>
  )
}

export default Studio
