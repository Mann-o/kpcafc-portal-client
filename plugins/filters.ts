import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import * as filters from '@/filters'

const filtersPlugin: Plugin = () => {
  Object
  .keys(filters)
  .forEach((filter: string) => {
    Vue.filter(filter, (filters as any)[filter])
  })
}

export default filtersPlugin
