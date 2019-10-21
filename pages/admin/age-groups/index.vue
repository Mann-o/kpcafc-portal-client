<template lang="pug">
  .page-admin-age-groups-index

    Breadcrumbs(:crumbs="crumbs")

    .page-admin-age-groups-index__buttons
      BButton.mr-2(v-b-modal.new-age-group variant="success") Create New Age Group
      SpinnerButton(
        @click="index()"
        :disabled="indexing || deleting"
        :loading="indexing"
        label="Refresh"
        label-when-loading="Refreshing"
      )

    .page-admin-age-groups-index__table
      BTable(
        id="age-groups-table"
        :busy.sync="indexing"
        :fields="fields"
        :items="ageGroups"
        :current-page="currentPage"
        :per-page="10"
        empty-text="No age groups found!"
        primary-key="id"
        responsive="sm"
        show-empty
        striped
        hover
        small
        bordered
      )
        template(slot="table-busy")
          .text-center.text-info.my-2
            BSpinner.align-middle
            strong.ml-2 Fetching age groups...
        template(slot="cell(isPublic)" slot-scope="row")
          FontIcon(
            set="duotone"
            :icon="row.item.isPublic ? 'check' : 'times'"
            :fixed="true"
            :style="{ color: row.item.isPublic ? 'green' : 'red' }"
          )
        template(slot="cell(createdAt)" slot-scope="row")
          span {{ row.item.createdAt | dateFormat('dd/MM/yyyy - HH:mm') }}
        template(slot="cell(updatedAt)" slot-scope="row")
          span {{ row.item.updatedAt | dateFormat('dd/MM/yyyy - HH:mm') }}
        template(slot="cell(actions)" slot-scope="row")
          BButton.mr-2(size="sm" :to="`/admin/age-groups/${row.item.slug}`" variant="primary" :disabled="deleting") View
          BButton(@click="destroy(row.item)" size="sm" variant="danger" :disabled="deleting") Delete

      BPagination(
        v-if="ageGroups.length > 10"
        v-model="currentPage"
        :total-rows="ageGroups.length"
        :per-page="10"
        aria-controls="age-groups-table"
      )
</template>

<script>
import index from '@/mixins/crud/index'

export default {
  name: 'PageAdminAgeGroupsIndex',

  transition: 'fade',

  mixins: [index('ageGroups')],

  data: () => ({
    crumbs: [
      { text: 'Admin', to: '/admin' },
      { text: 'Age Groups', active: true },
    ],
    fields: [
      { key: 'name', sortable: true },
      { key: 'shortName', sortable: true },
      { key: 'isPublic', sortable: true },
      { key: 'createdAt', sortable: true },
      { key: 'updatedAt', sortable: true },
      { key: 'actions', label: 'Actions' },
    ],
  }),
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/mixins/bem'

.page-admin-age-groups-index

  +has(buttons)
    padding-bottom: 1rem
</style>
