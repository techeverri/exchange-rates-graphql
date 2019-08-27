import CountriesAPI from "./countries"
import CurrencyAPI from "./currency"

const datasources = () => ({
  countriesAPI: new CountriesAPI(),
  currencyAPI: new CurrencyAPI(),
})

export default datasources
