import Vue from 'vue'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faCheck as faDuotoneCheck,
  faTimes as faDuotoneTimes,
} from '@fortawesome/pro-duotone-svg-icons'

// import {
// } from '@fortawesome/pro-solid-svg-icons'

// import {
// } from '@fortawesome/free-brands-svg-icons'

import FontIcon from '@/components/icons/FontIcon'

export default () => {
  config.autoAddCss = false // fixes a weird issue where icons are huge on page load

  library.add(
    faDuotoneCheck,
    faDuotoneTimes,
  )

  Vue.component('FontAwesomeIcon', FontAwesomeIcon)
  Vue.component('FontIcon', FontIcon)
}
