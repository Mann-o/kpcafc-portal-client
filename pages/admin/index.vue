<template lang="pug">
  .page-admin-index
    BNavbar(variant="dark" type="dark")
      BNavbarNav
        BNavItem(to="/admin/users" active-class="active" exact) Users
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
