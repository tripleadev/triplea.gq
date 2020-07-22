<template>
  <Layout>
    <WelcomeSection />
    <ProductSection />
    <ContactSection />
  </Layout>
</template>

<script>
import WelcomeSection from '../sections/WelcomeSection.vue'
import ProductSection from '../sections/ProductSection.vue'
import ContactSection from '../sections/ContactSection.vue'

export default {
  metaInfo: {
    title: 'TripleA'
  },
  components: {
    WelcomeSection,
    ProductSection,
    ContactSection,
  },
}
</script>

<style lang="scss" scoped>
</style>
