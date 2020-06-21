<template>
  <Layout>
    <WelcomeSection/>
    <ProductSection/>
  </Layout>
</template>

<script>
import WelcomeSection from '../sections/WelcomeSection.vue'
import ProductSection from '../sections/ProductSection.vue'

export default {
  metaInfo: {
    title: 'TripleA'
  },
  components: {
    WelcomeSection,
    ProductSection,
  },
}
</script>

<style lang="scss" scoped>
</style>
