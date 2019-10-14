export default {
  methods: {
    toastError (error, fallbackErrorMessage) {
      this.$bvToast.toast(
        this.generateErrorMessage(error, fallbackErrorMessage),
        {
          title: 'Error',
          autoHideDelay: 5000,
          variant: 'danger',
        },
      )
    },
    toastSuccess (successMessage) {
      this.$bvToast.toast(successMessage, {
        title: 'Success',
        autoHideDelay: 5000,
        variant: 'success',
      })
    },
    generateErrorMessage (error, fallbackErrorMessage) {
      return (
        error.response &&
        error.response.status &&
        error.response.status === 422
      )
        ? error.response.data.errors[0].message
        : fallbackErrorMessage
    },
  },
}
