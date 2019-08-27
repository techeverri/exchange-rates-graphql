import { gql } from "apollo-server-express"

const typeDefs = gql`
  type Query {
    countries: [Country]
    country(name: String!): Country
  }

  type Country {
    name: String
    population: Int
    currencies: [Currency]
    flag: String
  }

  type Currency {
    name: String
    code: String
    symbol: String
    rate(base: String!): Float
  }
`

export default typeDefs
