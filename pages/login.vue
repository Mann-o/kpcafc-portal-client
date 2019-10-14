<template lang="pug">
  .page-login
    BCard(title="Login")

      h3(slot="header") KPCAFC Portal
      BCardText Please enter your login credentials

      BForm(@submit.prevent="login")
        BFormGroup(
          label="Login ID"
          label-for="loginId"
          description="This can be your username or email address"
        )
          BFormInput(
            id="loginId"
            :value="credentials.loginId"
            @input="updateLoginId"
            placeholder="Enter Login ID"
            :disabled="isLoggingIn"
          )
        BFormGroup(label="Password" label-for="password")
          BFormInput(
            type="password"
            id="password"
            :value="credentials.password"
            @input="updatePassword"
            placeholder="Enter Password"
            :disabled="isLoggingIn"
          )
        SpinnerButton(
          type="submit"
          :disabled="isLoggingIn"
          :loading="isLoggingIn"
          label="Login"
          label-when-loading="Logging in"
        )
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Toaster from '@/mixins/toaster'

export default {
  name: 'PageLogin',

  layout: 'auth',

  transition: 'fade',

  components: {
    SpinnerButton: () => import('@/components/elements/SpinnerButton'),
  },

  mixins: [Toaster],

  computed: {
    ...mapState('login', [
      'credentials',
      'isLoggingIn',
    ]),
  },

  methods: {
    ...mapActions('login', [
      'updateLoginId',
      'updatePassword',
      'startLoggingIn',
      'stopLoggingIn',
    ]),
    async login () {
      try {
        this.startLoggingIn()
        await this.$auth.loginWith('local', { data: this.credentials })
      } catch (error) {
        this.toastError(error, 'Invalid Login ID and/or Password, please try again.')
        this.stopLoggingIn()
      }
    },
  },
}
</script>

<style lang="stylus">
.page-login
  max-width: 60rem
</style>
