const resolvers = {
  Query: {
    countries: (parent, args, { dataSources }, info) =>
      dataSources.countriesAPI.getAllCountries(),
    country: (parent, { name }, { dataSources }, info) =>
      dataSources.countriesAPI.getCountryByName({ name }),
  },
  Currency: {
    rate: ({ code }, { base }, { dataSources }, info) =>
      dataSources.currencyAPI.getRateByCode({ code, base }),
  },
}

export default resolvers
