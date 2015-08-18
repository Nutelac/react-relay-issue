import Relay from 'react-relay'

export default class extends Relay.Route {
  static routeName = 'HomeRoute'
  static path = '/'
  static queries = {
    users: (Component) => Relay.QL`
      query {
        users {
          ${Component.getFragment('users')}
        }
      }
    `,
  }
}
