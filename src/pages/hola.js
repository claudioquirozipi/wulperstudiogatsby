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

const Hola = () => {
  const input = {
    name: "hola",
    email: "correo",
    message: "menssge",
  }

  const onClick = () => {}

  return (
    <div>
      <h1>hola</h1>
      <Mutation mutation={POST_MUTATION} variables={{ input }}>
        {() => <button onClick={onClick}>Submit</button>}
      </Mutation>
    </div>
  )
}

export default Hola
