<template lang="pug">
  h1 Users
</template>

<script>
export default {
  name: 'PageUsersIndex',

  asyncData ({ app: { $acl }, error }) {
    if ($acl.isAdministrator()) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
