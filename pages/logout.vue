<template lang="pug">
  .page-logout
    p Please wait whilst you are logged out...
</template>

<script>
export default {
  name: 'PageLogout',

  mounted () {
    this.$auth.logout()
    this.$router.push('/login')
  },
}
</script>
