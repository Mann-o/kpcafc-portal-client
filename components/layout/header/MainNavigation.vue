<template lang="pug">
  BNavbar(toggleable="lg" type="dark" variant="primary")
    BNavbarBrand(to="/") KPCAFC Portal

    BNavbarToggle(target="nav-collapse")

    BCollapse(id="nav-collapse" is-nav)
      BNavbarNav(sticky)
        BNavItem(to="/" active-class="active" exact) Home
        BNavItem(to="/teams" active-class="active") My Teams
        BNavItem(to="/players" active-class="active") My Players
        BNavItem(to="/subs" active-class="active") Sub Sheets
        BNavItem(to="/admin" active-class="active" v-if="$acl.isAdministrator") Admin
        BNavItem(to="/logout" active-class="active") Logout
</template>

<script>
export default {
  name: 'MainNavigation',
}
</script>
