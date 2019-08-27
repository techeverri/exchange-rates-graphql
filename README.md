# Exchange Rates GraphQL

## System requirements

Make sure you have:

- [Node.js](https://nodejs.org/) v10.16.0 or greater
- [Yarn](https://yarnpkg.com/) v1.16.0 or greater

## Examples

### Query

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

### Query Variables

```json
{
  "name": "Colombia",
  "base": "SEK"
}
```

### HTTP Headers

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJmMmZkZGIxMy0xNGFmLTQxYTUtODBjMi0zMDQ5MTk5MWNhNjUiLCJpYXQiOjE1NjY3NzEzNjIsImp0aSI6ImRmNGZlYzAzLWU3YTYtNDRhNi04YmMwLWIzZDgxODc3MTFhOCJ9.kPH7-zCEa4O89JmP9qu5jr9AgDowAF7oeHWGUx1WNms"
}
```
