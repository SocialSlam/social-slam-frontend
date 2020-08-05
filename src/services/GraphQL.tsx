import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloQueryResult,
} from '@apollo/client'

export type QueryResult<T = any> =
  | {
      result: ApolloQueryResult<T>
      error: undefined
    }
  | {
      result: undefined
      error: any
    }

export const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
})

export async function query<T = any>(query: string) {
  const result = await client.query<T>({
    query: gql`
      ${query}
    `,
  })

  if (result.errors) throw new Error(result.errors.toString())

  return result.data
}

export async function mutation<T = any>(query: string) {
  const result = await client.mutate<T>({
    mutation: gql`
      ${query}
    `,
  })

  if (result.errors) throw new Error(result.errors.toString())

  return result.data
}
