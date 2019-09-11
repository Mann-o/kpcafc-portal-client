<template lang="pug">
  .layout-auth
    .layout-auth__content
      nuxt
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'LayoutAuth',
})
</script>

<style lang="stylus">
@import '~assets/styles/mixins/bem'

.layout-auth

  +has(content)
    height: 100vh
    display: flex
    justify-content: center
    align-items: center
</style>
