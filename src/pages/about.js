import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  max-width: 1500px;
  margin-bottom: 100px;
`

const Heading = styled.h1`
  font-weight: 200;
  font-size: 2.5em;
  margin: 1em;
`

const Paragraph = styled.p`
  font-weight: 200;
  font-size: 1.2em;
  margin-bottom: 0.5em;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Wrapper>
      <Heading>A little bit about us.</Heading>
      <Paragraph>
        We're a small team located in Poznań, Poland that specializes in
        software development.
      </Paragraph>
      <Paragraph>
        It was founded by three students: Artur, Adam, and Aleksander. Hence the
        name - TripleA.
      </Paragraph>
    </Wrapper>
    <Wrapper>
      <Heading>Our team.</Heading>
      <Card
        photo="http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png"
        name="John Doe"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet
        fermentum lacus, eget consectetur metus elementum non. Aliquam maximus
        massa sit amet est tincidunt, at malesuada sapien auctor. Nulla ut
        placerat quam, id dignissim ante.
      </Card>
      <Card
        photo="http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png"
        name="John Doe"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet
        fermentum lacus, eget consectetur metus elementum non. Aliquam maximus
        massa sit amet est tincidunt, at malesuada sapien auctor. Nulla ut
        placerat quam, id dignissim ante.
      </Card>
      <Card
        photo="http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png"
        name="John Doe"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet
        fermentum lacus, eget consectetur metus elementum non. Aliquam maximus
        massa sit amet est tincidunt, at malesuada sapien auctor. Nulla ut
        placerat quam, id dignissim ante.
      </Card>
    </Wrapper>
  </Layout>
)

export default AboutPage
