class ACL {
  constructor ($auth) {
    this.$auth = $auth
  }

  isAdministrator () {
    return this.$auth.loggedIn && this.hasRole('administrator')
  }

  hasRole (role) {
    return this.$auth.user.roles.includes(role)
  }

  hasPermission (permission) {
    return this.$auth.user.permissions.includes(permission)
  }
}

export default function ({ $auth }, inject) {
  const acl = new ACL($auth)
  inject('acl', acl)
}
