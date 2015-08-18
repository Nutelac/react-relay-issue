import {
  GraphQLNonNull,
  GraphQLList,
  GraphQLString,
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'

import {
  nodeDefinitions,
  fromGlobalId,
  globalIdField
} from 'graphql-relay'

let users = [
  { id: 0, name: 'John' },
  { id: 1, name: 'Jane' }
]

let { nodeInterface, nodeField } = nodeDefinitions(
  globalId => {
    let { type, id } = fromGlobalId(globalId)
    return users[id]
  },
  obj => {
    return userType
  }
)

let userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: globalIdField('User'),
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }),
  interfaces: [nodeInterface]
})

let queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    users: {
      type: new GraphQLList(userType),
      resolve () {
        return users
      }
    }
  })
})

export let Schema = new GraphQLSchema({
  query: queryType
})
