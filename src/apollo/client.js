import ApolloClient from "apollo-boost"

const token = ""
const url = "https://admin.wulperstudio.com"

const client = new ApolloClient({
  uri: `${url}/graphql`,
  request: operation => {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
})

export default client
