import gql from 'graphql-tag'

export default gql`
  query GetProducts($query: String!) {
    events(where: { title: $query }) {
      title
      description
    }
  }
`
