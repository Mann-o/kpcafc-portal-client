<template lang="pug">
  .page-admin
    nuxt-child
</template>

<script>
export default {
  name: 'PageAdmin',

  middleware: ['is-admin'],
}
</script>
