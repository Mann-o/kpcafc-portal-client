import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

const compositionApiPlugin: Plugin = () => {
  Vue.use(VueCompositionApi)
}

export default compositionApiPlugin
