import React from 'react'
import Relay from 'react-relay'
import Users from './Users'
import HomeRoute from './HomeRoute'

React.render(<Relay.RootContainer Component={Users} route={new HomeRoute()} />, document.getElementById('app'))
