<template lang="pug">
  .layout-auth
    .layout-auth__content
      nuxt
</template>

<script>
export default {
  name: 'LayoutAuth',
}
</script>

<style lang="stylus">
@import '~assets/styles/animation/fade'
@import '~assets/styles/mixins/bem'

.layout-auth

  +has(content)
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
</style>
