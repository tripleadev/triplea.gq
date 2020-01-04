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

const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  @media (max-width: 1000px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
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
      <Cards>
        <Card
          photo="https://i.imgur.com/aQI77uE.jpg"
          name="Artur Dudek"
          email="artur.dudek"
        >
          Fullstack developer living in Poland. In love with web development,
          video games and a little bit addiced to YouTube and memes. Discord
          enthusiast and bot developer. Sometimes lazy but always tries to do
          his best.
        </Card>
        <Card
          photo="https://i.imgur.com/MbU9fGr.jpg"
          name="Adam Siekierski"
          email="adam.siekierski"
        >
          Fullstack developer based in Poznań, Poland. Codes 24 hours a day,
          immediately learns every technology he finds out about. Always looking
          to upgrade his equpiment, currently working on a MacBook Pro. His
          second passion is cycling.
        </Card>
        <Card
          photo="http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png"
          name="Aleksander Skubała"
          email="aleksander.skubala"
        >
          Lives in the same city as his friends and like them, is a Fullstack
          developer (hobbyist). Loves the fact that there are still so many
          technologies that he can learn. In his free time, tries to solve
          problems by creating apps. At this point, he would say something about
          his favorite sport, but it has nothing to do with programming
          <span role="img" aria-label="*wink*">
            😉
          </span>
        </Card>
      </Cards>
    </Wrapper>
  </Layout>
)

export default AboutPage
