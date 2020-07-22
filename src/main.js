// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/style/main.scss'

import DefaultLayout from '~/layouts/Default.vue'
import VueCarousel from 'vue-carousel/src/index'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(VueCarousel)
  Vue.component('Layout', DefaultLayout)
}
