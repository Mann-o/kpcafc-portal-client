<template lang="pug">
  .error404
    h1 Not Found
    p The page you are looking for does not exist.
</template>

<script>
export default {
  name: 'Error404',

  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
