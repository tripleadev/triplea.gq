import React from "react"
import styled from "styled-components"

const Box = styled.div`
  box-shadow: 0px 0px 20px 0px #00000050;
  border-radius: 5px;
  padding: 1.5em;
  background-color: #fff;
`

const Image = styled.img`
  border-radius: 50%;
  margin: 0.5em 0;
  width: 10em;
`

const Name = styled.h2`
  margin-top: 0.5em;
  font-weight: 400;
`

const Email = styled.h4`
  margin-bottom: 1em;
  font-weight: 300;
  color: black;
`

const About = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
`

const Card = ({ photo, name, email, children }) => {
  return (
    <Box>
      <Image src={photo} alt={name} />
      <Name>{name}</Name>
      <a href={`mailto:${email}@triplea.gq`}>
        <Email>{`${email}@triplea.gq`}</Email>
      </a>
      <About>{children}</About>
    </Box>
  )
}

export default Card
