import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div`
  text-align: center;
  margin: auto;
  max-width: 1500px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Emoji = styled.p`
  font-size: 5em;
  font-weight: 200;
  margin: 0.5em 0;
`

const Heading = styled.h1`
  font-weight: 200;
  font-size: 2.5em;
`

const Paragraph = styled.p`
  font-weight: 200;
  font-size: 1.2em;
  margin: 1.5em 0;
`

const emojis = [
  "🙃",
  "🤔",
  "🤨",
  "😔",
  "😕",
  "😟",
  "🙁",
  "☹",
  "😮",
  "😯",
  "😢",
  "😱",
  "😖",
  "😣",
  "😞",
  "😓",
  "💩",
  "😾",
  "👎",
  "👀",
  "🏃",
]

const NotFoundPage = () => {
  const getEmoji = () => {
    return (document.getElementById("emoji").innerHTML =
      emojis[Math.floor(Math.random() * emojis.length)])
  }

  return (
    <Layout>
      <SEO title="4-oh-4" />
      <Wrapper>
        <div onClick={getEmoji} onKeyPress={getEmoji} role="presentation">
          <Emoji>
            <span id="emoji" role="img" aria-label="Sad Face :(">
              {emojis[Math.floor(Math.random() * emojis.length)]}
            </span>
          </Emoji>
          <Heading>404</Heading>
          <Heading>Not Found</Heading>
          <Paragraph>
            Sorry, we couldn't find the page you're looking for... <br />
            Maybe it doesn't exist? 🤔
          </Paragraph>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage
