import React from "react"
import styled from "styled-components"

// const Box = styled.span`
//   box-shadow: 0px 0px 20px 0px #00000050;
//   border-radius: 5px;
//   padding: 1em;
//   margin: 10px;
// `

const Box = styled.div`
  box-shadow: 0px 0px 20px 0px #00000050;
  border-radius: 5px;
  padding: 1em;
  margin: 10px;
`

const Image = styled.img`
  border-radius: 50%;
  margin: 0.5em 0;
  width: 10em;
`

const Name = styled.h2`
  margin: 0.5em 0;
  font-weight: 200;
`

const About = styled.p`
  font-weight: 200;
`

const Card = ({ photo, name, children }) => {
  return (
    <Box>
      <Image src={photo} alt={name} />
      <Name>{name}</Name>
      <About>{children}</About>
    </Box>
  )
}

export default Card
