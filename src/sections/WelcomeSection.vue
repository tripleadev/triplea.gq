<template>
  <div class="container">
    <g-link to="https://github.com/tripleadev">
      <g-image src="~/favicon.png" class="icon"></g-image>
    </g-link>
    <div class="content title">
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
import { gsap, CSSPlugin } from 'gsap/all'
gsap.registerPlugin(CSSPlugin)

export default {
  name: 'WelcomeSection',
  components: {
    CodeSVG,
  },
  mounted() {
    const title = document.querySelector('.title');
    const screen = document.querySelector('#screen');
    const man = document.querySelector('#man');
    const tl = new TimelineLite();

    tl.fromTo(title, 1.1,
      {x: -100, autoAlpha: 0},
      {x: 0, autoAlpha: 1, delay: 0.3, ease: Power1.easeInOut},
    )
    .fromTo(screen, 1,
      {x: 150, autoAlpha: 0},
      {x: 0, autoAlpha: 1, ease: Power1.easeInOut},
    )
    .fromTo(man, 1,
      {x: 150, autoAlpha: 0},
      {x: 0, autoAlpha: 1, ease: Power1.easeInOut},
    );
  },
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100vw;
    height: 105vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .icon {
    width: 50px;
    height: auto;
    position: absolute;
    top: 25px;
    left: 25px;
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