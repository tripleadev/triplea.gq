<template>
  <div class="container">
    <div class="content" ref="text">
      <h2>High performance software on-demand</h2>
      <p>We would love to figure out your problems by creating software tailored to you.</p>
    </div>
    <div class="imageWrapper">
      <CodeSVG/>
    </div>
  </div>
</template>

<script>
import CodeSVG from '../assets/images/code-inspection.svg'
import { TimelineLite, Power1 } from 'gsap'

export default {
  name: 'WelcomeSection',
  components: {
    CodeSVG,
  },
  mounted() {
    const { text } = this.$refs;
    const screen = document.querySelector('#screen')
    const man = document.querySelector('#man')
    const tl = new TimelineLite()

    tl.fromTo(text, 1.2,
      {x: -100, opacity: 0},
      {x: 0, opacity: 1, ease: Power1.easeInOut}
    )
    .fromTo(screen, 1,
      {x: 150, opacity: 0},
      {x: 0, opacity: 1, ease: Power1.easeInOut}
    )
    .fromTo(man, 1,
      {x: 150, opacity: 0},
      {x: 0, opacity: 1, ease: Power1.easeInOut}
    )
  },
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .content {
    max-width: 80vw;
    margin: 0 0 7vh 0;
  }

  .imageWrapper {
    width: 60vw;

    svg {
      width: 100%;
      height: auto;
    }
  }

  @media (min-width: 768px) {
    .container {
      flex-direction: row;
    }

    .content {
      max-width: 40vw;
      margin: 0 10vw 0 0;
    }

    .imageWrapper {
      width: 40vw;
    }
  }
</style>