<template lang="pug">
  .page-admin-users-index

    Breadcrumbs(:crumbs="crumbs")

    .page-admin-users-index__buttons
      BButton.mr-2(v-b-modal.new-user variant="success") Create New User
      SpinnerButton(
        @click="index()"
        :disabled="indexing || deleting"
        :loading="indexing"
        label="Refresh"
        label-when-loading="Refreshing"
      )

    .page-admin-users-index__table
      BTable(
        id="users-table"
        :busy.sync="indexing"
        :fields="fields"
        :items="users"
        :current-page="currentPage"
        :per-page="10"
        empty-text="No users found!"
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
            strong.ml-2 Fetching users...
        template(slot="cell(username)" slot-scope="row")
          nuxt-link(:to="`/admin/users/${row.item.username}`") {{ row.item.username }}
        template(slot="cell(emailAddress)" slot-scope="row")
          a(:href="`mailto:${row.item.emailAddress}`") {{ row.item.emailAddress }}
        template(slot="cell(gender)" slot-scope="row")
          span {{ row.item.gender | capitalise }}
        template(slot="cell(lastLoggedIn)" slot-scope="row")
          span {{ row.item.lastLoggedIn | dateFormat('dd/MM/yyyy - HH:mm') }}
        template(slot="cell(createdAt)" slot-scope="row")
          span {{ row.item.createdAt | dateFormat('dd/MM/yyyy - HH:mm') }}
        template(slot="cell(updatedAt)" slot-scope="row")
          span {{ row.item.updatedAt | dateFormat('dd/MM/yyyy - HH:mm') }}
        template(slot="cell(actions)" slot-scope="row")
          BButton.mr-2(size="sm" :to="`/admin/users/${row.item.username}`" variant="primary" :disabled="deleting") View
          BButton(@click="destroy(row.item)" size="sm" variant="danger" :disabled="deleting") Delete

      BPagination(
        v-if="users.length > 10"
        v-model="currentPage"
        :total-rows="users.length"
        :per-page="10"
        aria-controls="users-table"
      )
</template>

<script>
import CrudIndex from '@/mixins/crud/index'

export default {
  name: 'PageAdminUsersIndex',

  transition: 'fade',

  mixins: [CrudIndex('users')],

  data: () => ({
    crumbs: [
      { text: 'Admin', to: '/admin' },
      { text: 'Users', active: true },
    ],
    fields: [
      { key: 'fullName', sortable: true },
      { key: 'username', sortable: true },
      { key: 'emailAddress', sortable: true },
      { key: 'gender', sortable: true },
      { key: 'lastLoggedIn', sortable: true },
      { key: 'createdAt', sortable: true },
      { key: 'updatedAt', sortable: true },
      { key: 'actions', label: 'Actions' },
    ],
  }),
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/core/mixins/bem'

.page-admin-users-index

  +has(buttons)
    padding-bottom: 1rem
</style>
