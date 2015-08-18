import React from 'react'
import Relay from 'react-relay'

class Users extends React.Component {
  render() {
    return (
      <div>
        // Error: undefined (.map) is not a function
        // this.props.users is first user object, should be array
        {this.props.users.map(user => {
          return <div>{user.name}</div>
        })}
      </div>
    )
  }
}

export default Relay.createContainer(Users, {
  fragments: {
    users: () => Relay.QL`
      fragment on User {
        name
      }
    `
  }
})
