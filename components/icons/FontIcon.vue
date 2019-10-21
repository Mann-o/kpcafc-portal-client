<template lang="pug">
  FontAwesomeIcon(
    :icon="iconFromSet"
    :spin="spin"
    :size="size"
    :fixed-width="fixed"
  )
</template>

<script>
export default {
  name: 'FontIcon',

  props: {
    set: {
      type: String,
      default: 'regular',
    },
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '1x',
    },
    spin: {
      type: Boolean,
      default: false,
    },
    pulse: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    iconFromSet () {
      return [
        `fa${this.set.charAt(0).toLowerCase()}`,
        this.icon,
      ]
    },
  },
}
</script>
