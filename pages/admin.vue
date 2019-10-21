<template lang="pug">
  .page-admin
    BNavbar(variant="dark" type="dark")
      BNavbarNav
        BNavItem(to="/admin/users" active-class="active") Users
        BNavItem(to="/admin/age-groups" active-class="active") Age Groups
    NuxtChild
</template>

<script>
export default {
  name: 'PageAdmin',

  transition: 'fade',

  middleware: ['is-admin'],
}
</script>
