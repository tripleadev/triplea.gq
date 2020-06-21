<template>
  <div class="outerWrapper">
    <div class="productsWrapper">
      <h2>Some of our products</h2>
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
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import ProductCard from '../components/ProductCard.vue'

export default {
  name: 'ProductSection',
  components: {
    Carousel,
    Slide,
    ProductCard,
  },
  data() {
    return {
      descriptions: [
        "JavaScript framework that connects front-end and back-end. It allows you to handle server and make beautiful fron-end in one projects, without SSR and with simple data exchange.",
        "React component library that helps you make beautiful website in easier and quicker way. It collects lots of colorful and aesthetic elements in just one lib.",
        "Chat made by devs for devs. It works in command line just like git, vim or nano. If you want to leave simple comments about project, you can do it in easy way in DevChat.",
      ],
    }
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
    height: 100%;
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
  }

  @media (min-width: 768px) {
    .outerWrapper {
      background: linear-gradient(10deg, #75dc75 75%, #ffffff 25%);
    }

    .carousel {
      display: none
    }
  }

</style>