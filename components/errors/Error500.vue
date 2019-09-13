<template lang="pug">
  .error500
    h1 Server Error
    p Some sort of server error occurred
</template>

<script>
export default {
  name: 'Error500',

  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
