export default ({ app: { $acl }, error }) => {
  if (!$acl.isAdministrator) {
    return error({
      statusCode: 404,
      message: 'Page not found',
    })
  }
}
