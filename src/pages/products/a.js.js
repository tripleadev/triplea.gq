import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  max-width: 1500px;
  margin-bottom: 100px;
`

const Image = styled.img`
  margin: 0.5em 0;
  width: 15em;
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

const ajs = () => (
  <Layout>
    <SEO title="a.js" />
    <Wrapper>
      <Image
        src="http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png"
        alt="a.js Logo"
      />
      <Heading>a.js</Heading>
      <Paragraph>
        An easy and lightweight JavaScript framework for Node.js for both
        front-end and back-end.
      </Paragraph>
      <Paragraph></Paragraph>
    </Wrapper>
  </Layout>
)

export default ajs
