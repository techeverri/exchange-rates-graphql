# Exchange Rates GraphQL

## Demo

https://exchange-rates-graphql.techeverri.now.sh/

## Trello

https://trello.com/b/SrNiVbtL/exchange-rates

### GraphQL Playground

https://exchange-rates-graphql.techeverri.now.sh/graphql

#### Query

```graphql
query CountryQuery($name: String!, $base: String!) {
  country(name: $name) {
    name
    population
    currencies {
      name
      code
      symbol
      rate(base: $base)
    }
    flag
  }
}
```

#### Query Variables

```json
{
  "name": "Colombia",
  "base": "SEK"
}
```

#### HTTP Headers

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMmZkZGIxMy0xNGFmLTQxYTUtODBjMi0zMDQ5MTk5MWNhNjUiLCJpYXQiOjE1NjY3NzEzNjIsImp0aSI6ImRmNGZlYzAzLWU3YTYtNDRhNi04YmMwLWIzZDgxODc3MTFhOCJ9.kPH7-zCEa4O89JmP9qu5jr9AgDowAF7oeHWGUx1WNms"
}
```

## Development

To run the service you need to provide the following environment variables

```
PORT=8080
JWT_SECRET_KEY=ZXhjaGFuZ2UtcmF0ZXMtZ3JhcGhxbA==
FIXER_API_ACCESS_KEY=1b1221e39fca2bbcc8e99a37115992c4
CORS_ORIGIN_HEADER=https://i6ij6.csb.app
```

### System requirements

Make sure you have:

- [Node.js](https://nodejs.org/) v10.16.0 or greater
- [Yarn](https://yarnpkg.com/) v1.16.0 or greater

### CodeSandbox

https://codesandbox.io/s/github/techeverri/exchange-rates-graphql
