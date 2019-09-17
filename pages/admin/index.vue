<template lang="pug">
  .page-admin-index
    nuxt-child
</template>

<script>
export default {
  name: 'PageAdminIndex',

  asyncData ({ app: { $acl }, error }) {
    if (!$acl.isAdministrator()) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
