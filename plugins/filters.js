import Vue from 'vue'
import * as filters from '@/filters'

const filtersPlugin = () => {
  Object
    .keys(filters)
    .forEach((filter) => {
      Vue.filter(filter, filters[filter])
    })
}

export default filtersPlugin
