<template lang="pug">
  .page-admin-users-username

    Breadcrumbs(:crumbs="crumbs")

    pre(v-if="user") {{ user }}
</template>

<script>
export default {
  name: 'PageAdminUsersUsername',

  transition: 'fade',

  components: {
    Breadcrumbs: () => import('@/components/layout/header/Breadcrumbs'),
  },

  data: () => ({
    user: null,
  }),

  computed: {
    crumbs () {
      return [
        { text: 'Admin', to: '/admin' },
        { text: 'Users', to: '/admin/users' },
        {
          text: (this.user != null) ? this.user.username : '',
          active: true,
        },
      ]
    },
  },

  async asyncData ({ app: { $axios }, params }) {
    const { data: user } = await $axios.get(`/api/users/${params.username}`)
    return { user }
  },
}
</script>
