import { RESTDataSource } from "apollo-datasource-rest"
import { FIXER_API_ACCESS_KEY } from "../config"

class CurrencyAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = "http://data.fixer.io/api/"
  }

  async getRateByCode({ code, base }) {
    const { rates } = await this.get("latest", {
      access_key: FIXER_API_ACCESS_KEY,
      symbols: `${base},${code}`,
    })
    return Number((rates[code] / rates[base]).toFixed(6))
  }
}

export default CurrencyAPI
