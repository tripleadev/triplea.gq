import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Box = styled.div`
  box-shadow: 0px 0px 20px 0px #00000050;
  border-radius: 5px;
  padding: 1.5em;
`

const Image = styled.img`
  margin: 0.5em 0;
  width: 10em;
`

const Name = styled.h2`
  margin: 0.5em 0 1em 0;
  font-weight: 200;
`

const About = styled.p`
  font-weight: 200;
`

const Button = styled.p`
  margin: 1em;
  color: black;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 300;
  font-size: 1em;
  cursor: pointer;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`

const Product = ({ logo, name, page, children }) => {
  return (
    <Box>
      <Image src={logo} alt={name} />
      <Name>{name}</Name>
      <About>{children}</About>
      <Link to={`/products/${page}`}>
        <Button>Learn more</Button>
      </Link>
    </Box>
  )
}

export default Product
