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
        BButton(type="submit" variant="primary" :disabled="isLoggingIn")
          span Login
          BSpinner(v-if="isLoggingIn" :style="{ marginLeft: '8px' }" small)
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PageLogin',

  layout: 'auth',

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
      this.$nuxt.$loading.start()
      this.startLoggingIn()
      try {
        await this.$auth.loginWith('local', { data: this.credentials })
      } catch (error) {
        this.$bvToast.toast(
          'Invalid Login ID and/or password, please try again.',
          {
            title: 'Error',
            autoHideDelay: 5000,
            variant: 'danger',
          }
        )
      }
      this.stopLoggingIn()
      this.$nuxt.$loading.finish()
    },
  },
}
</script>

<style lang="stylus">
.page-login
  max-width: 60rem
</style>
