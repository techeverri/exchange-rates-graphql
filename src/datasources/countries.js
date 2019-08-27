import { RESTDataSource } from "apollo-datasource-rest"

class CountriesAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "https://restcountries.eu/rest/v2/"
  }

  countryReducer(country) {
    return {
      name: country.name,
      population: country.population,
      currencies: country.currencies,
      flag: country.flag,
    }
  }

  async getAllCountries() {
    const response = await this.get("all")
    return Array.isArray(response)
      ? response.map(country => this.countryReducer(country))
      : []
  }

  async getCountryByName({ name }) {
    const response = await this.get(`name/${name}`)
    return this.countryReducer(response[0])
  }
}

export default CountriesAPI
