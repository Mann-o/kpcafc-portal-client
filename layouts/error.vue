<template lang="pug">
  .nuxt-error
    component(:is="errorPage" :error="error")
</template>

<script>
export default {
  name: 'LayoutError',

  layout: 'raw',

  components: {
    Error404: () => import('@/components/errors/Error404'),
    Error500: () => import('@/components/errors/Error500'),
  },

  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    errorPage () {
      if (this.error.statusCode === 404) {
        return 'Error404'
      }

      return 'Error500'
    },
  },
}
</script>

<style lang="stylus">
@import '~assets/styles/animation/fade'
</style>
