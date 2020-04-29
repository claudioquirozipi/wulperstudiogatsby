import React, { useState } from "react"
import { Link } from "gatsby"
import { url } from "../../config/url"
//Styled Components
import {
  ContainerSlyder,
  Container1,
  ContainerSlyderButton,
  ButtonSC,
  Container2,
  SlyderSC,
  Container3,
  Container4,
  SubTitle,
} from "./styled"

function Slyder(props) {
  const { blogs } = props
  const lastBlog = blogs.length
  const valorInicial = [
    {
      titulo: blogs[lastBlog - 1].node.title,
      parrafo: blogs[lastBlog - 1].node.description,
      positionX: "0%",
      button1: true,
      button2: false,
      button3: false,
    },
    {
      titulo: blogs[lastBlog - 2].node.title,
      parrafo: blogs[lastBlog - 2].node.description,
      positionX: "-100%",
      button1: false,
      button2: true,
      button3: false,
    },
    {
      titulo: blogs[lastBlog - 3].node.title,
      parrafo: blogs[lastBlog - 3].node.description,
      positionX: "-200%",
      button1: false,
      button2: false,
      button3: true,
    },
  ]
  const [valor, cambiarValor] = useState(valorInicial[0])
  function Button1() {
    cambiarValor(valorInicial[0])
  }
  function Button2() {
    cambiarValor(valorInicial[1])
  }
  function Button3() {
    cambiarValor(valorInicial[2])
  }

  return (
    <ContainerSlyder>
      <Container1>
        <div>
          <h2>{valor.titulo}</h2>
          <p>{valor.parrafo}</p>
        </div>
        <ContainerSlyderButton>
          <ButtonSC onClick={Button1} colorSC={valor.button1} />
          <ButtonSC onClick={Button2} colorSC={valor.button2} />
          <ButtonSC onClick={Button3} colorSC={valor.button3} />
        </ContainerSlyderButton>
      </Container1>
      <Container2>
        <SlyderSC left={valor.positionX}>
          <Link
            to={`blog/${blogs[lastBlog - 1].node.url}/${
              blogs[lastBlog - 1].id
            }`}
          >
            <img src={url + blogs[lastBlog - 1].node.image[0].url} alt="" />
          </Link>
          <Link
            to={`blog/${blogs[lastBlog - 2].node.url}/${
              blogs[lastBlog - 2].id
            }`}
          >
            <img src={url + blogs[lastBlog - 2].node.image[0].url} alt="" />
          </Link>
          <Link
            to={`blog/${blogs[lastBlog - 3].node.url}/${
              blogs[lastBlog - 3].id
            }`}
          >
            <img src={url + blogs[lastBlog - 3].node.image[0].url} alt="" />
          </Link>
        </SlyderSC>
      </Container2>
      <Container3>
        <img src={url + blogs[lastBlog - 4].node.image[0].url} alt="" />
        <SubTitle>{blogs[lastBlog - 4].node.title}</SubTitle>
      </Container3>
      <Container4>
        <img src={url + blogs[lastBlog - 5].node.image[0].url} alt="" />
        <SubTitle>{blogs[lastBlog - 5].node.title}</SubTitle>
      </Container4>
    </ContainerSlyder>
  )
}

export default Slyder
