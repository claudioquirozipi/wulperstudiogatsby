import React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

const POST_MUTATION = gql`
  mutation CreateContact($input: createContactInput) {
    createContact(input: $input) {
      contact {
        id
        name
        email
        message
      }
    }
  }
`
const PostTemplate = () => {
  const input = {
    name: "hola",
    email: "correo",
    message: "menssge",
  }

  return (
    <Mutation mutation={POST_MUTATION} variables={{ input }}>
      {() => (
        <button onClick={() => console.log("... you'll implement this 🔜")}>
          Submit
        </button>
      )}
    </Mutation>
  )
}

export default PostTemplate
