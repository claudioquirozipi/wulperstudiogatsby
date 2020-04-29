import React from "react"

//Componets
import Header from "./header"
import CorteDeSeccion from "./cortedeseccion"
import ImgText from "./imgtext"
import Form from "./form"
// import Slyder from "./slyder"
import Footer from "./footer"

function Studio() {
  return (
    <>
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
