<template lang="pug">
  .layout-default
    MainNavigation

    BContainer(fluid)
      BRow
        BCol
          nuxt
</template>

<script>
export default {
  name: 'LayoutDefault',

  components: {
    MainNavigation: () => import('@/components/layout/header/MainNavigation'),
  },
}
</script>

<style lang="stylus">
@import '~assets/styles/animation/fade'
</style>
