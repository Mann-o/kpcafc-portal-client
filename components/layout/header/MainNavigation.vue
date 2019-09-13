<template lang="pug">
  BNavbar(toggleable="lg" type="dark" variant="primary")
    BNavbarBrand(to="/") KPCAFC Portal

    BNavbarToggle(target="nav-collapse")

    BCollapse(id="nav-collapse" is-nav)
      BNavbarNav(sticky)
        BNavItem(to="/" active-class="active" exact) Home
        BNavItem(to="/users" active-class="active" v-if="$acl.isAdministrator") Users
        BNavItem(to="/logout" active-class="active") Logout
</template>

<script>
export default {
  name: 'MainNavigation',
}
</script>
