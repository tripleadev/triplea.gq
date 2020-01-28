import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

import Artur from "../images/artur.jpeg"
import Adam from "../images/adam.jpeg"
import Aleksander from "../images/aleksander.jpeg"

const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  max-width: 1500px;
  margin-bottom: 100px;
`

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`

const Heading = styled.h1`
  font-weight: 600;
  font-size: 2.5em;
  margin: 1em;
`

const Paragraph = styled.p`
  font-weight: 300;
  font-size: 1.5em;
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
        name - <i>TripleA</i>.
      </Paragraph>
    </Wrapper>
    <Wrapper>
      <Heading>Our team.</Heading>
      <Cards>
        <Card photo={Artur} name="Artur Dudek" email="artur.dudek">
          Fullstack developer living in Poland. In love with web development,
          video games and a little bit addiced to YouTube and memes. Discord
          enthusiast and bot developer. Sometimes lazy but always tries to do
          his best.
        </Card>
        <Card photo={Adam} name="Adam Siekierski" email="adam.siekierski">
          Fullstack developer based in Poznań, Poland. Codes 24 hours a day,
          immediately learns every technology he finds out about. Always looking
          to upgrade his equpiment, currently working on a MacBook Pro. His
          second passion is cycling.
        </Card>
        <Card
          photo={Aleksander}
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
