<template lang="pug">
  .page-admin-age-groups-slug

    Breadcrumbs(:crumbs="crumbs")

    pre(v-if="ageGroup") {{ ageGroup }}
</template>

<script>
export default {
  name: 'PageAdminAgeGroupsSlug',

  transition: 'fade',

  components: {
    Breadcrumbs: () => import('@/components/layout/header/Breadcrumbs'),
  },

  data: () => ({
    ageGroup: null,
  }),

  computed: {
    crumbs () {
      return [
        { text: 'Admin', to: '/admin' },
        { text: 'Age Groups', to: '/admin/age-groups' },
        {
          text: (this.ageGroup != null) ? this.ageGroup.name : '',
          active: true,
        },
      ]
    },
  },

  async asyncData ({ app: { $axios }, params }) {
    const { data: ageGroup } = await $axios.get(`/api/age-groups/${params.slug}`)
    return { ageGroup }
  },
}
</script>
