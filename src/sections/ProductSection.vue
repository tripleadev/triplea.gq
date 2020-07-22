<template>
  <div class="outerWrapper">
    <div class="productsWrapper">
      <h2 ref="text">Some of our products</h2>
      <ClientOnly>
      <Carousel class="carousel" :perPage=1>
        <Slide class="slide">
          <g-link to="https://github.com/tripleadev/a.js">
            <ProductCard name="a.js" :description="descriptions[0]"/>
          </g-link>
        </Slide>
        <Slide class="slide">
          <g-link to="https://github.com/tripleadev/pride.js">
            <ProductCard name="pride.js" :description="descriptions[1]"/>
          </g-link>
        </Slide>
        <Slide class="slide">
          <g-link to="https://devchat.gq/">
            <ProductCard name="DevChat" :description="descriptions[2]"/>
          </g-link>
        </Slide>
      </Carousel>
      </ClientOnly>
      <div class="cardContainer">
        <g-link to="https://github.com/tripleadev/a.js">
          <ProductCard name="a.js" :description="descriptions[0]"/>
        </g-link>
        <g-link to="https://github.com/tripleadev/pride.js">
          <ProductCard name="pride.js" :description="descriptions[1]"/>
        </g-link>
        <g-link to="https://devchat.gq/">
          <ProductCard name="DevChat" :description="descriptions[2]"/>
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import { TimelineLite, Power1 } from 'gsap'
import { ScrollScene } from 'scrollscene'

export default {
  name: 'ProductSection',
  components: {
    Carousel: () =>
        import ('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
      Slide: () =>
        import ('vue-carousel')
        .then(m => m.Slide)
        .catch(),
    ProductCard,
  },
  data() {
    return {
      descriptions: [
        "JavaScript framework that connects front-end and back-end. It allows you to handle server and make beautiful fron-end in one projects, without SSR and with simple data exchange.",
        "React component library that helps you make beautiful website in easier and quicker way. It collects lots of colorful and aesthetic elements in just one lib.",
        "Chat made by devs for devs. It works in command line just like git, vim or nano. If you want to leave simple comments about project, you can do it in easy way with DevChat.",
      ],
    }
  },
  mounted() {
    const { text } = this.$refs;
    const tl = new TimelineLite({ paused: true });

    tl.fromTo(text, 0.8,
      {y: -100, opacity: 0},
      {y: 0, opacity: 1, delay: 0.4, ease: Power1.easeInOut}
    );

    const scrollScene = new ScrollScene({
      triggerElement: text,
      gsap: {
        timeline: tl,
      },
    });

    const boxes = document.querySelectorAll('.cardContainer .cardWrapper');
    const tl2 = new TimelineLite({ paused: true });

    tl2.fromTo(boxes[0], 0.8,
      {x: 150, opacity: 0},
      {x: 0, opacity: 1, ease: Power1.easeInOut}
    )
    .fromTo(boxes[1], 0.8,
      {x: -150, opacity: 0},
      {x: 0, opacity: 1, ease: Power1.easeInOut}
    )
    .fromTo(boxes[2], 0.8,
      {x: 150, opacity: 0},
      {x: 0, opacity: 1, ease: Power1.easeInOut}
    );

    const scrollScene2 = new ScrollScene({
      triggerElement: boxes[0],
      gsap: {
        timeline: tl2,
      },
    });

    const carousel = document.querySelector('.carousel')
    const tl3 = new TimelineLite({ paused: true });

    tl3.fromTo(carousel, 0.8,
      {x: 150, opacity: 0},
      {x: 0, opacity: 1, ease: Power1.easeInOut}
    )

    const scrollScene3 = new ScrollScene({
      triggerElement: carousel,
      gsap: {
        timeline: tl3,
      },
    })
  },
}
</script>

<style lang="scss" scoped>
  .outerWrapper {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(10deg, #75dc75 50%, #ffffff 50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .productsWrapper {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .carousel {
      margin-top: 10vh;
    }

    .slide {
      display: flex;
      justify-content: center;
    }

    .cardContainer {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .outerWrapper {
      background: linear-gradient(10deg, #75dc75 55%, #ffffff 55%);
    }

    .carousel {
      display: none;
    }

    .productsWrapper {
      h2 {
        margin-bottom: 50px;
      }

      .cardContainer {
        display: flex;
        flex-direction: column;
      }
    }
  }

</style>